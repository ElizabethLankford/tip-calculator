const billInput = document.getElementById("bill-amount")
const numOfPeople = document.getElementById("num-people")
const tipBtn = document.querySelectorAll(".tip-amount")
const tipEl = document.getElementById("tip-amount-per")
const totalEl = document.getElementById("total-amount-per")
const customTipInput = document.getElementById("custom-tip-amount")

let billAmount = 0
let peopleAmount = 0
let tipAmount = 0
let customTip = 0
let tipPerPerson = 0
let totalPerPerson = 0

billInput.addEventListener("input", function(e){
    billAmount =  e.target.value
})

numOfPeople.addEventListener("input" , function(e){
    peopleAmount = e.target.value

        calculateTipPerPerson()
        calculateTotalPerPerson()

})

customTipInput.addEventListener("input", function(e){
    customTip = e.target.value

    if(customTip) {
        let tip=  customTip / 100

        getTipPercentage(tip)
    } else {
        
    }

})

function getTipPercentage(value){
   tipAmount = billAmount * value;

}

function calculateTipPerPerson() {
    tipPerPerson = tipAmount / peopleAmount;
    tipEl.innerHTML = ` $${tipPerPerson.toFixed(2)}`
}

function calculateTotalPerPerson() {
    let total = Number(billAmount) + Number(tipAmount)
    totalPerPerson = (total / peopleAmount);
    totalEl.innerHTML = ` $${totalPerPerson.toFixed(2)}`

}

function resetAll(){
    billInput.value = null
    numOfPeople.value = null
    totalEl.innerHTML = 0
    tipEl.innerHTML = 0
    customTipInput.innerHTML = 0
    billAmount = 0
    peopleAmount = 0
    customTip = 0
    tipAmount = 0
    tipPerPerson = 0
    totalPerPerson = 0
}