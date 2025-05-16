window.addEventListener('load', () => {
  // Wait 2 seconds and then show the button
  setTimeout(() => {
    document.getElementById('authButton').style.display = 'inline-block';
  }, 2000);

  // On button click, hide the preloader and play music
  document.getElementById('authButton').addEventListener('click', () => {
    const preloader = document.getElementById('preloader');
    // Fade out the preloader and disable pointer events
    preloader.style.opacity = '0';
    preloader.style.pointerEvents = 'none';

    // Play background music if available
    const music = document.getElementById('backgroundMusic');
    if (music) {
      music.play().catch(err => {
        // Warn if playback is blocked (e.g., autoplay restrictions)
        console.warn('Playback blocked:', err);
      });
    }

    // After fade-out transition, completely hide the preloader
    setTimeout(() => {
      preloader.style.display = 'none';
    }, 500);
  });

  // Initially hide the button until 2 seconds have passed
  document.getElementById('authButton').style.display = 'none';
});
