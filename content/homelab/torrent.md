---
title: "Estadísticas torrent"
summary: "Tráfico, ratio y actividad del cliente qBittorrent, siempre detrás de la VPN."
icon: "download"
weight: 30
description: "Tráfico, ratio y actividad del cliente qBittorrent, siempre detrás de la VPN."
date: 2026-11-17
draft: false
# Fuente de datos:
#   type: json + url → JSON con el formato común (un script en el LXC lo saca de la API de qBittorrent
#                      y lo publica; la WebUI de qBittorrent nunca se expone)
#   sin url → el panel aparece como Offline
source:
  type: none
  url: ""
refresh: 300
# Métricas que se muestran (con "—" mientras no haya datos reales)
labels:
  - "Subido"
  - "Descargado"
  - "Ratio"
  - "Torrents activos"
  - "Subida ahora"
  - "Bajada ahora"
seo:
  title: "Estadísticas torrent - Carlos Muñoz Torrijos"
  description: "Tráfico, ratio y actividad del cliente qBittorrent, siempre detrás de la VPN."
  canonical: ""
  noindex: false
---

Uso torrent para distribuir imágenes de distribuciones Linux y contenido libre. El contenedor y su VPN están explicados en [esta guía](/blog/qbittorrent-wireguard-mullvad-lxc-proxmox/).
