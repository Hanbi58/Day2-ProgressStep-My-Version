//My own version. Not familier with suedo selector ::before. This version is more friendly to beginers.

const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

let activeAmount = 1;

next.addEventListener("click", () => {
  activeAmount++;
  activeAmount = Math.min(activeAmount++, circles.length);

  update();
});

prev.addEventListener("click", () => {
  activeAmount--;
  activeAmount = Math.max(activeAmount++, 1);

  update();
});

function update() {
  if (activeAmount === 1) {
    prev.disabled = true;
  } else if (activeAmount === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }

  circles.forEach((circle, idx) => {
    idx < activeAmount
      ? circle.classList.add("active")
      : circle.classList.remove("active");
  });

  progress.style.width =
    ((activeAmount - 1) / (circles.length - 1)) * 100 + "%";
}
