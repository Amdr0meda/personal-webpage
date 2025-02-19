---
title: "Información"
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

- **Ip:** <span id="ip">Cargando...</span>  
- **Isp:** <span id="isp">Cargando...</span>  
- **Ciudad:** <span id="ciudad">Cargando...</span>  
- **País:** <span id="pais">Cargando...</span>  
- **Asn:** <span id="as">Cargando...</span>
- **Http:** <span id="http">Cargando...</span></p>
- **Warp:** <span id="warp">Cargando...</span></p>
- **Sni:** <span id="sni">Cargando...</span></p>

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

        document.getElementById("http").textContent = dataObj["http"] || "No disponible";
        document.getElementById("warp").textContent = dataObj["warp"] || "No disponible";
        document.getElementById("sni").textContent = dataObj["sni"] || "No disponible";
    })
    .catch(error => {
        console.error("Error obteniendo datos de Cloudflare:", error);
        document.getElementById("http").textContent = "Error al obtener datos";
        document.getElementById("warp").textContent = "Error al obtener datos";
        document.getElementById("sni").textContent = "Error al obtener datos";
    });
</script>
<script>
  fetch('http://ip-api.com/json/')
    .then(response => response.json())
    .then(data => {
      document.getElementById('ip').textContent = data.query;
      document.getElementById('isp').textContent = data.isp;
      document.getElementById('ciudad').textContent = data.city;
      document.getElementById('pais').textContent = data.country;
      document.getElementById('as').textContent = data.as;
    })
    .catch(error => console.error('Error obteniendo datos:', error));
</script>
<br><br>

>Nota: Información extraida localmente de:<br>
 **ip-api.com/json/** y **cloudflare.com/cdn-cgi/trace**.