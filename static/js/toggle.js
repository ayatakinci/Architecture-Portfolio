


var btn = document.getElementById("btn");
var nav = document.getElementById("nav");

btn.onclick = function() {
  
    if (nav.style.display == 'none') {
      nav.style.display = 'block';
    } else {
      nav.style.display = 'none';
    }
  }
