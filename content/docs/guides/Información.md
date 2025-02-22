---
title: "Información de tu conexión"
description: "Información de tu conexión"
summary: "Información de tu conexión"
date: 2023-09-07T16:13:18+02:00
lastmod: 2023-09-07T16:13:18+02:00
draft: false
weight: 910
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---
---

- **Ip:** <span id="ip">Cargando...</span></p>
- **País:** <span id="pais">Cargando...</span></p>
- **Http:** <span id="http">Cargando...</span></p>  
- **Warp:** <span id="warp">Cargando...</span></p>  
- **Sni:** <span id="sni">Cargando...</span></p>  
- **TLS:** <span id="tls">Cargando...</span></p>  


<script>
fetch("https://cloudflare.com/cdn-cgi/trace")
    .then(response => response.text())
    .then(data => {
        let dataObj = {};
        data.split("\n").forEach(line => {
            let [key, value] = line.split("=");
            if (key && value) {
                dataObj[key] = value;
            }
        });
        document.getElementById("ip").textContent = dataObj["ip"] || "No disponible";
        document.getElementById("pais").textContent = dataObj["loc"] || "No disponible";
        document.getElementById("http").textContent = dataObj["http"] || "No disponible";
        document.getElementById("warp").textContent = dataObj["warp"] || "No disponible";
        document.getElementById("sni").textContent = dataObj["sni"] || "No disponible";
        document.getElementById("tls").textContent = dataObj["tls"] || "No disponible";
    })
</script>

<br>

>Nota: Información extraida localmente de: cloudflare.com/cdn-cgi/trace.