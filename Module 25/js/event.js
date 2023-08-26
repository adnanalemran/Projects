// option 2 
function makeRed(){
    document.body.style.backgroundColor= 'red';
}

// Option 3
const makeBlueBtn = document.getElementById('make-blue');

makeBlueBtn.onclick = makeBlue;

function makeBlue(){
    document.body.style.backgroundColor = 'blue';
}

// option 4
const pinkBtn = document.getElementById('make-pink');
pinkBtn.addEventListener('click',makePink)

function makePink(){
   document.body.style.backgroundColor="pink"
}
// option 4 final
document.getElementById('make_goldenRod').addEventListener('click',function(){
    document.body.style.backgroundColor = 'goldenrod';
})

