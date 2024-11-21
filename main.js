// Selecciona todos los enlaces del menú
const navLinks = document.querySelectorAll('.nav a');

// Agrega un evento de clic a cada enlace
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    // Remueve la clase active de todos los enlaces
    navLinks.forEach(nav => nav.classList.remove('active'));
    // Agrega la clase active al enlace clicado
    link.classList.add('active');
  });
});
