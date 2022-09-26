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

let operationKey = document.querySelectorAll(".operation");
let keyValue = document.querySelectorAll(".value");

let lastValue = document.querySelector("#last-value");
let userInput = document.querySelector("#user-input");

let currentResult = "";
let input = "";
let operation;

keyValue.forEach((element) => {
   element.addEventListener("click", () => {
      input += element.innerText;
      userInput.innerText = input;

      // console.log("inputis   ", input);
   });
});

function choseOperation() {
   currentResult =
      currentResult === ""
         ? input
         : operator(operation, Number(currentResult), Number(input));

   if (this.innerText == "/") operation = divide;
   else if (this.innerText == "x") operation = multiply;
   else if (this.innerText == "+") operation = add;
   else if (this.innerText == "–") operation = subtract;

   lastValue.innerText = currentResult + this.innerText;

   console.log("inputis   ", input);

   input = "";
   userInput.innerText = "";

   console.log("currentResultis   ", currentResult);
   // console.log("operationis   ", operation);
}

operationKey.forEach((element) => {
   element.addEventListener("click", choseOperation);
});
