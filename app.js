function dqs(id) {
  return document.querySelector(id);
}
dqs("#calculator-btn").addEventListener("click", function (e) {
  console.log(e.target.innerText, " => Line No: 5");
});
