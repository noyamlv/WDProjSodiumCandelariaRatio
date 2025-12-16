console.log("script.js loaded"); 

const overlay = document.querySelector(".paper-overlay");

if (!overlay) {
  console.error("overlay not found");
}

let appearances = 0;

setInterval(() => {
  appearances++;

  const duration = appearances * 1000; 

  overlay.style.display = "block";

  setTimeout(() => {
    overlay.style.display = "none";
  }, duration);

}, 10000);


