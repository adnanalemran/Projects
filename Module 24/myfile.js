console.log('hello');
const alli =document.getElementsByTagName('li');
console.log(alli);

const allTiltles = document.getElementsByClassName('section-title')
console.log(allTiltles);

const secondSection = document.getElementById('second-section');
secondSection.style.color="#F05648";
secondSection.style.backgroundColor = '#78BAB6';
secondSection.style.borderRadius = '7px';

// document.querySelectorAll
// document.querySelector
const secondList = document.getElementById('second-list');

const li = document.createElement('li');
li.innerText = "my dynamic item";
secondList.appendChild(li);

