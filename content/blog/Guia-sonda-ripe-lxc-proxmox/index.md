---
title: "Guía para instalar una sonda RIPE Atlas en un LXC (Debian) sobre Proxmox"
description: "Guía para instalar y configurar una sonda software RIPE Atlas dentro de un contenedor LXC con Debian 12 en Proxmox VE."
summary: "Pasos para instalar y configurar una sonda RIPE Atlas dentro de un contenedor Debian en Proxmox."
slug: "sonda-ripe-atlas-lxc-debian-proxmox"
aliases:
  - "/blog/guía-para-instalar-una-sonda-ripe-atlas-en-un-lxc-debian-sobre-proxmox/"
date: 2025-02-16
lastmod: 2025-02-17
draft: false
wip: true
weight: 50
categories: []
tags: [proxmox, debian, ripe, atlas, lxc]
contributors: []
pinned: false
homepage: false
seo:
  title: "Sonda RIPE Atlas en un LXC Debian sobre Proxmox"
  description: "Guía para instalar y configurar una sonda software RIPE Atlas dentro de un contenedor LXC con Debian 12 en Proxmox VE."
  canonical: ""
  noindex: false
---

## 1. Crear un contenedor LXC en Proxmox

Si todavía no tienes descargada la plantilla de **Debian 12**, descárgala desde el menú de *CT Templates* (ver imagen) y úsala después en el asistente de creación del contenedor.

![Ruta para descargar la plantilla de Debian 12 en Proxmox](./2.png "Descarga de la plantilla de Debian 12 desde CT Templates")

Requisitos mínimos:

- **1 GB** de RAM
- **1** núcleo
- **4 GB** de almacenamiento
- IP estática (fuera del rango DHCP del router)

> **Nota:** si tu ISP te da **IPv6**, configúralo también para que el router le entregue una dirección al contenedor.

## 2. Actualizaciones iniciales

Actualiza el contenedor con:

```bash
apt update && apt upgrade -y
```

> 🚧 **Artículo en proceso.** Seguiré completando esta guía con la instalación y el registro de la sonda.
