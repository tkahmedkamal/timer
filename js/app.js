const durationInput = document.querySelector(".timer__duration");
const startBtn = document.querySelector(".timer__start");
const pauseBtn = document.querySelector(".timer__pause");
const overlay = document.querySelector(".overlay");
const circle = document.querySelector(".timer__circle");

const radius = circle.getAttribute("r") * 2 * Math.PI;
circle.setAttribute("stroke-dasharray", radius);

let duration;
const timer = new Timer(durationInput, startBtn, pauseBtn, {
  start: (totalDuration) => {
    duration = totalDuration;
  },

  tick(timeReminding) {
    circle.setAttribute(
      "stroke-dashoffset",
      (radius * timeReminding) / duration - radius
    );
  },

  done: () => {
    overlay.style.display = "block";
  },
});

// Close the overlay message when you press the Esc button on the keyboard
document.addEventListener("keydown", (e) => {
  if (e.keyCode == 27) {
    overlay.style.display = "none";
  }
});
