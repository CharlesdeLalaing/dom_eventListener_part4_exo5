//exo1

let exo1 = document.getElementsByTagName('input')[0];

exo1.addEventListener('focus' , () => {
    exo1.style.background = 'blue'
})

//exo2

let exo2 = document.getElementsByTagName('input')[1];
exo2.addEventListener('focus' , () => {
    exo2.style.background = 'blue'
})
exo2.addEventListener('focusout', () => {
    exo2.style.background = 'none'
})

//exo3

let exo2un = document.getElementsByClassName('premierParagraphe')[0];
let exo2deux = document.getElementsByClassName('secondParagraphe')[0];
let exo2trois = document.getElementsByClassName('dernierParagraphe')[0];

exo2un.innerHTML = exo2deux.innerHTML;
exo2trois.innerHTML = exo2deux.innerHTML;

//exo4

let bouton = document.getElementsByClassName('buttonExo')[1];
let choix = document.getElementById('exo4');

bouton.addEventListener('click', () => {
    choix.innerHTML = document.getElementsByTagName('input')[2].value
});

//exo5

let click = document.getElementsByClassName('btn btn-primary mb-2')[0];
let photoChemin = document.getElementsByTagName('p')[4];

let bonPhotoChemin = photoChemin.innerHTML.slice(9);
let photo = document.getElementsByClassName('img-responsive')[0];


console.log(bonPhotoChemin);

click.addEventListener('click', () => {
    photo.setAttribute('src', `${bonPhotoChemin}`)
});


//exo6

let sourceImage1 = document.getElementsByClassName('img-responsive')[1].getAttribute('src');
let sourceImage2 = document.getElementsByClassName('img-responsive')[2];

sourceImage2.addEventListener('click',() => {
    sourceImage2.setAttribute('src' , `${sourceImage1}`)
})

//exo7

let exo7text1 = document.getElementsByTagName('p')[5];
let exo7text2 = document.getElementsByTagName('p')[6];

let exo7btn = document.getElementsByClassName('btn btn-primary mb-2')[1];

exo7btn.addEventListener('click',()=>{
    [exo7text1.innerHTML, exo7text2.innerHTML] = [exo7text2.innerHTML, exo7text1.innerHTML]
});


//correction

//exo1
let exo1correction = document.getElementsByTagName('input')[0];
exo1correction.addEventListener('focus',()=>{
    exo1correction.setAttribute('style', 'background-color:blue');
});

//exo2
let exo2correction = document.getElementsByTagName('input')[1];
exo2correction.addEventListener('focus',()=>{
    exo2correction.setAttribute('style', 'background-color:blue');
});
exo2correction.addEventListener('focusout',()=>{
    exo2correction.setAttribute('style', 'background-color:white');
});

//exo3
let paragraphe0 = document.getElementsByClassName('premierParagraphe')[0];
let paragraphe1 = document.getElementsByClassName('secondParagraphe')[0];
let paragraphe2 = document.getElementsByClassName('dernierParagraphe')[0];
let bouton0 = document.getElementsByClassName('buttonExo')[0];
bouton0.addEventListener('click',()=>{
    paragraphe0.innerHTML = paragraphe1.innerHTML;
    paragraphe2.innerHTML = paragraphe1.innerHTML;
});

//exo4
let input3 = document.querySelectorAll('input')[2];
let txt = document.querySelector('#exo4');
let bouton1 = document.getElementsByClassName('buttonExo')[1];
bouton1.addEventListener('click', () => {
    txt.innerHTML = input3.value;
})

//exo5
let bouton2 = document.querySelectorAll('button')[2];
let img1 = document.querySelectorAll('img')[0];
let pChemin = img1.previousElementSibling.innerText;

bouton2.addEventListener('click',()=>{
    img1.src = pChemin.substr(9);
});

//exo6
let img2 = document.querySelectorAll('img')[1];
let img3 = document.querySelectorAll('img')[2];

img2.addEventListener('click',()=>{
    img3.src = img2.src;
});

//exo7
let btn3 =  document.getElementsByClassName('btn')[3];
let paragraphe3 = document.querySelectorAll('p')[5];
let paragraphe4 = document.querySelectorAll('p')[6];

let tempo;
btn3.addEventListener('click',()=>{
    tempo = paragraphe2.innerText;
    paragraphe4.innerText = paragraphe3.innerText;
    paragraphe3.innerText = tempo;
});
