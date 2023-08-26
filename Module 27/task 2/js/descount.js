// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
    function getTextToNumberElementById(elementId) {
        const element = document.getElementById(elementId);
        const elementValue = element.innerText;
        const value = parseFloat(elementValue);
        return value;
    }

    function idToInnnerTextSet(idName, value) {
        const element = document.getElementById(idName);
        element.innerText = value;
    }

    document.getElementById("total-price").innerText = 100000;
 

    document.getElementById('btn-apply').addEventListener('click', function() {
        const discountFill = document.getElementById('Discount-fill').value;
        if(discountFill === 'DIS30'){
            const mainPrice = getTextToNumberElementById('main-price');
            const discount = 0.3;  
            const discountedPrice = mainPrice * (1 - discount);
            idToInnnerTextSet('total-price', discountedPrice);
            document.getElementById('warning').innerText = " "
        }
        else{
            document.getElementById('warning').innerText = "invalid code"
        }

    });

});
