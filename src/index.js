let BODY;

document.addEventListener("DOMContentLoaded", () => {
  BODY = document.querySelector("body");
});

window.addEventListener("load", () => {
  fadeIn(BODY);
});

function fadeIn(elem) {
  let opacity = 0;
  function increase() {
    opacity += 0.05;
    if (opacity >= 1) {
      elem.style.opacity = 1;
      cancelAnimationFrame(increase);
      return true;
    }
    elem.style.opacity = opacity;
    requestAnimationFrame(increase);
  }
  increase();
}
