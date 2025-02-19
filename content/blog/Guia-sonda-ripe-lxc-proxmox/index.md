---
title: "Guía para instalar una sonda RIPE Atlas en un LXC (Debian) sobre Proxmox"
description: "Guia para realizar la instalación y configuración de una sonda ATLAS de RIPE, dentro de un contenedor Debian en una instancia de Proxmox."
summary: "Pasos necesarios para instalación y configuración de una sonda ATLAS RIPE, dentro de un contenedor Debian en una instancia de Proxmox "
date: 2025-02-16
lastmod: 2025-02-17
image: "img_basic.png"
draft: false
weight: 50
categories: []
tags: [debian,ripe,atlas,lxc,]
contributors: []
pinned: false
homepage: false
seo:
  title: "Guía para instalar una sonda RIPE Atlas en un LXC (Debian) sobre Proxmox" # custom title (optional)
  description: "Guia para realizar la instalación y configuración de una sonda ATLAS de RIPE, dentro de un contenedor Debian en una instancia de Proxmox" # custom description (recommended)
  canonical: "https://www.carlosmunoztorrijos.com/blog/guia-para-instalar-una-sonda-RIPE-Atlas-lxc-debian-proxmox/" # custom canonical URL (optional)
  noindex: false # false (default) or true
---
![Imagen de portada](./1.png)
---
---
## 1º Crear un contenedor LXC en Proxmox
Si no tienes una imagen ya descargada de **Debían 12** descargarnos está desde el menú de templates (ver imagen) y posteriormente la usamos en el menú de creación del contenedor.

![Ruta para descargar un template en este caso de Debian 12](./2.png)
<p align="center">Imagen 1: (Ruta para descargar un template en este caso de Debian 12)<p>
<br>

Requerimientos mminimos:
-  **1GB** RAM
-  **1** Nucleo
-  **4GB** Almacenamiento
- IP estática (fuera del DHCP del router).<br><br>

>**Nota:** Si se dispone de **IPV6** por parte del ISP también se debe configurar para que el router le entregue una dirección.

<br>

1. Actualizaciones iniciales 
Procedemos a actualizar el contenedor con el siguiente comando:

   ```Apt update & upgrade```
# (ARTICULO EN PROCESO)

---
>*Saludos, amdr0meda*