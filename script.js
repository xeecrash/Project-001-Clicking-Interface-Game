let countOne = 0;
let countTwo = 0;
let dispplayOne = document.getElementById("count-display-one");
let buttonOne = document.getElementsByClassName("button-one");
let dispplayTwo = document.getElementById("count-display-two");
let buttonTwo = document.getElementsByClassName("button-two");
let clearAllButton = document.getElementsByClassName("button-clear-all");

buttonOne[0].addEventListener("click", () => {
  countOne++;

  if (countOne >= 1) {
    dispplayOne.textContent = countOne;
  } else {
    dispplayOne.textContent;
  }
});
buttonTwo[0].addEventListener("click", () => {
  countTwo++;

  if (countTwo >= 1) {
    dispplayTwo.textContent = countTwo;
  } else {
    dispplayTwo.textContent;
  }
});
clearAllButton[0].addEventListener("click", ClearAll);
console.log(countOne);
function ClearAll() {
  countOne = 0;
  countTwo = 0;
  dispplayOne.textContent = countOne;
  dispplayTwo.textContent = countTwo;
  console.log(countOne);
}
