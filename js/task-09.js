function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// const widgetEl = document.querySelector(".widget");
const changeColorEl = document.querySelector(".change-color");
const colorEl = document.querySelector(".color");
const bodyDoc = document.querySelector("body");

changeColorEl.addEventListener("click", changeBackgroundColor);
function changeBackgroundColor() {
  return bodyDoc.style.backgroundColor = getRandomHexColor(), colorEl.textContent = getRandomHexColor();
}