window.addEventListener('load', () => {
    // Wait 2 seconds before showing the button
    setTimeout(() => {
      document.getElementById('authButton').style.display = 'inline-block';
    }, 2000);

    // On click, hide preloader and play music
    document.getElementById('authButton').addEventListener('click', () => {
      document.getElementById('preloader').style.display = 'none';

      // Play music if allowed by browser
      const music = document.getElementById('backgroundMusic');
      if (music) {
        music.play().catch(err => {
          console.log('El navegador bloqueó la reproducción automática:', err);
        });
      }
    });

    // Hide button at start
    document.getElementById('authButton').style.display = 'none';
  });