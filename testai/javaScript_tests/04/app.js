console.log('Vytenis V. Kazlas');

function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const africa = ['Zebras', 'Liūtas', '', 'Raganosis', '', 'Raganosis', 'Begemotas'];
const australia = ['Kengūra', 'Ančiasnapis', 'Dingo', 'Atsirado', 'Strutis'];

console.log('--------------');
console.log('1 užduotis');
console.log('--------------');

/* Tiesiogiai HTML faile rankiniu būdu sukurkite du tuščius <h2> tagus ir vieną mygtuką. 
Paspaudus mygtuką kiekvienam tagui sugeneruotkite rand() atskirą skaičių nuo 1 iki 6 
ir jį įrašykite į tago vidų naudojant innerText() metodą. 
Paspaudus mygtuką skaičiai turi būti pergeneruojami iš naujo. 
Jeigu sugeneruoti skaičiai yra vienodi, juos nudažyti raudonai. */

const mygtukas = document.querySelector('button');
const h2_1 = document.querySelector('h2:nth-of-type(1)');
const h2_2 = document.querySelector('h2:nth-of-type(2)');

mygtukas.addEventListener('click', () => {
  const sk1 = rand(1, 6);
  const sk2 = rand(1, 6);

  h2_1.innerText = sk1;
  h2_2.innerText = sk2;

  if (sk1 === sk2) {
    h2_1.style.color = 'red';
    h2_2.style.color = 'red';
  } else {
    h2_1.style.color = 'black';
    h2_2.style.color = 'black';
  }
});

console.log('--------------');
console.log('2 užduotis');
console.log('--------------');

/* Tiesiogiai HTML faile rankiniu būdu sukurkite <h3> tagą ir vieną mygtuką.
Susikurkite tuščią masyvą, skaičiams saugoti. Paspaudus mygtuką, 
sugeneruokite rand() skaičių nuo 1 iki 10. Sugeneruotą skaičių pridėkite į masyvą,
o tą masyvą atspausdinkite konsolėle. <h3> tage skaičiuokite ir su innerText()
metodu rašykite visų sugeneruotų skaičių sumą.
*/

const mygtukas2 = document.querySelector('button:nth-of-type(2)');
const h3 = document.querySelector('h3:nth-of-type(1)');

let skaiciai = [];

mygtukas2.addEventListener('click', () => {
  const sk3 = rand(1, 10);
  skaiciai.push(sk3);
  console.log(skaiciai);
  let suma = skaiciai.reduce(
    (eile, reiksme) => eile + reiksme, 0);
  h3.innerText = `Suma: ${suma}`;
});

console.log('--------------');
console.log('3 užduotis');
console.log('--------------');

/*Tiesiogiai HTML faile rankiniu būdu sukurkite <ul> tagą.
JS pagalba perskaitykite masyvą africa ir naudodami createElement()
ir kitus reikalingus metodus sukurkite kiekvienam masyvo elementui po
<li> tagą su elemento stringu viduje ir juos įrašykite į <ul> tago vidų.
Elementus su tuščiais stringais praleiskite ir jiems <li> elementų nekurkite.*/

const list = document.querySelector('ul');

africa.forEach((gyvunas) => {
  if (gyvunas !== '') {
    const li = document.createElement('li');
    li.innerText = gyvunas;
    list.appendChild(li);
  }
});


console.log('--------------');
console.log('4 užduotis');
console.log('--------------');

/* Tiesiogiai HTML faile rankiniu būdu sukurkite du tuščius input laukelius,
vieną <h5> tagą ir du mygtukus: “+” ir “-”.
Suprogramuokite kalkuliatorių taip,
kad įrašius skaičius į abu input laukelius ir paspaudus atitinkamą
mygtuką su skaičiais būtų atlikta atitinkama aritmetinė operacija,
o jos rezultatas būtų atvaizduotas <h5> tage.
Pasirinkite patys sau patogiausius metodus tai atlikti.*/

const pirmasSkaicius = document.querySelector('input:nth-of-type(1)');
const antrasSkaicius = document.querySelector('input:nth-of-type(2)');
const h5 = document.querySelector('h5');
const mygtukasPlius = document.querySelector('button:nth-of-type(3)');
const mygtukasMinus = document.querySelector('button:nth-of-type(4)');

mygtukasPlius.addEventListener('click', () => {
  const suma = Number(pirmasSkaicius.value) + Number(antrasSkaicius.value);
  h5.innerText = `Rezultatas: ${suma}`;
  if (isNaN(suma)) {
    h5.innerText = 'Į langelį įvestas ne skaičius';
  }
});

mygtukasMinus.addEventListener('click', () => {
  const suma = Number(pirmasSkaicius.value) - Number(antrasSkaicius.value);
  h5.innerText = `Rezultatas: ${suma}`;
  if (isNaN(suma)) {
    h5.innerText = 'Į langelį įvestas ne skaičius';
  }
});

console.log('--------------');
console.log('5 užduotis');
console.log('--------------');

/*(BOSO lygis) Tiesiogiai HTML faile rankiniu būdu sukurkite <ul> tagą.
JS pagalba perskaitykite masyvą australia ir kiekvieną masyvo elementą
įrašykite į strigą su <li> tagais iš abiejų pusių, o visus
gautus stringus sudėkite į vieną bendrą stringą.
Tą stringą naudodami innerHTML() metodą įdėkite į <ul> tago vidų.
Generavimo metu “Dingo” background’ą nuspalvinkite mėlynai.
*/

const australijaList = document.querySelector('ul:nth-of-type(2)');

let australiaHTML = '';

australia.forEach((gyvunas) => {
  if (gyvunas === 'Dingo') {
    australiaHTML += `<li style="background-color: blue;">${gyvunas}</li>`;
  }
  australiaHTML += `<li>${gyvunas}</li>`;
});

australijaList.innerHTML = australiaHTML;

