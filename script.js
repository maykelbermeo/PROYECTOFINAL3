// 1. Esperar a que el DOM cargue
document.addEventListener('DOMContentLoaded', () => {
  // 2. Seleccionar el elemento
  const envelope = document.getElementById('envelope');

  // 3. Agregar escucha de clic solo si existe el elemento
  if (envelope) {
    envelope.addEventListener('click', () => {
      // Después de 800ms (duración de la animación), abrimos la página
      setTimeout(() => {
        window.open('investigacion.html', '_blank');
      }, 800);
    });
  }
});
