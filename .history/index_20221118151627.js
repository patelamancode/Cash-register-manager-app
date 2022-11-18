// document.querySelector('.check-btn').addEventListener('click', function(){
//     console.log("Check button is clicked")
// })

const billAmount = document.querySelector('#bill-amount');
const cashAmount = document.querySelector('#cash-amount');
const checkButton = document.querySelector('.check-btn');
const errorMessage = document.querySelector('.error-message');
const notesDisplay = document.querySelectorAll('.notes-number');
// from here
// const hideContent = document.querySelector('.sub-container');
const nextButton = document.querySelector('#next-btn');


// Testing console values for all inputs
// checkButton.addEventListener('click', function(){
//     console.log(cashAmount.value);
// })
hideContent.style.display = "none"

nextButton.addEventListener('click', function(){
    hideContent.style.display = "block"
    
})
// to here

const displayErrorMessage = function (message) {
    errorMessage.style.display = "block";
    errorMessage.style.backgroundColor = "red";
    errorMessage.innerText = message;
}
const hideErrorMessage = function(){
    errorMessage.style.display = "none";

}

const notesArray = [2000, 1000, 500, 200, 100, 50, 20, 10, 5, 1];


checkButton.addEventListener('click', function amountValidation() {
    hideErrorMessage();

    if (billAmount.value > 0) {
        if(cashAmount.value > billAmount.value){
            const returnAmount = cashAmount.value - billAmount.value;
            numberOfNotesGiven(returnAmount);
        }
        else{
            displayErrorMessage("Invalid Cash value as per Bill amount");
        }
    } 
    else {
        displayErrorMessage("Please make sure input bill amount must be positive and non-zero value");
    }
})

const numberOfNotesGiven = function(returnAmount){
    for(let i=0; i< notesArray.length; i++){
        let notesCount = Math.trunc(returnAmount/notesArray[i]);
        returnAmount = returnAmount%notesArray[i];
        notesDisplay[i].innerText = notesCount; 
    }
}

// 1550