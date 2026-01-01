document.addEventListener('DOMContentLoaded', function() {
  const glitchOverlay = document.getElementById('glitch-overlay');
  const glitchImage = document.getElementById('glitch-image');
  
  // Random between 5-15 seconds
  const delay = Math.floor(Math.random() * 10000) + 5000;
  
  setTimeout(() => {
    triggerGlitch();
    
    if (Math.random() > 0.5) {
      setTimeout(triggerGlitch, Math.floor(Math.random() * 5000) + 2000);
    }
  }, delay);
  
  function triggerGlitch() {
    // Random eftv
    const effects = [
      'glitch-effect 0.05s infinite, glitch-flicker 0.1s infinite',
      'glitch-effect 0.1s infinite, glitch-color-shift 0.2s infinite',
      'glitch-effect 0.07s infinite, glitch-flicker 0.07s infinite, glitch-color-shift 0.15s infinite'
    ];
    glitchImage.style.animation = effects[Math.floor(Math.random() * effects.length)];
    
    glitchOverlay.style.display = 'flex';
    
    setTimeout(() => {
      glitchOverlay.style.display = 'none';
      glitchImage.style.animation = '';
    }, Math.floor(Math.random() * 200) + 600); 
  }
  
  document.querySelectorAll('.evidence-photo').forEach(photo => {
    photo.addEventListener('click', () => {
      if (Math.random() > 0.7) { 
        triggerGlitch();
      }
    });
  });
});