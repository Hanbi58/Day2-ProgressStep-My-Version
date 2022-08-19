const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

let activeAmount = 1;

next.addEventListener("click", () => {
  activeAmount++;
  activeAmount = Math.min(activeAmount++, circles.length);
  console.log(activeAmount);
  update();
});

prev.addEventListener("click", () => {
  activeAmount--;
  activeAmount = Math.max(activeAmount++, 1);
  console.log(activeAmount);
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

  console.log(activeAmount / circles.length);
  progress.style.width =
    ((activeAmount - 1) / (circles.length - 1)) * 100 + "%";
}
