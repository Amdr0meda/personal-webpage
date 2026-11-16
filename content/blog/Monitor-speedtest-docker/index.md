---
title: "Montaje de Speedtest Tracker en Proxmox + Telegram y configuración"
description: "Cómo instalar Speedtest Tracker en un contenedor LXC de Proxmox, automatizar los tests de velocidad y recibir notificaciones en tu propio bot de Telegram."
summary: "Monitoriza la velocidad de tu conexión a Internet con Speedtest Tracker: tests automáticos, histórico de resultados y avisos en Telegram."
slug: "speedtest-tracker-proxmox-telegram"
aliases:
  - "/blog/montaje-de-speedtest-tracker-en-proxmox--telegram-y-configuración/"
date: 2024-09-20
lastmod: 2025-03-16
draft: false
wip: true
weight: 50
categories: []
tags: [proxmox, lxc, speedtest, speedtestracker, telegram]
contributors: []
pinned: false
homepage: false
seo:
  title: "Speedtest Tracker en Proxmox con avisos en Telegram"
  description: "Cómo instalar Speedtest Tracker en un contenedor LXC de Proxmox, automatizar los tests de velocidad y recibir notificaciones en tu propio bot de Telegram."
  canonical: ""
  noindex: false
---

## 1. Notas y consideraciones

En este artículo veremos cómo instalar y configurar **Speedtest Tracker** sobre un contenedor LXC, automatizando los tests e integrándolo con notificaciones en tu propio bot de Telegram.

> 🚧 **Artículo en proceso.** Estas son las secciones que iré completando:

1. Instalación del contenedor
2. Configuraciones iniciales
3. Parametrización de Speedtest Tracker
4. Automatización y cron jobs
5. Integración con Telegram
6. Resultados

## Enlaces de referencia

- [Repositorio de Speedtest Tracker en GitHub](https://github.com/alexjustesen/speedtest-tracker)
- [Documentación oficial de Speedtest Tracker](https://docs.speedtest-tracker.dev/)
