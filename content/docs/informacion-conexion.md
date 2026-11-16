---
title: "Información de tu conexión"
description: "Consulta tu IP pública, país, versión de HTTP y TLS, y si estás usando Cloudflare WARP."
summary: "Tu IP pública, país, HTTP, TLS y estado de WARP, vistos desde Cloudflare."
slug: "informacion-de-tu-conexion"
aliases:
  - "/docs/guides/información-de-tu-conexión/"
  - "/docs/guides/información/"
  - "/docs/guides/informacion-de-tu-conexion/"
date: 2023-09-07T16:13:18+02:00
lastmod: 2026-11-16
draft: false
weight: 910
toc: false
seo:
  title: "Información de tu conexión: IP, país, TLS y WARP"
  description: "Consulta tu IP pública, país, versión de HTTP y TLS, y si estás usando Cloudflare WARP."
  canonical: ""
  noindex: false
---

Así ve tu conexión el borde de Cloudflare más cercano a ti.

<div class="conn-grid" id="conn" aria-live="polite">
  <div class="conn-item conn-item--wide"><span class="conn-label">IP pública</span><span class="conn-value" data-key="ip">Cargando…</span></div>
  <div class="conn-item"><span class="conn-label">País</span><span class="conn-value" data-key="loc">…</span></div>
  <div class="conn-item"><span class="conn-label">Centro de datos</span><span class="conn-value" data-key="colo">…</span></div>
  <div class="conn-item"><span class="conn-label">HTTP</span><span class="conn-value" data-key="http">…</span></div>
  <div class="conn-item"><span class="conn-label">TLS</span><span class="conn-value" data-key="tls">…</span></div>
  <div class="conn-item"><span class="conn-label">WARP</span><span class="conn-value" data-key="warp">…</span></div>
  <div class="conn-item"><span class="conn-label">SNI cifrado</span><span class="conn-value" data-key="sni">…</span></div>
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
  function render(d) {
    root.querySelectorAll("[data-key]").forEach(function (el) {
      el.textContent = d[el.dataset.key] || "No disponible";
    });
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
      return d;
    });
  }
  // Primero el propio dominio (servido por Cloudflare); si no, cloudflare.com como alternativa.
  get("/cdn-cgi/trace")
    .catch(function () { return get("https://cloudflare.com/cdn-cgi/trace"); })
    .then(render)
    .catch(function () {
      root.querySelectorAll("[data-key]").forEach(function (el) { el.textContent = "No disponible"; });
    });
})();
</script>

> **Nota:** los datos se obtienen en tu navegador desde el endpoint público `/cdn-cgi/trace` de Cloudflare. No se envían ni se guardan en ningún sitio.
