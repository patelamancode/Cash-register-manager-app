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

const displayErrorMessage = function (message) {
    errorMessage.style.display = "block";
    errorMessage.style.backgroundColor = "red";
    errorMessage.innerText = message;
}


checkButton.addEventListener('click', function amountValidation() {
    errorMessage.style.display = "none";

    if (billAmount.value > 0) {
        if(cashAmount.value > billAmount.value){
            const returnAmount = cashAmount.value - billAmount.value;
            numberOfNotes(returnAmount);
        }
        else{
            displayErrorMessage("Invalid Cash value as per Bill amount");
        }
    } 
    else {
        displayErrorMessage("Please make sure input bill amount must be positive and non-zero value");
    }
})

const numberOfNotes = function(returnAmount){
    console.log("100 number of notes");
}