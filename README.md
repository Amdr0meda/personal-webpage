## 🌐 Página web personal (Blog)

Repositorio de [carlosmunoztorrijos.com](https://www.carlosmunoztorrijos.com/), desplegada con **GitHub Pages** (carpeta `docs/` de la rama `main`) y creada con **Hugo** y el tema **Doks** (Thulite), con plantillas y estilos propios. Seguridad y rendimiento reforzados con **Cloudflare**.

## 🌟 Contenido del sitio

- **Portada**: presentación, últimas publicaciones, herramientas y temas.
- **Blog**: guías y notas de sistemas y homelab.
- **Documentación**: guías, herramientas y configuraciones.
- **Sobre mí**: quién soy, trayectoria e intereses.

## 🛠️ Desarrollo

Requisitos: Hugo extended ≥ 0.134 y Node ≥ 20.

```bash
npm install
npm run dev     # servidor local con recarga en http://localhost:1313
npm run build   # compila en limpio a docs/ (lo que publica GitHub Pages)
```

Después de `npm run build`, haz commit de `docs/` junto con tus cambios y súbelo a `main`.

### Estructura

- `content/`: Markdown de páginas y posts (cada post es una carpeta con `index.md` e imágenes; `cover.png` se usa como portada).
- `layouts/`: plantillas propias (portada, blog, sobre mí, documentación, etiquetas, pie).
- `assets/scss/common/`: paleta (`_variables-custom.scss`) y estilos propios (`_custom.scss`).
- `assets/images/`: foto de perfil y portada por defecto para posts sin imagen.
- `static/`: `CNAME` e imagen para redes sociales (`cover.png`).

### Nuevo post

```bash
npm run create -- blog/mi-post/index.md
```

Añade `slug:` para una URL limpia (sin tildes) y `wip: true` si el artículo está a medias.
