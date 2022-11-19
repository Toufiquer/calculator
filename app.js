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
function forOperation(value, oldValue, oldValueTop, totalValue) {
  if (oldValue === undefined && oldValueTop === undefined) {
    return totalValue;
  } else if (oldValue !== undefined) {
     
    return totalValue;
  } else if (oldValueTop !== undefined) {
    return totalValue;
  }
}
// Any button Click in calculator
dqs("#calculator-btn").addEventListener("click", function (e) {
  const value = e.target.innerText;
  let oldValue = dqs("#outPut").innerText;
  let oldValueTop = dqs("#outPut-top").innerText;
  let totalValue;

  if (isNaN(value)) {
    // Check for clear
    if (value == "c") {
      outPutClear();
      outPutTopClear();
    } else if (value == "+") {
      totalValue = forOperation(value, oldValue, oldValueTop, totalValue);
    } else if (value == "-") {
    } else if (value == "*") {
    } else if (value == "/") {
    } else if (value == "=") {
    }
    console.log(" + ", value, " => Line No: 10");
  } else {
    if (oldValue !== "") {
      printText("#outPut", oldValue + value);
    } else {
      printText("#outPut", value);
    }
  }
});
