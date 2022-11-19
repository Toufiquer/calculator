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
  let currentValue = calScreen[calScreen.length - 1];
  if (currentValue === "+" || currentValue === "-" || currentValue === "*" || currentValue === "/") {
    delOne();
    calculationFn();
  } else if (calScreen !== "") {
    let calculation = eval(calScreen);
    dqs("#outPut-top").innerText = calScreen;
    dqs("#outPut").value = calculation;
  }
}
function updateScreen(value) {
  let oldValue = dqs("#outPut").value;
  if (value !== oldValue[oldValue.length - 1]) {
    dqs("#outPut").value = oldValue += value;
  }
}
function delOne() {
  let newValue = dqs("#outPut").value;
  dqs("#outPut").value = newValue.slice(0, -1);
}
dqs("#calculator-btn").addEventListener("click", function (e) {
  let currentValue = e.target.innerText;
  if (currentValue === "C") {
    clearAll();
  } else if (currentValue === "=") {
    calculationFn();
  } else if (currentValue === "+" || currentValue === "-" || currentValue === "*" || currentValue === "/" || currentValue === ".") {
    updateScreen(currentValue);
  } else if (currentValue === undefined) {
    delOne();
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
