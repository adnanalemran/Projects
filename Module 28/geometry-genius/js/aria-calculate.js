// Convert the value of an input field to a number
function fieldToNumber(idName) {
    const idField = document.getElementById(idName);
    const valueText = idField.value;
    const value = parseFloat(valueText);
    return value;
}

// Set the text content of an element with the provided id
function setText(idName, text) {
    const idElement = document.getElementById(idName);
    idElement.innerText = text;
}

// Calculate the area of a triangle based on user input
function calculateTriangleArea() {
    const base = fieldToNumber("triangle-base");
    const height = fieldToNumber("triangle-height");
    const area = 0.5 * base * height;
    setText("triangle-area", area);
}

// Calculate the area of a rectangle based on user input
function calculateRectangleArea() {
    const width = fieldToNumber("rectangle-width");
    const length = fieldToNumber("rectangle-length");
    const area = width * length;
    setText("rectangle-area", area);
}

// Calculate the area of a parallelogram based on user input
function calculateParallelogramArea() {
    const base = fieldToNumber("parallelogram-base");
    const height = fieldToNumber("parallelogram-height");

    //validate
    if(isNaN(base) || isNaN(height)){
        alert('please insert number');
        return;
    }
    const area = base * height;
    setText("parallelogram-area", area);

    //add to calculation entry
    addtocalculationHistory('Parallaogram',area);
    setText('parallelogram-base', )
    setText('parallelogram-height', )
}

// Calculate the area of an ellipse based on user input
function calculateEllipseAria() {
    const axis1 = fieldToNumber("ellipse-axis1");
    const axis2 = fieldToNumber("ellipse-axis2");
    const area = Math.PI * axis1 * axis2;
    setText("ellipse-area", area);
    addtocalculationHistory('ellipse',area)
}

//add to calculation history
function addtocalculationHistory(areaType, area) {
    const calculationEntry = document.getElementById('calculation-entry');
    const rowId = `row-${Date.now()}`; 
    const item = document.createElement('tr');
    item.innerHTML = `
    <td>${areaType}</td>
    <td class='w-6/12'>${area}cm <sup>2</sup></td>
    <td><button class="btn btn-primary" onclick="clearRow('${rowId}')">Clear</button></td>`;
    item.id = rowId; // Assign the unique identifier to the row
    calculationEntry.appendChild(item);
}
function clearRow(rowId) {
    const row = document.getElementById(rowId);
    if (row) {
        row.remove();
    }
}
