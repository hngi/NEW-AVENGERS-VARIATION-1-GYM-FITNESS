const kilogram = document.getElementById("kilogram");
const centimeters = document.getElementById("centimeters");
const feet = document.getElementById("feet");
const calcbtn = document.getElementById("calcbtn");
const pounds = document.getElementById("pounds");
const inches = document.getElementById("inches");
const result = document.getElementById("result");

function metricSystem() {
  let feetValue = Number(feet.value);
  let incheValue = Number(inches.value);
  let poundValue = pounds.value;
  //convert feet to inch
  let feetToInch = feetValue * 12 + incheValue;
  let englishBmi = (poundValue / Math.pow(feetToInch, 2)) * 703;
  result.value = englishBmi.toFixed(2);
}

function runResult() {
  metricSystem();
}

calcbtn.addEventListener("click", runResult);
