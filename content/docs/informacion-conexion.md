---
title: "Información de tu conexión"
description: "Consulta tu IP pública, país, versión de HTTP y TLS, y si estás usando Cloudflare WARP."
summary: "Tu IP pública, país, protocolo, TLS, WARP y señales de privacidad, vistos desde Cloudflare y tu navegador."
slug: "informacion-de-tu-conexion"
aliases:
  - "/docs/guides/información-de-tu-conexión/"
  - "/docs/guides/información/"
  - "/docs/guides/informacion-de-tu-conexion/"
date: 2023-09-07T16:13:18+02:00
lastmod: 2026-11-17
draft: false
weight: 910
toc: false
seo:
  title: "Información de tu conexión: IP, país, TLS y WARP"
  description: "Consulta tu IP pública, país, versión de HTTP y TLS, y si estás usando Cloudflare WARP."
  canonical: ""
  noindex: false
---

Así ve tu conexión el borde de Cloudflare más cercano a ti, junto con lo que informa tu propio navegador.

<div class="conn-grid" id="conn" aria-live="polite">
  <div class="conn-item conn-item--wide"><span class="conn-label">IP pública</span><span class="conn-value" data-key="ip">Cargando…</span></div>
  <div class="conn-item"><span class="conn-label">País</span><span class="conn-value" data-key="loc">…</span></div>
  <div class="conn-item"><span class="conn-label">Centro de datos</span><span class="conn-value" data-key="colo">…</span></div>
  <div class="conn-item"><span class="conn-label">HTTP</span><span class="conn-value" data-key="http">…</span></div>
  <div class="conn-item"><span class="conn-label">TLS</span><span class="conn-value" data-key="tls">…</span></div>
  <div class="conn-item"><span class="conn-label">WARP</span><span class="conn-value" data-key="warp">…</span></div>
  <div class="conn-item"><span class="conn-label">SNI cifrado</span><span class="conn-value" data-key="sni">…</span></div>
  <div class="conn-item"><span class="conn-label">Cloudflare Gateway</span><span class="conn-value" data-key="gateway">…</span></div>
  <div class="conn-item"><span class="conn-label">Protocolo usado</span><span class="conn-value" data-extra="proto">…</span></div>
  <div class="conn-item"><span class="conn-label">Zona horaria</span><span class="conn-value" data-extra="tz">…</span></div>
  <div class="conn-item"><span class="conn-label">Red estimada</span><span class="conn-value" data-extra="net">…</span></div>
  <div class="conn-item"><span class="conn-label">Global Privacy Control</span><span class="conn-value" data-extra="gpc">…</span></div>
  <div class="conn-item"><span class="conn-label">Do Not Track</span><span class="conn-value" data-extra="dnt">…</span></div>
</div>

<button type="button" class="btn btn-outline-primary btn-sm mt-3" id="conn-copy" hidden>Copiar IP</button>

<script>
(function () {
  var root = document.getElementById("conn");
  var copyBtn = document.getElementById("conn-copy");
  function parse(text) {
    var out = {};
    text.split("\n").forEach(function (line) {
      var i = line.indexOf("=");
      if (i > 0) out[line.slice(0, i)] = line.slice(i + 1);
    });
    return out;
  }
  function set(key, text) {
    var el = root.querySelector('[data-extra="' + key + '"]');
    if (el) el.textContent = text;
  }
  // Zonas horarias habituales por país, para avisar si no encajan con la IP (posible VPN).
  var TZ = { ES: ["Europe/Madrid", "Atlantic/Canary", "Africa/Ceuta"], PT: ["Europe/Lisbon", "Atlantic/Madeira", "Atlantic/Azores"],
    FR: ["Europe/Paris"], DE: ["Europe/Berlin"], IT: ["Europe/Rome"], GB: ["Europe/London"], IE: ["Europe/Dublin"],
    NL: ["Europe/Amsterdam"], BE: ["Europe/Brussels"], CH: ["Europe/Zurich"], AT: ["Europe/Vienna"], SE: ["Europe/Stockholm"],
    NO: ["Europe/Oslo"], DK: ["Europe/Copenhagen"], FI: ["Europe/Helsinki"], PL: ["Europe/Warsaw"], AD: ["Europe/Andorra"] };
  function local(d) {
    var tz = "";
    try { tz = Intl.DateTimeFormat().resolvedOptions().timeZone || ""; } catch (e) {}
    var known = TZ[d.loc];
    set("tz", !tz ? "No disponible" : (known && known.indexOf(tz) < 0 ? tz + " · no coincide con " + d.loc : tz));

    var c = navigator.connection;
    set("net", c && c.effectiveType
      ? c.effectiveType.toUpperCase() + (c.rtt ? " · ~" + c.rtt + " ms" : "") + (c.downlink ? " · ~" + c.downlink + " Mbps" : "")
      : "No disponible en este navegador");

    set("gpc", navigator.globalPrivacyControl === true ? "Activado" : "Desactivado");
    set("dnt", navigator.doNotTrack === "1" || window.doNotTrack === "1" ? "Activado" : "Desactivado");
  }
  function protocol(url) {
    var names = { h3: "HTTP/3 (QUIC)", h2: "HTTP/2", "http/1.1": "HTTP/1.1" };
    var list = performance.getEntriesByName(new URL(url, location.href).href);
    var p = list.length ? list[list.length - 1].nextHopProtocol : "";
    set("proto", names[p] || p || "No disponible");
  }
  function render(d) {
    root.querySelectorAll("[data-key]").forEach(function (el) {
      el.textContent = d[el.dataset.key] || "No disponible";
    });
    local(d);
    if (d.ip && navigator.clipboard) {
      copyBtn.hidden = false;
      copyBtn.onclick = function () {
        navigator.clipboard.writeText(d.ip).then(function () {
          copyBtn.textContent = "¡Copiada!";
          setTimeout(function () { copyBtn.textContent = "Copiar IP"; }, 1500);
        });
      };
    }
  }
  function get(url) {
    return fetch(url, { cache: "no-store" }).then(function (r) {
      if (!r.ok) throw new Error(r.status);
      return r.text();
    }).then(function (t) {
      var d = parse(t);
      if (!d.ip) throw new Error("sin datos");
      protocol(url);
      return d;
    });
  }
  // Primero el propio dominio (servido por Cloudflare); si no, cloudflare.com como alternativa.
  get("/cdn-cgi/trace")
    .catch(function () { return get("https://cloudflare.com/cdn-cgi/trace"); })
    .then(render)
    .catch(function () {
      root.querySelectorAll("[data-key]").forEach(function (el) { el.textContent = "No disponible"; });
      local({});
      set("proto", "No disponible");
    });
})();
</script>

{{< callout context="note" title="Nota" icon="outline/info-circle" >}}
Los datos se obtienen en tu navegador desde el endpoint público `/cdn-cgi/trace` de Cloudflare y de las APIs del propio navegador. No se envían ni se guardan en ningún sitio.
{{< /callout >}}
