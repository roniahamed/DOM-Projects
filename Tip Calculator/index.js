let Bill = document.querySelector('#bill')
let Tip = document.querySelector("#tip")
let Total = document.querySelector("#total")
let calculate = document.querySelector("#calculate")


function CalculateTotal(event) {
    event.preventDefault();
    let billValue = Bill.value;
    let tipValue = Tip.value;
    let totalValue = billValue * (1 + tipValue / 100)
    Total.innerText = totalValue.toFixed(2)
}

calculate.addEventListener('click', CalculateTotal);