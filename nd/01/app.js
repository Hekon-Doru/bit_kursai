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

if (R1 == 0 || R2 == 0) {
  R3.innerText = 'Niutonas vartosi grabe';
};
// lygybes zenklas yra ==, o ne =, jei norim dar ir tip
// tyngiu šiek tiek daryt kad butu galima nulio dalyba, 
// reikėtų rašyt su if'u ir chekint ar r1 yra nulis,
// tuomet gal nedėti jo priekyje nes jis ne didesnis
// gal užtektų sumažinti iki R1 mažiau už R2 bet nelygus nuliui, nelygybes zenkas !== (Not lygus nuliui - is not ?)

// section 4

const S41 = rand(50, 200);
const S42 = rand(50, 200);
const S43 = rand(50, 200);

console.log(S41, S42, S43);

/* if (S41 < S42 && S41 < S43 && S42 < S43) {
  console.log(S41, S42, S43);
} else if (S41 < S43 && S41 < S42 && S43 < S42) {
  console.log(S41, S43, S42);
} else if (S42 < S41 && S42 < S43 && S41 < S43) {
  console.log(S42, S41, S43);
} else if (S42 < S43 && S42 < S41 && S43 < S41) {
  console.log(S42, S43, S41);
} else if (S43 < S41 && S43 < S42 && S41 < S42) {
  console.log(S43, S41, S42);
} else if (S43 < S42 && S43 < S41 && S42 < S41) {
  console.log(S43, S42, S41);
}
  sitoj vietoj galima viska trumpinti naudojant arrays ir sort funkcija,
  */

const sorted = [S41, S42, S43].sort((a, b) => a - b);

// susisortinom eile dabar patargetinam divus ir supaisom

let Circle1 = document.querySelector('#go4 div');
let Circle2 = document.querySelector('#go4 div + div');
let Circle3 = document.querySelector('#go4 div + div + div');

Circle1.style.width = sorted[0] + 'px';
Circle1.style.height = sorted[0] + 'px';
Circle1.style.borderRadius = '50%';
Circle1.style.backgroundColor = 'green';

Circle2.style.width = sorted[1] + 'px';
Circle2.style.height = sorted[1] + 'px';
Circle2.style.borderRadius = '50%';
Circle2.style.backgroundColor = 'green';

Circle3.style.width = sorted[2] + 'px';
Circle3.style.height = sorted[2] + 'px';
Circle3.style.borderRadius = '50%';
Circle3.style.backgroundColor = 'green'; 

const lygiavimas = document.querySelector('#go4');

lygiavimas.style.display = 'flex';
lygiavimas.style.justifyContent = 'space-around';
lygiavimas.style.alignItems = 'center'; 
lygiavimas.style.width = '100%';



