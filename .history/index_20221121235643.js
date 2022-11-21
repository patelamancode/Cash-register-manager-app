const billAmount = document.querySelector('#bill-amount');
const cashAmount = document.querySelector('#cash-amount');
const checkButton = document.querySelector('.check-btn');
const errorMessage = document.querySelector('.error-message');
const notesDisplay = document.querySelectorAll('.notes-number');
const hideContent = document.querySelector('.sub-container');
const nextButton = document.querySelector('#next-btn');
const mainError = document.querySelector('.error-check-for-bill');
const CURRENCYARRAY = [2000, 1000, 500, 200, 100, 50, 20, 10, 5, 1];

nextButton.addEventListener('click', function () {
    if (!billAmount.value) {
        hideContent.style.display = "none";
        mainError.style.display = "block";
        mainError.innerHTML = "Please enter a bill value";
    } else if (billAmount.value < 0) {
        hideContent.style.display = "none";
        mainError.style.display = "block";
        mainError.innerHTML = "Please enter a positive bill value";
    } else {
        mainError.style.display = "none";
        hideContent.style.display = "flex";
    }
});

const displayErrorMessage = function (message) {
    errorMessage.style.display = "block";
    errorMessage.style.backgroundColor = "red";
    errorMessage.innerText = message;
};
const hideErrorMessage = function () {
    errorMessage.style.display = "none";

};

const numberOfNotesGiven = function (returnAmount) {
    for (let i = 0; i < CURRENCYARRAY .length; i++) {
        let notesCount = Math.trunc(returnAmount / CURRENCYARRAY [i]);
        returnAmount = returnAmount % CURRENCYARRAY [i];
        notesDisplay[i].innerText = notesCount;
    }
    
};

checkButton.addEventListener('click', function amountValidation() {
    hideErrorMessage();

    if (billAmount.value > 0) {
        if (cashAmount.value > billAmount.value) {
            const returnAmount = cashAmount.value - billAmount.value;
            numberOfNotesGiven(returnAmount);
        } else if (cashAmount.value === billAmount.value) {
            displayErrorMessage("AMOUNTS ARE EQUALS NO NEED FOR CHANGE")
        } else {
            displayErrorMessage("Invalid Cash value as per Bill amount");
        }
    } else {
        displayErrorMessage("Please make sure input bill amount must be positive and non-zero value");
    }
});