// document.querySelector('.check-btn').addEventListener('click', function(){
//     console.log("Check button is clicked")
// })

const billAmount = document.querySelector('#bill-amount');
const cashAmount = document.querySelector('#cash-amount');
const checkButton =  document.querySelector('.check-btn');

// Testing console values for all inputs
// checkButton.addEventListener('click', function(){
//     console.log(cashAmount.value);
// })

checkButton.addEventListener('click', function(){
    if(billAmount > 0 && cashAmount > 0){
        console.log("working fine");
    }else console.log("please input valid entries");
})
