const img = document.getElementById("flashImg");

let appearances = 0;
let baseDuration = 150;
let increment = 850;
let isShowing = false;

setInterval(() => {
  if (isShowing) return;

  // 70% chance to show
  if (Math.random() > 0.7) return;

  appearances++;
  isShowing = true;

  const showTime = baseDuration + appearances * increment;

  img.style.opacity = "1";

  setTimeout(() => {
    img.style.opacity = "0";
    isShowing = false;
  }, showTime);

}, 10000);


