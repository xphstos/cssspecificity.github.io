let body;

document.addEventListener("DOMContentLoaded", () => {
  body = document.querySelector("body");
  document.querySelector("#date").innerHTML = new Date().getFullYear();
});

window.addEventListener("load", () => {
  fadeIn(body);
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
