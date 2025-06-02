/* jei kas skaitys, sorry už betvarkę,
viską bandau suprast on the go, 
nuo 5 užduotiesi išsijugniau Copiloto 
suggestionus, nes nebesupratau ką darau pats :D */

function rand(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
};

/* kaip naudot dabar t1 funkcij1 ? :D */

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

/* function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
} */


// trecia dalis

const R1 = rand(0, 4);
const R2 = rand(0, 4);

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
console.log('-----------------');
console.log('4 uzduotis');
console.log('-----------------');
// Sukurkite tris kintamuosius ir 
// naudodamiesi funkcija rand() jiems 
// priskirkite atsitiktines reikšmes nuo 50 iki 200. 
// Iš section tage su id=go4 esančių div tagų 
// padarykite atitinkamo dydžio (px) apskritimus. 
// Apskritimai turi būti išdėlioti eilute nuo mažiausio iki didžiausio.

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

// 5 uzduotis 
console.log('-----------------');
console.log('5 uzduotis');
console.log('-----------------');
// Naudokite funkcija rand(). 
// Į section tage su id=go5 esančius span įrašykite 3 skaičius nuo -10 iki 10. 
// Skaičius mažesnių už 0 spausdinkite raudonai,  
// didesnius už 0 mėlynai, 
// o 0 žaliai.

const S5_1 = rand(-10, 10);

// pasičekinam skaiciu
console.log(S5_1);

/* turim tris spanus, 
spana pasitargetinam su documen.querySelector('#go5 span'), kiti bus su + span,
jaučiu reikia vėl į masyva detis viska ir iskart lygiuot
abort idea, reikia tiesiog spalvint.

klausimas jei visus spanus targetinu ir spausdinu juose reiksmes ar jos bus skirtingos */
console.log(S5_1);
console.log(S5_1);
/* nope, visi vienodi, vadinas reikia pasidaryt array ? ar tiesiog targetint visus spanus nedarant kintamojo, bet su for each daryt? */
console.log(rand(-10, 10));
console.log(rand(-10, 10));

/* ok 6itaip visi skirtingi.*/
console
  .log(rand(-10, 10));
// for clarity galima ir taip rasytis

// tai jei mazesnis skaicius bus raudonas tai bus 
// if skaicius < 0 tai tada bus red
// jei skaicius >  0  - blue
// jei skaicius == 0 - green
// reikia tada dar turbut ir true ir false naudot
// 
console.log('...');

let kintamasis = rand(-10, 10);

if (kintamasis < 0) {
  console.log('red');
} else if (kintamasis > 0) {
  console.log('blue')
} else if (kintamasis == 0) {
  console.log('green')
}
console.log(kintamasis);

console.log('...');

//klausimas ar galim visa sita darytis 
// kaip funkcija kuri pritaikoma kiekvienam

//pabandom išpushint į spaną
document.querySelector('#go5 span').innerText = kintamasis;
//pabandom pasitargetint visus spanus

let visi = document.querySelectorAll('#go5 span');

visi.forEach(span => {
  let ineris = rand(-10, 10);
  if (+ineris === 0) {
    span.style.color = 'green';
  } else if (+ineris > 0) {
    span.style.color = 'blue';
  } else {
    span.style.color = 'red';
  }
  span.innerText = ineris
});

// kiekvienam spanui randomizinam skaicius
// bandau apjungt viska

/* visi.forEach(span => {
  span.innerText = kintamasis;
}); */

// jei bandau naudoti su kintamasis, visi tampa vienodi
// vadinas reikia rand funkcija palikt viduj be kintamojo,
// arba turet tris skirtingus kitnamus, bet td kodas bus desra.

/* visi.forEach(span => {
  span.innerText = rand(-10, 10);
}); */

/* pasiklaust destytojo dėl kodo logikos dydzio
suprantu kad geriau daryti dabar taip kad  viskas veiktu ir paskui optimizuoti*/

/* logikos pergalvojimas:
man reikia suteikti random skaičius kuriuos spausdintu span'e
tuomet reikia patikrinti spane rodomą skaičių ir atsižvelgiant į tai, jį atspausdinti.

jei tekstas yra spane jis tampa tekstu, nebe skaičium, 
gal geriau tuomet sukurti funkciją, kuri automatiškai nepriklausomai nuo skaičiaus 
iškart rodytu kartu su spalva ? */


// section 6
console.log('-----------------');
console.log('6 uzduotis');
console.log('-----------------');
// Įmonė parduoda žvakes po 1 EUR. 
// Perkant daugiau kaip 1000 EUR taikoma 3 % nuolaida,
// daugiau kaip už 2000 EUR - 4 % nuolaida. 
// Parašykite skriptą, kuris skaičiuos žvakių kainą
// ir užpildykite formą easnčią section tage su id=go6. 
// Žvakių kiekį generuokite ​rand() funkcija nuo 5 iki 3000.

const S6 = {
  kaina: 1,
  nuolaida3: 3,
  nuolaida4: 4,
};

let kiekis = rand(5, 3000);

const amount = document.querySelector('#go6 p span');
const subtotal = document.querySelector('#go6 p + p  span');
const discount = document.querySelector('#go6 p + p + p span');
const total = document.querySelector('#go6 p + p + p + p span');

if (kiekis >= 1000) {
  console.log(kiekis);
  console.log('trys procentai')
  console.log(((S6.kaina * kiekis) / 100 * (100 - S6.nuolaida3)).toFixed(2));
  amount.innerText = kiekis;
  subtotal.innerText = kiekis * S6.kaina;
  discount.innerText = S6.nuolaida3;
  total.innerText = ((S6.kaina * kiekis) / 100 * (100 - S6.nuolaida3)).toFixed(2);
} else if (kiekis >= 2000) {
  console.log(kiekis);
  console.log('keturi procentai');
  console.log(((S6.kaina * kiekis) / 100 * (100 - S6.nuolaida4)).toFixed(2));
  amount.innerText = kiekis;
  subtotal.innerText = kiekis * S6.kaina;
  discount.innerText = S6.nuolaida4;
  total.innerText = ((S6.kaina * kiekis) / 100 * (100 - S6.nuolaida4)).toFixed(2);
} else {
  amount.innerText = kiekis;
  subtotal.innerText = kiekis * S6.kaina;
  discount.innerText = '0';
  total.innerText= (kiekis * S6.kaina).toFixed(2);
} 





