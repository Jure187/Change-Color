let colors = ["white", "red", "yellow", "green"];
let button = document.querySelector("button");
let span = document.querySelector("span");

button.addEventListener("click", function () {
  let randomNumber = getRandomNumber();
  document.body.style.backgroundColor = colors[randomNumber];
  span.textContent = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
