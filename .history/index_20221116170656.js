// document.querySelector('.check-btn').addEventListener('click', function(){
//     console.log("Check button is clicked")
// })

const billAmount = document.querySelector('#bill-amount');
const cashAmount = document.querySelector('#cash-amount');
const checkButton = document.querySelector('.check-btn');
const errorMessage = document.querySelector('.error-message');

// Testing console values for all inputs
// checkButton.addEventListener('click', function(){
//     console.log(cashAmount.value);
// })

const displayErrorMessage = function () {
    errorMessage.style.display = "block";
    errorMessage.style.backgroundColor = "red"
    errorMessage.innerText = "Bill amount always we positive and non zero value";
}

checkButton.addEventListener('click', function amountValidation() {
    errorMessage.style.display = "none";

    if (billAmount.value > 0) {

    } else {
        displayErrorMessage();
    }
})