const gaButton = document.getElementById("ga");

gaButton.addEventListener("click", (e) => {
  e.target.style.left = randomNumber(10, 80) + "%";
  e.target.style.top = randomNumber(0, 100) + "%";
});

const randomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min) + min);
