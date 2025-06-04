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

const melynas1 = '<h1 style="color:blue";>Barsukas</h1>'; //cia stringas

sekcija3.innerHTML = melynas1

const melynas2 = document.createElement('h1'); // cia yra objektas
melynas2.style.color = 'skyblue'; // objektui duodam savybe
melynas2.innerText = 'barsukas'; // objektui duodam value
sekcija4.appendChild(melynas2); //cia objekta iterpiam i html

