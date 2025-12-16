function glitchPhotoSequence() {
  const body = document.body;

  // Step 1: glitch IN
  body.classList.add("glitching");

  // Step 2: switch photo shortly after
  setTimeout(() => {
    body.classList.add("photo-glitch");
  }, 200);

  // Step 3: stop glitch (photo stays)
  setTimeout(() => {
    body.classList.remove("glitching");
  }, 1200);

  // Step 4: glitch OUT
  setTimeout(() => {
    body.classList.add("glitching");
    body.classList.remove("photo-glitch");
  }, 3000);

  // Step 5: back to normal
  setTimeout(() => {
    body.classList.remove("glitching");
  }, 3800);
}

// start after 10 seconds
setTimeout(glitchPhotoSequence, 10000);

// repeat every 30 seconds
setInterval(glitchPhotoSequence, 30000);
