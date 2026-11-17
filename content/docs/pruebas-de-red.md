---
title: "Pruebas de red"
description: "Comprobaciones de red por tipo: calidad de la línea, latencia, IPv6, DNS, fugas, BGP y seguridad web."
summary: "Comprobaciones de red por tipo: calidad de la línea, latencia, IPv6, DNS, BGP y seguridad web."
slug: "pruebas-de-red"
date: 2026-11-17
lastmod: 2026-11-17
draft: false
weight: 920
toc: false
layout: "directorio"
groups:
  - title: "Calidad de la línea"
    links:
      - { name: "Packet Loss Test", url: "https://es.packetlosstest.com/", desc: "Pérdida de paquetes y jitter con tráfico tipo juego o llamada." }
  - title: "Latencia a la nube"
    links:
      - { name: "Cloud Ping Test", url: "https://cloudpingtest.com/", desc: "Latencia a las regiones de AWS, Azure, GCP y otros." }
      - { name: "Azure Speed Test", url: "https://www.azurespeed.com/Azure/Download", desc: "Latencia y descarga contra regiones de Azure." }
      - { name: "Microsoft 365 Connectivity", url: "https://connectivity.office.com/", desc: "Si la red está bien preparada para Microsoft 365." }
  - title: "IP, IPv6 y fugas"
    links:
      - { name: "test-ipv6.com", url: "https://test-ipv6.com/", desc: "Si tienes IPv6 y si funciona bien de extremo a extremo." }
      - { name: "ipleak.net", url: "https://ipleak.net/", desc: "IP, DNS y WebRTC: útil para comprobar una VPN." }
      - { name: "BrowserLeaks", url: "https://browserleaks.com/", desc: "WebRTC, DNS, TLS y huella del navegador, prueba a prueba." }
  - title: "DNS"
    links:
      - { name: "1.1.1.1/help", url: "https://1.1.1.1/help", desc: "Si usas el resolver de Cloudflare y si va por DoH o DoT." }
      - { name: "dnscheck.tools", url: "https://www.dnscheck.tools/", desc: "Qué resolver usas, DNSSEC y soporte de ECS." }
      - { name: "DNS Leak Test", url: "https://dnsleaktest.com/", desc: "Qué servidores DNS resuelven tus consultas en realidad." }
      - { name: "GRC DNS Spoofability Test", url: "https://www.grc.com/dns/dns.htm", desc: "Lo predecibles que son las consultas de tu resolver." }
  - title: "Rutas y BGP"
    links:
      - { name: "Is BGP safe yet?", url: "https://isbgpsafeyet.com/", desc: "Si tu operador descarta rutas inválidas (RPKI)." }
      - { name: "Hurricane Electric BGP Toolkit", url: "https://bgp.he.net/", desc: "Quién anuncia una IP o un ASN, prefijos y peers." }
  - title: "Seguridad web"
    links:
      - { name: "SSL Labs", url: "https://www.ssllabs.com/ssltest/", desc: "Configuración TLS de un dominio, con nota de la A a la F." }
      - { name: "Security Headers", url: "https://securityheaders.com/", desc: "Cabeceras de seguridad HTTP (HSTS, CSP, X-Frame-Options…)." }
seo:
  title: "Pruebas de red: latencia, DNS, IPv6, BGP y seguridad web"
  description: "Comprobaciones de red por tipo: calidad de la línea, latencia, IPv6, DNS, fugas, BGP y seguridad web."
  canonical: ""
  noindex: false
---

Comprobaciones de red: calidad de la línea, latencia, IPv6, DNS, BGP y seguridad web.

{{< enlaces >}}
