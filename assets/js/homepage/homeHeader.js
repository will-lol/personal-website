var amount = -(window.innerHeight / 2) + window.innerHeight / 3.7 + "px";

const guys = document.querySelectorAll(".homeHeader__feature__guy");
const observerGuys = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("reveal", entry.isIntersecting);
    });
  },
  {
    rootMargin: amount,
  }
);

guys.forEach((guy) => {
  observerGuys.observe(guy);
});

const isReduced = window.matchMedia(`(prefers-reduced-motion: reduce)`) === true || window.matchMedia(`(prefers-reduced-motion: reduce)`).matches === true;
if ((!CSS.supports("animation-timeline: pathTimeline")) && (!isReduced)) {
  var feature = document.getElementById("feature");
  var line = document.getElementById("line");
  var length = line.getTotalLength();
  var draw, length;
  line.style.strokeDasharray = length;
  line.style.strokeDashoffset = length;
  var clientHeight = document.documentElement.clientHeight;
  window.addEventListener("scroll", function () {
    requestAnimationFrame(drawLine);
  });
}

function drawLine() {
  var scrollRatio =
    document.documentElement.scrollTop /
    (document.documentElement.scrollHeight - clientHeight);
  if (scrollRatio > 1) {
    scrollRatio = 1;
  }
  draw = length * scrollRatio;
  line.style.strokeDashoffset = length - draw;
}

let observerText = new IntersectionObserver((entries) => {
  if (entries[0].boundingClientRect.y < 0) {
    document.getElementById("scrollingText").classList.remove("showY");
    setTimeout((stopAnim) => {
      document.getElementById("scrollingText__text").style.animationPlayState =
        "paused";
    }, 1000);
  } else {
    document.getElementById("scrollingText__text").style.animationPlayState =
      "running";
    document.getElementById("scrollingText").classList.add("showY");
  }
});
observerText.observe(document.querySelector("#scrollTrigger"));
