function rand(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
};


const allSections = [];

const section = function (myId/* ,uzduotis */) { //anonimine funkcija
  const body = document.querySelector('body');
  const section = document.createElement('section');
  body.appendChild(section);
  allSections.push(section);
  /* let naujaSekcija = allSections[uzduotis]; */
  const elementas = myId;
  section.id = elementas;
  /* naujaSekcija.appendChild(elementas) */
}
/* 
createElement() */
/* const hVienas = function (tekstas, spalva = 'crimson') { //anonimine funkcija
const section = document.querySelector('section');
const h1 = document.createElement('div');
h1.style.color = spalva;
h1.innerText = tekstas;
section.appendChild(h1);
};

hVienas('Bebras','blue');
hVienas('Bober');
hVienas('Beriedis');
hVienas('Bsadasd');
hVienas('asasd');
 */
/* for (let i = 0; i < section.length; i++) {
  const h4 = document.createElement('h4');
  body.appendChild(h4);
  h4.innerText = sk2;
  } */

/* -------------------------------- 1 uzduotis -------------------------------- */
/* Naršyklėje įdėkite 14 h1 tagų su skaičiumi 4 ir 14 h4 tagų su skaičiumi 1. 
Visi tagai turi rikiuotis į vieną eilutę. */
console.log(allSections);
console.log('-----------------------------------')
section('u' + (1 +allSections.length));
console.log('uzduotis' + ' ' + allSections.length);
console.log('-----------------------------------')

const uzduotis1 = document.querySelector('#u1')
const body = document.querySelector('body');

const sk1 = '4';
const sk2 = '1';


const h1 = document.createElement('h1');
const h4 = document.createElement('h4');

uzduotis1.appendChild(h1);
uzduotis1.appendChild(h4);

for (let i = 0; i < 14; i++) {
  const h1 = document.createElement('h1');
  uzduotis1.appendChild(h1);
  h1.innerText = sk1;
}


for (let i = 0; i < 14; i++) {
  const h4 = document.createElement('h4');
  uzduotis1.appendChild(h4);
  h4.innerText = sk2;
}

const h1All = document.querySelectorAll('h1');
const h4All = document.querySelectorAll('h4');
/* 

for (let i = 0; i < h1All.length; i++) {

  h1All[i].style = 'display:flex;justifyContent:spaceEvenly;alignItems:center;';
  h4All[i].style = 'display:flex;justifyContent:spaceEvenly;alignItems:center;';
  
} */

console.log(h1All);
uzduotis1.style = 'display:flex;justifyContent:spaceEvenly;alignItems:center;';

/* -------------------------------- 2 uzduotis -------------------------------- */
/* Naudodamiesi funkcija rand() naršyklėje eilute (tarp skaičių turi būti tarpai) 
surašykite 44 atsitiktinius skaičius nuo 14 iki 44.
Skaičius, kurie iš 4 dalinasi be liekanos nuspalvinkite raudonai, o kitus mėlynai. */

console.log(allSections);
console.log('-----------------------------------')
section('u' + (1 +allSections.length));
console.log('uzduotis' + ' ' + allSections.length);
console.log('-----------------------------------')

const uzduotis2 = document.querySelector('#u2')

for (let i = 0; i < 44; i++) {
  let sk3 = rand(14, 44);
  let tarpas = ' ';
  const h1 = document.createElement('h1');
  uzduotis2.appendChild(h1);
  h1.innerText = sk3;
  if (sk3 % 4 === 0) {
    h1.style.color = 'red';
  } else {
    h1.style.color = 'blue';
  }
  /* console.log (sk3 + tarpas + sk3); */
}

/* body.style = 'flex-wrap:wrap;display:flex;justifyContent:spaceEvenly;alignItems:center;'; */
uzduotis2.style = 'flex-wrap:wrap;display:flex;justifyContent:spaceEvenly;alignItems:center;gap:5px;';
/* body.innerHTML = `style {
  flex-wrap: wrap;
  display: flex;
  justifyContent: spaceEvenly;
  alignItems: center;
  gap: 5px; 
}` */


