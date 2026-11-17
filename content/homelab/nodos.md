---
title: "Estadísticas por nodo"
summary: "CPU, memoria, almacenamiento y uptime de cada nodo y contenedor de Proxmox."
icon: "server-2"
weight: 40
description: "CPU, memoria, almacenamiento y uptime de cada nodo y contenedor de Proxmox."
date: 2026-11-17
draft: false
# Fuente de datos:
#   type: json + url → JSON con el formato común (un script con pvesh lo genera y lo publica;
#                      la API de Proxmox nunca se expone)
#   type: link + url → botón a un panel externo (Grafana público, Beszel…)
#   sin url → el panel aparece como Offline
source:
  type: none
  url: ""
refresh: 120
# Métricas que se muestran (con "—" mientras no haya datos reales)
labels:
  - "Nodos"
  - "Contenedores"
  - "Máquinas virtuales"
  - "CPU"
  - "Memoria"
  - "Uptime del nodo"
seo:
  title: "Estadísticas por nodo - Carlos Muñoz Torrijos"
  description: "CPU, memoria, almacenamiento y uptime de cada nodo y contenedor de Proxmox."
  canonical: ""
  noindex: false
---
