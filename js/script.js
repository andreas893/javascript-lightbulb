"use strict";
function onBulb() {
    const bulb = document.getElementById("bulb");
    bulb.src = "img/on.jpg";
  }
  
  function offBulb() {
    const bulb = document.getElementById("bulb");
    bulb.src = "img/off.jpg";
  }

  document.getElementById("onBtn").addEventListener('click', onBulb);
  document.getElementById("offBtn").addEventListener('click', offBulb);