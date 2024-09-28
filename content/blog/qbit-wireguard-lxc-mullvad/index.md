---
title: "Contenedor LXC en Proxmox con Qbittorrent + Wireguard (Mullvad)"
description: "Tutorial para montar un contenedor LXC en Proxmox partiendo de una imagen, añadiendole el motor de bittorrent Qbittorrent, configurado para usar una VPN de Mullvad de WireGuard."
summary: "En este post, se montará un contenedor LXC en Proxmox y lo configuraremos para que funcione a través de un tunel VPN de Mullvad, utilizando el protocolo WireGuard."
date: 2024-09-28
lastmod: 2024-09-28
draft: false
weight: 50
categories: []
tags: [proxmox,lxc,qbittorent,mullvad,wireguard,vpn]
contributors: []
pinned: false
homepage: false
seo:
  title: "Contenedor LXC en Proxmox con Qbittorrent + Wireguard (Mullvad)" # custom title (optional)
  description: "Tutorial para montar un contenedor LXC en Proxmox partiendo de una imagen, añadiendole el motor de bittorrent Qbittorrent, configurado para usar una VPN de Mullvad de WireGuard." # custom description (recommended)
  canonical: "https://www.carlosmunoztorrijos.com/blog/contenedor-lxc-en-proxmox-con-qbittorrent--wireguard-mullvad/" # custom canonical URL (optional)
  noindex: false # false (default) or true
---
<br>

## 1º Crear un contendedor

Se  usa un template de ubuntu, en mi caso __ubuntu-24.04-standard_24.04-2_amd64.tar.zst__. Para descargar el template se debe realizar desde la pestaña "CT Templates" de tu unidad, en mi caso nas-amdr0meda-ns. Seleccionando el botón **Templates** y proceder a descargar.
<br><br>
![1º Crear un contendedor](./img1.png)