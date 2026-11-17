---
title: "Sobre mí"
headline: "Hola, soy Carlos"
description: "Coordinador Técnico IT: sistemas e infraestructura, redes y ciberseguridad. Windows Server, Linux, Proxmox, WireGuard y Cloudflare."
summary: "Coordinador Técnico IT · Sistemas e Infraestructura. Me gusta que la red funcione, esté documentada y nadie tenga que acordarse de ella."
date: 2024-09-28
lastmod: 2026-11-17
draft: false
layout: "about"
skills:
  - group: "Sistemas"
    items: ["Windows 10/11 y Windows Server 2019", "Debian / Ubuntu", "Proxmox VE (LXC y VMs)", "Docker (nociones)", "SQL Server"]
  - group: "Redes y seguridad"
    items: ["TP-Link Omada", "Multi-WAN", "VPN WireGuard", "Cloudflare: DNS, WAF y reglas", "CCTV / NVR, control de accesos y CRA"]
  - group: "Herramientas"
    items: ["Wireshark", "Nmap", "Sysinternals", "Uptime Kuma", "Iperius Backup"]
  - group: "Negocio"
    items: ["TPV / ICG", "ERP", "Trazabilidad de producción"]
  - group: "Certificaciones"
    items: ["EC-Council DFE", "Fortinet NSE 2 y 3", "Cisco CCNA: Scaling & Connecting Networks", "Cisco Cybersecurity Essentials", "Cursos CCN-CERT"]
experiencia:
  - when: "mar 2026 – actualidad"
    title: "Coordinador Técnico IT"
    org: "Malvón Factory"
    current: true
    points:
      - "Responsable único de IT en la planta, reportando a dirección."
      - "Diseño e implantación de la **trazabilidad por unidad** en el encajado y rediseño de las etiquetas de producto."
      - "Resolución de una caída del núcleo **multi-WAN** en 15–20 minutos, localizando y retirando un dispositivo no autorizado que provocaba conflictos ARP."
      - "Reorganización del rack y del cableado, y **documentación completa** de la red de la planta."
      - "Gestión de CCTV/NVR, sistema de alarmas con CRA y control de fichajes; coordinación con proveedores y guardias."
  - when: "jun 2022 – mar 2026"
    title: "Técnico Superior · Administrador de Sistemas"
    org: "Grupo Malvón · prácticas desde marzo de 2022"
    points:
      - "Soporte a **unas 100 sedes** en España y Portugal y a más de **100 terminales de punto de venta**."
      - "Más de **20 aperturas de tienda** in situ y un checklist de aperturas que sigue en uso."
      - "Despliegue de la **VPN corporativa con WireGuard** y gestión del DNS en **Cloudflare**."
      - "Copias de seguridad de SQL Server y tareas automatizadas con el Programador de tareas."
      - "Formación de los alumnos en prácticas del departamento."
formacion:
  - when: "2022 – 2023"
    title: "Máster en Ciberseguridad"
    org: "Digitech"
  - when: "2021 – 2022"
    title: "CFGS Administración de Sistemas Informáticos en Red (ASIR)"
  - when: "2020 – 2021"
    title: "CFGM Sistemas Microinformáticos y Redes (SMR)"
seo:
  title: "Sobre mí - Carlos Muñoz Torrijos"
  description: "Carlos Muñoz Torrijos, Coordinador Técnico IT: sistemas e infraestructura, redes y ciberseguridad. Experiencia, formación y homelab."
  canonical: ""
  noindex: false
---

Soy técnico de sistemas con más de cuatro años de experiencia en entornos multisede: redes, servidores, puntos de venta, seguridad y todo lo que hace falta para que una empresa funcione sin que nadie piense en la informática. Tengo el **Máster en Ciberseguridad** y el grado superior **ASIR**.

Hoy soy el responsable técnico de IT en una planta de producción: llevo la infraestructura de extremo a extremo, de la red y el rack a las cámaras, las alarmas o el sistema de fichajes.

## Experiencia

{{< timeline "experiencia" >}}

## Formación

{{< timeline "formacion" >}}

## Cómo trabajo

- **Autonomía de principio a fin.** Del diagnóstico a la solución, incluido hablar con el proveedor cuando toca.
- **Calma con la incidencia encima.** Primero restablecer el servicio, después entender qué pasó para que no se repita.
- **Documentar y estandarizar.** Si algo se hace dos veces, merece un procedimiento o un checklist.
- **Enseñar.** Me gusta formar a otros y dejar las cosas para que no dependan de mí.

## El homelab

En casa mantengo un **Proxmox** con contenedores LXC y máquinas virtuales, servicios de DNS, DHCP y SMB, monitorización con **Uptime Kuma** y un **Speedtest Tracker** con avisos por Telegram. Es mi banco de pruebas, y mucho de lo que publico en el [blog](/blog/) sale de ahí.
