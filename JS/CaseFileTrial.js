// Case.js

function triggerGlitch() {
  const body = document.body;
  const overlay = document.querySelector(".glitch-overlay");

  if (!overlay) return;

  body.classList.remove("glitching-body");
  overlay.classList.remove("glitching-overlay");

  void body.offsetWidth;

  body.classList.add("glitching-body");
  overlay.classList.add("glitching-overlay");

  setTimeout(() => {
    body.classList.remove("glitching-body");
    overlay.classList.remove("glitching-overlay");
  }, 400);
}

setTimeout(() => {
  triggerGlitch();
  setInterval(triggerGlitch, 5000);
}, 5000);
