console.log('Js 006 ciklai ir stringai');

const zodis1 = 'Zuikis';

const antraRaide = zodis1[1];
/* 
console.log(antraRaide); */

// Žodį "Didžiulis" naudojant ciklą for konsolėje atspausdinti po vieną raidę eilutėje

const zodis2 = 'Didžiulis';
//i yra index
for (let i = 0; i < zodis2.length; i++) {
  console.log(zodis2[i]);
};

let dHtml = '';

for (let i = 0; i < zodis2.length; i++) {
  dHtml += '<span>' + zodis2[i] + '</span>';
};

document.querySelector('#d1').innerHTML = dHtml;
//labai lėtas pridėjimas html lagint viska gali pradėt
// nes visas darbas užmetamas ant naršyklės


const sekcija2 = document.querySelector('#d2');
for (let i = 0; i < zodis2.length; i++) {
  const span = document.createElement('span');
  span.innerText = zodis2[i];
  sekcija2.appendChild(span);
}

const sekcija3 = document.querySelector('#d3');
const sekcija4 = document.querySelector('#d4');
const sekcija31 = document.querySelector('#d31');
const sekcija41 = document.querySelector('#d41');

const melynas1 = '<h1 style="color:blue";>Barsukas</h1>'; //cia stringas
//inner html'as viska isvalo ir ideda html
sekcija3.innerHTML = melynas1
sekcija31.innerHTML = melynas1

const melynas2 = document.createElement('h1'); // cia yra objektas
melynas2.style.color = 'skyblue'; // objektui duodam savybe
melynas2.innerText = 'barsukas'; // objektui duodam value
sekcija4.appendChild(melynas2); //cia objekta iterpiam i html
sekcija41.appendChild(melynas2); //cia objekta perkeliam i html
//append'as tiesiog prideda bet nieko neisvalo

// sita reiktu pakartot jei reiktu pridet antra spalva su antru barsuku
/* const melynas2 = document.createElement('h1'); // cia yra objektas
melynas2.style.color = 'skyblue'; // objektui duodam savybe
melynas2.innerText = 'barsukas'; // objektui duodam value */

if ('A' > 'a') {
  console.log('Jo');
} else {
  console.log('Ne');
}

const zodis3 = 'An--ta--nas';

console.log(zodis3.charCodeAt(0));//duoda binary ASCII lenteles simbolio nr

console.log(zodis3.repeat(10));

console.log(zodis3.split('--'));
// Gavom masyva ir jo kiekvienas lementas 
// Atskira raide, split'as splitina pagal refference

const two = zodis3.split('--');

console.log(two);

const all = []

for (let i = 0; i < two.length; i++) {
  all.push(...two[i].split('-'));
}
console.log(all);
console.log(all.flat());

// Yra zodis "ananasas". 
// reikia su for cilku pereiti kiekviena raide 
// ir consolej spausdinti tik tada jei raide yra "a"


const zodis4 = 'anananasas';

for (let i = 0; i < zodis4.length; i++) {
  if (zodis4[i] === 'a') {
    console.log(zodis4[i]);
  }
}
console.log('---');
for (let i = 0; i < zodis4.length; i++) {
  zodis4[i] === 'a' && console.log(zodis4[i]);
}