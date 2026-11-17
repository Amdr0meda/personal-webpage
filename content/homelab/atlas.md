---
title: "Nodo RIPE Atlas"
summary: "Mi sonda de RIPE Atlas: estado, uptime y lo que aporta a la red de medición."
icon: "antenna"
weight: 20
description: "Mi sonda de RIPE Atlas: estado, uptime y lo que aporta a la red de medición."
date: 2026-11-17
draft: false
# Fuente de datos: API pública de RIPE Atlas, sin servidor propio.
# Pon el ID de tu sonda (atlas.ripe.net → My Atlas → Probes) y el panel muestra los datos reales.
source:
  type: atlas
  probe: 0
refresh: 600
# Métricas que se muestran (con "—" mientras no haya datos reales)
labels:
  - "Estado"
  - "Sonda"
  - "Uptime total"
  - "País · ASN"
  - "En la red desde"
  - "Última conexión"
seo:
  title: "Nodo RIPE Atlas - Carlos Muñoz Torrijos"
  description: "Mi sonda de RIPE Atlas: estado, uptime y lo que aporta a la red de medición."
  canonical: ""
  noindex: false
---

La sonda hace mediciones (ping, traceroute, DNS, HTTP…) para la red de [RIPE Atlas](https://atlas.ripe.net/). A cambio gano créditos para lanzar mis propias mediciones. Cómo la monté está en [esta guía](/blog/sonda-ripe-atlas-lxc-debian-proxmox/).
