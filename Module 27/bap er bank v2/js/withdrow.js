document.getElementById('btn-withdrow').addEventListener('click',function(){
    const newWithdrowAmount = getInputElementValueById('withdrow-field');
    const previousWithdrowTotal = getTextElementValueById('withdrow-total') ;
    const newWithdrowTotal = previousWithdrowTotal + newWithdrowAmount ;
    setTextElementValueById('withdrow-total',newWithdrowTotal);
    const previousBalanceTotal = getTextElementValueById('balance-total');
    const newBalanceTotal = previousBalanceTotal - newWithdrowTotal; 
    setTextElementValueById('balance-total',newBalanceTotal)
})