const RangeRef = document.querySelector("#font-size-control");
const TextRef = document.querySelector("#text");

RangeRef.addEventListener("input", (event) => {
  TextRef.style.fontSize = event.currentTarget.value + "px";
});