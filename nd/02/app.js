function rand(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
};

/* -------------------------------- 1 uzduotis -------------------------------- */
/* Naršyklėje įdėkite 14 h1 tagų su skaičiumi 4 ir 14 h4 tagų su skaičiumi 1. 
Visi tagai turi rikiuotis į vieną eilutę. */


const body = document.querySelector('body');

const sk1 = '4';
const sk2 = '1';



const h1 = document.createElement('h1');
const h4 = document.createElement('h4');

body.appendChild(h1);
body.appendChild(h4);

for (let i = 0; i < 14; i++) {
  const h1 = document.createElement('h1');
  body.appendChild(h1);
  h1.innerText = sk1;
}


for (let i = 0; i < 14; i++) {
  const h4 = document.createElement('h4');
  body.appendChild(h4);
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
body.style = 'display:flex;justifyContent:spaceEvenly;alignItems:center;';

/* -------------------------------- 2 uzduotis -------------------------------- */
/* Naudodamiesi funkcija rand() naršyklėje eilute (tarp skaičių turi būti tarpai) 
surašykite 44 atsitiktinius skaičius nuo 14 iki 44.
Skaičius, kurie iš 4 dalinasi be liekanos nuspalvinkite raudonai, o kitus mėlynai. */




for (let i = 0; i < 44; i++) {
  let sk3 = rand(14, 44);
  let tarpas = ' ';
  const h1 = document.createElement('h1');
  body.appendChild(h1);
  h1.innerText = sk3;
  if (sk3 % 4 === 0) {
    h1.style.color = 'red';
  } else {
    h1.style.color = 'blue';
  }
  /* console.log (sk3 + tarpas + sk3); */
}

/* body.style = 'flex-wrap:wrap;display:flex;justifyContent:spaceEvenly;alignItems:center;'; */
body.style = 'flex-wrap:wrap;display:flex;justifyContent:spaceEvenly;alignItems:center;gap:5px;';
/* body.innerHTML = `style {
  flex-wrap: wrap;
  display: flex;
  justifyContent: spaceEvenly;
  alignItems: center;
  gap: 5px; 
}` */


/* -------------------------------- 3 uzduotis -------------------------------- */
// Naršyklėje nupieškite 14 mėlynų apskritimų, išdėliotų eilute.

const ballStyle = 'width:20px;height:20px;border-radius:50%;background-color:blue;';

const ballDiv = document.createElement('div');

for (let i = 0; i < 14; i++) {
  const ballDiv = document.createElement('div');
  body.appendChild(ballDiv);
  ballDiv.style = ballStyle;
}
