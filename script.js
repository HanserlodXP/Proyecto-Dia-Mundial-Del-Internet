window.addEventListener('load', () => {
    // Esperar 2 segundos antes de mostrar botón
    setTimeout(() => {
      document.getElementById('authButton').style.display = 'inline-block';
    }, 2000);

    // Al hacer clic, ocultar preloader y reproducir música
    document.getElementById('authButton').addEventListener('click', () => {
      document.getElementById('preloader').style.display = 'none';

      // Reproducir música si se permite por navegador
      const music = document.getElementById('backgroundMusic');
      if (music) {
        music.play().catch(err => {
          console.log('El navegador bloqueó la reproducción automática:', err);
        });
      }
    });

    // Ocultar botón al inicio
    document.getElementById('authButton').style.display = 'none';
  });