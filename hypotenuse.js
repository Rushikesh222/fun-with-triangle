const sides = document.querySelectorAll(".side-input");
const hypotenuseBtn = document.querySelector("#hypotenuse-btn");
const outputEl = document.querySelector("#output");
function calculateSumOfSquares(a, b) {
  const sumOfSquare = a * a + b * b;
  return sumOfSquare;
}
function calculateHypotenuse() {
  const sumOfSquare = calculateSumOfSquares(
    Number(sides[0].value),
    Number(sides[1].value)
  );
  const lengthOfHypotenuse = Math.sqrt(sumOfSquare);
  outputEl.innerText = "The Length of hypoytenuse is " + lengthOfHypotenuse;
}
hypotenuseBtn.addEventListener("click", calculateHypotenuse);