/* -------------------------------- 3 uzduotis -------------------------------- */
// Naršyklėje nupieškite 14 mėlynų apskritimų, išdėliotų eilute.
console.log(allSections);
console.log('-----------------------------------')
section('u' + (1 +allSections.length));
console.log('uzduotis' + ' ' + allSections.length);
console.log('-----------------------------------')
const uzduotis3 = document.querySelector('#u3')

const ballStyle = 'width:20px;height:20px;border-radius:50%;background-color:blue;';

const ballDiv = document.createElement('div');

for (let i = 0; i < 14; i++) {
  const ballDiv = document.createElement('div');
  uzduotis3.appendChild(ballDiv);
  ballDiv.style = ballStyle;
}

uzduotis3.style = 'flex-wrap:wrap;display:flex;justifyContent:spaceEvenly;alignItems:center;gap:5px;';


/* -------------------------------- 4 uzduotis -------------------------------- */
// Naršyklėje nupieškite 4 mėlynus ir 4 raudonus apskritimus, išdėliotus eilute  “zebru”. (raudonas, mėlynas, raudonas…).
console.log(allSections);
console.log('-----------------------------------')
section('u' + (1 +allSections.length));
console.log('uzduotis' + ' ' + allSections.length);
console.log('-----------------------------------')
const uzduotis4 = document.querySelector('#u4')

const ballStyleRed = 'width:20px;height:20px;border-radius:50%;background-color:red;';
const ballStyleBlue = 'width:20px;height:20px;border-radius:50%;background-color:blue;';
const ballDiv4 = document.createElement('div');

for (let i = 0; i < 8; i++) {
  if (i % 2) {
    const ballDiv4 = document.createElement('div');
    uzduotis4.appendChild(ballDiv4);
    ballDiv4.style = ballStyleRed;
  } else {
    const ballDiv4 = document.createElement('div');
    uzduotis4.appendChild(ballDiv4);
    ballDiv4.style = ballStyleBlue;
  }
}
uzduotis4.style = 'flex-wrap:wrap;display:flex;justifyContent:spaceEvenly;alignItems:center;gap:5px;';

/* -------------------------------- 5 uzduotis -------------------------------- */
// Naršyklėje nupieškite daygybos lentelę 4 dauginant iš skaičių nuo 4 iki 14.
console.log(allSections);
console.log('-----------------------------------')
section('u' + (1 +allSections.length));
console.log('uzduotis' + ' ' + allSections.length);
console.log('-----------------------------------')
const uzduotis5 = document.querySelector('#u5')

console.log(uzduotis5);


/* const eile = document.createElement('p');
allSections.uzduotis5.appendChild(eile); */
/* uzduotis5.createElement('h1'); */
// 4 x i++ print  result ? su for ?

for (i = 0; i < 14; i++) {
  let A = 4;
  let B = i;
  let C = A * B;
  let tekstas = uzduotis5.appendChild(document.createElement('div'));
  tekstas.innerText = (A + 'x' + B + '=' + C); 
  tekstas.style.border = "1px solid blue";
  tekstas.style.maxWidth = "90px";

  /* console.log(A * B); */;
/*   C.push(A * B);
  console.log(C); */
/*   const eile = uzduotis5.createElement('h1');
  eile.innerText = (A + 'x' + B + '=' C); */
}

/* -------------------------------- 6 uzduotis -------------------------------- */
/* Naršyklėje nupieškite linija iš 444 “*” 
(tarp žvaigždučių tarpų nėra). Programiškai “suskaldykite” 
(naudodami tagus atskirom žvaigždučių grupėm)
žvaigždutes taip, kad vienoje eilutėje nebūtų daugiau nei 44 “*”. */

console.log(allSections);
console.log('-----------------------------------')
section('u' + (1 +allSections.length));
console.log('uzduotis' + ' ' + allSections.length);
console.log('-----------------------------------')
const uzduotis6 = document.querySelector('#u6')

console.log(uzduotis5);

for (let i = 0; i < 44; i++) {

}
