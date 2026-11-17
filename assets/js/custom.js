// Menú lateral (hamburguesa) en móvil: solo el componente Offcanvas de Bootstrap,
// cargado siempre con app.js para que no dependa del buscador.
import 'bootstrap/js/dist/offcanvas';

// Enlaces a otros dominios: siempre en pestaña nueva, para no salir de la web.
document.querySelectorAll('a[href^="http"]').forEach((a) => {
  if (a.hostname && a.hostname !== location.hostname) {
    a.target = '_blank';
    a.rel = 'noopener';
  }
});
