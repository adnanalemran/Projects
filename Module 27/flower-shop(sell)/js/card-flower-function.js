
function fieldToText(idName) {
    const idField = document.getElementById(idName);
    const valueText = idField.value;
    return valueText;
}

function handleClickBtn(target) {
    const selectedItemContainer = document.getElementById('table');
    const itemName = target.parentNode.childNodes[1].innerText;
    const itemPrice = target.parentNode.querySelector('.fw-bold span').innerText;
  
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
      <td>${itemName}</td>
      <td>${itemPrice}</td>
    `;
    selectedItemContainer.appendChild(newRow);

    const totalPricetext = document.getElementById('total-price').innerText;

    const totalPrice =  parseFloat(totalPricetext);
    const itemPriceNum = parseFloat(itemPrice);

    const newTotalPrice = totalPrice + itemPriceNum;
    document.getElementById('total-price').innerText = newTotalPrice;
    document.getElementById('grand-total-price').innerText = newTotalPrice;
    document.getElementById('warning-copon').innerText = '';
    document.getElementById('warning-success').innerText = '';
  }
document.getElementById('btn-apply').addEventListener('click',function(){
    const fild = fieldToText('Coupon-fild');
    if(fild === "off30"){
    const totalpriceText = document.getElementById('total-price').innerText;
    const totalPrice = parseFloat(totalpriceText);
    const discount =  totalPrice * 0.3 ; 
    const payPrice  =  totalPrice - discount ; 
    document.getElementById('grand-total-price').innerText = payPrice; 
    document.getElementById('Coupon-fild').value = '';
    document.getElementById('warning-copon').innerText = '';
    document.getElementById('warning-success').innerText = "Coupon apply success";
    }
    
    
    else{
        document.getElementById('warning-copon').innerText = "Coupon not active";
  
    }
     
})

 