const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2');
const h3 = document.querySelector('h3');
const h4 = document.querySelector('h4');

h1.innerText = '1';
h2.innerText = '2';
h3.innerText = '3';
h4.innerText = '4';


// antra dalis

const kvadratas1 = document.querySelector('div');

kvadratas1.style.width = '100px';
kvadratas1.style.height = '100px';
kvadratas1.style.backgroundColor = 'blue';

const kvadratas2 = document.querySelector('div + div');
kvadratas2.style.width = '100px';
kvadratas2.style.height = '100px';
kvadratas2.style.borderRadius = '50%';
kvadratas2.style.backgroundColor = 'red';

function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const R1 = rand(0, 4);
const R2 = rand(0, 4);

// trecia dalis

document.querySelector('#go3 span').innerText = R1;
document.querySelector('#go3 span + span').innerText = R2;

const R3 = document.querySelector('#go3 span + span + span');

if (R1 !== 0 && R1 > R2) {
  R3.innerText = R1 / R2;
} else {
  R3.innerText = R2 / R1;
};

if ( R1 == 0 || R2 == 0) {
  R3.innerText = 'Niutonas vartosi grabe';
};
// lygybes zenklas yra ==, o ne =, jei norim dar ir tip
// tyngiu šiek tiek daryt kad butu galima nulio dalyba, 
// reikėtų rašyt su if'u ir chekint ar r1 yra nulis,
// tuomet gal nedėti jo priekyje nes jis ne didesnis
// gal užtektų sumažinti iki R1 mažiau už R2 bet nelygus nuliui, nelygybes zenkas !== (Not lygus nuliui - is not ?)

//
