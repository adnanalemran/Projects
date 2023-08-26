function getInputElementValueById(inputId) {
    const inputElement = document.getElementById(inputId);
    const inputValue = parseFloat(inputElement.value);
    inputElement.value = '';  
    return inputValue;
}

function getTextElementValueById(elementId) {
    const element = document.getElementById(elementId);
    const elementValue = parseFloat(element.innerText);
    return elementValue;
}

function setTextElementValueById(elementId, newValue) {
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue; 
}
