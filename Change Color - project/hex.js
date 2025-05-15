let slovaBrojevi = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "E", "F"];
let button = document.querySelector("button");
let span = document.querySelector("span");

function random() {
  return Math.floor(Math.random() * slovaBrojevi.length);
}

button.addEventListener("click", function () {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor = hexColor + slovaBrojevi[random()];
  }
  document.body.style.backgroundColor = hexColor;
  span.textContent = hexColor;
});
