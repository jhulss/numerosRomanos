import numRomanos from "./romanos";

const first = document.querySelector("#primer-numero");
const form = document.querySelector("#numRomanos-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  div.innerHTML = "<p>" + numRomanos(firstNumber) + "</p>";
});
