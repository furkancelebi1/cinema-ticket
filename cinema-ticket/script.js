const conteiner = document.querySelector(".conteiner");

const count = document.getElementById("count");

const amount = document.getElementById("amount");

const select = document.getElementById("movie");

conteiner.addEventListener("click", function (e) {
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("reserved")
  ) {
    console.log(e.target);
    e.target.classList.toggle("selected");
    calculatorTotal();
  }
});

select.addEventListener("change", function (e) {
  calculatorTotal();
});
function calculatorTotal() {
  let selectedSeatCount = conteiner.querySelectorAll(".seat.selected").length;

  let price = select.value;

  count.innerText = selectedSeatCount;

  amount.innerText = selectedSeatCount * price;
}
