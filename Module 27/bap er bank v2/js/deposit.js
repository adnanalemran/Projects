document.getElementById('btn-deposit').addEventListener('click', function() {
    const newDepositAmount = getInputElementValueById('deposit-field');
    const previousDepositTotal = getTextElementValueById('deposit-total');
    const newDepositTotal = previousDepositTotal + newDepositAmount;  
    setTextElementValueById('deposit-total', newDepositTotal);
    const previousBalanceTotal = getTextElementValueById('balance-total');
    const newBalanceTotal = previousBalanceTotal+ newDepositAmount; 
    setTextElementValueById('balance-total',newBalanceTotal)

});
