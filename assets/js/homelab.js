// Paneles del homelab: pinta datos en vivo en las páginas de /homelab/.
// Fuentes soportadas (data-type del <section class="panel">):
//   - "atlas": API pública de RIPE Atlas (data-probe = ID de la sonda). No necesita nada más.
//   - "json":  un JSON propio (data-url) con este formato:
//       {
//         "updated": "2026-11-17T10:00:00Z",                       // opcional
//         "metrics": [{ "label": "Ratio", "value": "1,92", "hint": "opcional" }],
//         "items":   [{ "name": "Proxmox", "status": "up|warn|down|info", "detail": "texto" }]
//       }
// Se refresca cada data-refresh segundos (mínimo 60).
'use strict';

(() => {
  const panel = document.querySelector('.panel[data-type]');
  if (!panel) return;

  const type = panel.dataset.type;
  const refresh = Math.max(60, parseInt(panel.dataset.refresh, 10) || 300) * 1000;
  const $ = (sel) => panel.querySelector(sel);
  const fmtNum = new Intl.NumberFormat('es-ES');
  const fmtDate = new Intl.DateTimeFormat('es-ES', { dateStyle: 'medium', timeStyle: 'short' });
  const fmtDay = new Intl.DateTimeFormat('es-ES', { dateStyle: 'medium' });

  const el = (tag, cls, text) => {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text !== undefined && text !== null) n.textContent = String(text);
    return n;
  };

  // Solo texto: "Online" o "Offline". Si la fuente falla, se vuelven a poner guiones.
  function setState(online, text) {
    const st = $('.panel__state');
    st.className = 'panel__state ' + (online ? 'is-online' : 'is-offline');
    st.textContent = text || (online ? 'Online' : 'Offline');
  }

  function clear() {
    panel.querySelectorAll('.panel__metric-value').forEach((v) => { v.textContent = '—'; });
    panel.querySelectorAll('.panel__metric-hint').forEach((h) => h.remove());
    const list = $('.panel__items');
    if (list) list.hidden = true;
    $('.panel__updated').textContent = 'Sin datos ahora mismo';
  }

  function render(data) {
    const metrics = $('.panel__metrics');
    metrics.replaceChildren(...(data.metrics || []).map((m) => {
      const box = el('div', 'panel__metric');
      box.append(el('span', 'panel__metric-label', m.label), el('span', 'panel__metric-value', m.value));
      if (m.hint) box.append(el('span', 'panel__metric-hint', m.hint));
      return box;
    }));

    let list = $('.panel__items');
    if (!list) { list = el('ul', 'panel__items'); metrics.after(list); }
    list.replaceChildren(...(data.items || []).map((it) => {
      const li = el('li', 'panel__item');
      const status = ['up', 'warn', 'down', 'info'].includes(it.status) ? it.status : 'info';
      li.append(el('span', 'panel__item-dot is-' + status), el('span', 'panel__item-name', it.name), el('span', 'panel__item-detail', it.detail));
      return li;
    }));
    list.hidden = !(data.items || []).length;

    const when = data.updated ? new Date(data.updated) : new Date();
    $('.panel__updated').textContent = 'Actualizado: ' + fmtDate.format(when);
  }

  // RIPE Atlas → formato común. Nunca se muestra la IP de la sonda.
  function fromAtlas(p) {
    const connected = p.status && p.status.name === 'Connected';
    const days = (s) => fmtNum.format(Math.floor((s || 0) / 86400)) + ' días';
    const date = (t) => (t ? fmtDay.format(new Date(t * 1000)) : '—');
    return {
      updated: new Date().toISOString(),
      metrics: [
        { label: 'Estado', value: connected ? 'Conectada' : (p.status && p.status.name) || '—', hint: p.status && p.status.since ? 'desde el ' + fmtDay.format(new Date(p.status.since)) : '' },
        { label: 'Sonda', value: '#' + p.id, hint: p.is_anchor ? 'Anchor' : '' },
        { label: 'Uptime total', value: days(p.total_uptime) },
        { label: 'País · ASN', value: [p.country_code, p.asn_v4 ? 'AS' + p.asn_v4 : null].filter(Boolean).join(' · ') || '—' },
        { label: 'En la red desde', value: date(p.first_connected) },
        { label: 'Última conexión', value: date(p.last_connected) },
      ],
      items: [],
    };
  }

  async function load() {
    try {
      let data;
      if (type === 'atlas') {
        const res = await fetch('https://atlas.ripe.net/api/v2/probes/' + encodeURIComponent(panel.dataset.probe) + '/', { cache: 'no-store' });
        if (!res.ok) throw new Error(res.status);
        const probe = await res.json();
        data = fromAtlas(probe);
        setState(true, probe.status && probe.status.name === 'Connected' ? 'Online' : 'Sonda desconectada');
      } else {
        const res = await fetch(panel.dataset.url, { cache: 'no-store' });
        if (!res.ok) throw new Error(res.status);
        data = await res.json();
        setState(true);
      }
      render(data);
    } catch (e) {
      setState(false);
      clear();
    }
  }

  load();
  setInterval(() => { if (!document.hidden) load(); }, refresh);
})();
