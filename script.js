
  window.addEventListener('load', () => {
    // Espera 2 segundos y muestra el botón
    setTimeout(() => {
      document.getElementById('authButton').style.display = 'inline-block';
    }, 2000);

    // Al hacer clic, ocultar pantalla y reproducir música
    document.getElementById('authButton').addEventListener('click', () => {
      const preloader = document.getElementById('preloader');
      preloader.style.opacity = '0';
      preloader.style.pointerEvents = 'none';

      // Reproducción de música
      const music = document.getElementById('backgroundMusic');
      if (music) {
        music.play().catch(err => {
          console.warn('Reproducción bloqueada:', err);
        });
      }

      // Ocultar completamente después de transición
      setTimeout(() => {
        preloader.style.display = 'none';
      }, 500);
    });

    // Ocultar el botón hasta que pasen los 2 segundos
    document.getElementById('authButton').style.display = 'none';
  });