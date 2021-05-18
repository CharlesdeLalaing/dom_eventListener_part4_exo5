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
let temp = exo7text2

let exo7btn = document.getElementsByClassName('btn btn-primary mb-2')[1];

exo7btn.addEventListener('click',()=>{
    [exo7text1.innerHTML, exo7text2.innerHTML] = [exo7text2.innerHTML, exo7text1.innerHTML]
})