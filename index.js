function add(a, b) {
   return a + b;
}
function subtract(a, b) {
   return a - b;
}
function multiply(a, b) {
   return a * b;
}
function divide(a, b) {
   return a / b;
}
function operator(operation, a, b) {
   return operation(a, b);
}
let btn = document.querySelectorAll(".btn");
let currentValue = document.querySelector("#current-value");
let userInput = document.querySelector("#user-input");
let input = "";
let operationKey = document.querySelectorAll(".operation");

btn.forEach((element) => {
   element.addEventListener("click", () => {
      input += element.innerText;
      userInput.innerText = input;
      console.log(input);
   });
});
operationKey.forEach;
