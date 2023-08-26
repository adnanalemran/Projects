const jamaStatus = document.getElementById('jamaStatus');
const bayStatus = document.getElementById('bayStatus');
const jomaBox = document.getElementById('jomaBox');
const bayBox = document.getElementById('bayBox');
const jomaBtn = document.getElementById('jomaBtn');
const bayBtn = document.getElementById('bayBtn');
const totalStutas = document.getElementById('totalStutas');


bayStatus.innerText = 0;
jamaStatus.innerText = 0;
totalStutas.innerText = 100;


jomaBtn.addEventListener('click', function () {
    if (parseFloat(jomaBox.value) >= 0) {
        jamaStatus.innerText = parseFloat(jomaBox.value) + parseFloat(jamaStatus.innerText);
        totalStutas.innerText = parseFloat(totalStutas.innerText) + parseFloat(jomaBox.value);
        jomaBox.value = '';
    } else {
        alert('নেগেটিভ টাকা দেওয়া যাবে না');
    }
});

bayBtn.addEventListener('click', function () {
    if (parseFloat(bayBox.value) >= 0) {
        if (parseFloat(totalStutas.innerText) >= parseFloat(bayBox.value)) {
            bayStatus.innerText = parseFloat(bayBox.value) + parseFloat(bayStatus.innerText);
            totalStutas.innerText = parseFloat(totalStutas.innerText) - parseFloat(bayBox.value);
            bayBox.value = '';
        } else {
            alert(' আপনার টাকা শেষ হয়ে গেছে! 😅');
        }
    } else {
        alert('নেগেটিভ টাকা দেওয়া যাবে না');
    }
});
