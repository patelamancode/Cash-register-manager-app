// document.querySelector('.check-btn').addEventListener('click', function(){
//     console.log("Check button is clicked")
// })


const billAmount = document.querySelector('#bill-amount');
const cashAmount = document.querySelector('#cash-amount');

const checkButton =  document.querySelector('.check-btn');

checkButton.addEventListener('click', function(){
    console.log(billAmount.value);
})