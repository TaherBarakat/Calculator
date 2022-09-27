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
   if (b == 0) {
      alert("the result is undefined,your calculator will be restarted!");
      clear();
      return "";
   }

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
let operationErrorHandler;

keyValue.forEach((element) => {
   element.addEventListener("click", () => {
      handleOverFlow();
      input += element.innerText;
      userInput.innerText = input;
      operationErrorHandler = 1;
   });
});

function choseOperation() {
   if (operationErrorHandler == 1) {
      console.log(input, " **", currentResult);
      currentResult =
         currentResult === ""
            ? input
            : operator(operation, Number(currentResult), Number(input));

      if (this.innerText == "/") operation = divide;
      else if (this.innerText == "x") operation = multiply;
      else if (this.innerText == "+") operation = add;
      else if (this.innerText == "–") operation = subtract;

      lastValue.innerText = currentResult + this.innerText;

      input = "";
      userInput.innerText = "0";
      console.log(input, " **", currentResult);
      operationErrorHandler = 0;
   }
}

operationKey.forEach((element) => {
   element.addEventListener("click", choseOperation);
});

// clear and delete functions
function clear() {
   currentResult = "";
   input = "";
   operation = undefined;
   userInput.innerText = "0";
   lastValue.innerText = "";
}

document.querySelector("#clear").addEventListener("click", clear);

document.querySelector("#delete").addEventListener("click", () => {
   userInput.innerText = userInput.innerText.slice(0, -1);
   input = userInput.innerText;
});

// equalBtn ***************

document.querySelector("#equal").addEventListener("click", () => {
   currentResult =
      currentResult === ""
         ? input
         : operator(operation, Number(currentResult), Number(input));

   userInput.innerText = currentResult;
   input = currentResult;
   operation = undefined;
   currentResult = "";
   console.log(input, " **", currentResult);
});

handleOverFlow();
//handle the overflow
function handleOverFlow() {
   if (Number(userInput.innerText) >= 9999999999) {
      alert(
         "You have overbaked the value limit.your calculator will be restarted!"
      );
      clear();
   }
}
