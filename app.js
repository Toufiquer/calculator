// Document Query Selector
function dqs(id) {
  return document.querySelector(id);
}
function printText(id, value) {
  dqs(id).innerText = value;
}
function outPutClear() {
  dqs("#outPut").innerText = "";
}
function outPutTopClear() {
  dqs("#outPut-top").innerText = "";
}
function clearAll() {
  dqs("#outPut").value = "";
  dqs("#outPut-top").innerText = "";
}
function calculationFn() {
  let calScreen = dqs("#outPut").value;
  if (calScreen !== "") {
    let calculation = eval(calScreen);
    dqs("#outPut-top").innerText = calScreen;
    dqs("#outPut").value = calculation;
  }
}
dqs("#calculator-btn").addEventListener("click", function (e) {
  let currentValue = e.target.innerText;
  if (currentValue === "C") {
    clearAll();
  } else if (currentValue === "=") {
    calculationFn();
  } else if (currentValue === undefined) {
    let newValue = dqs("#outPut").value;
    console.log(newValue, " => Line No: 34");
  } else if (!isNaN(currentValue)) {
    dqs("#outPut").value += currentValue;
  }
});
document.body.addEventListener("keyup", function (e) {
  if (e.key === "Enter") {
    calculationFn();
  } else if (false) {
    //
  } else {
    dqs("#outPut").focus();
  }
});
