console.log('labas pasauli');


const namas = {
  aukstai: 2,
  kambariai: 5,
  langai: true,
};

//array - masyvas

const piestukai = [
  'raudonas',
  'melynas',
  'zalias',
  'geltonas'
];

console.log(namas.kambariai);
console.log(piestukai[1]);
console.log(piestukai);

// eilės njumeris yra indexas 
// indexas prasideda nuo 0
// norint imt ką nors iš masyvo naudojam index'ą 
// galime naudoti ir įdėjimui

piestukai[2] = 'oranzinis'; // pakeiciam zalia i orandzine
console.log(piestukai);

piestukai[4] = 'rozinis';
console.log(piestukai);

/* piestukai[6] = 'baltas';  */
piestukai.push('baltas'); //auto deda į masyvo pabaigą, bet neužpildo tuščių vietų.
console.log(piestukai, piestukai.length); // isvedam masyva ir jo ilgi

const temp = piestukai[0]; //saugom pirmo piestuko spalva 5 temp
console.log(piestukai)
piestukai[0] = piestukai[3]; //pakeiciam tvarka
console.log(piestukai)
piestukai[3] = temp; //temp kintamajam saugoam spalva idedam i tuscia stalciuka
console.log(piestukai)

console.log(piestukai, piestukai.length); // isvedam masyva ir jo ilgi


const objektynas = [
  { a: 1, b: 2 },
  { a: 3, b: 4 },
  { a: 5, b: 6 },
  { a: 7, b: 8 },
];
console.log(objektynas);

const A = objektynas[0];
objektynas.push(A);

objektynas[0].a = 10; // pakei2iam pirmo objekto rieksme i 10
objektynas[0].c = 10; // pakei2iam pirmo objekto rieksme i 10

console.log(objektynas);

// turim cycle

for (let i = 0; i < 10; i++) {
  console.log('GG EZ');
}

for (let i = 0; i < piestukai.length; i++) {
  console.log(piestukai[i]);
  /* console.log(`Piestukas ${i + 1}: ${piestukai [i]}`); */
}


let htmlIs = '';

for (let i = 0; i < piestukai.length; i++) {
  htmlIs += `<li>${piestukai[i]}</li>`;
}

console.log(htmlIs);


const ul = document.querySelector('ul'); // pasirenkam elementa
ul.innerHTML = htmlIs; // irasome sukurta html i ul elementa



const allLis = document.querySelectorAll('li');

console.log(htmlIs); // irasome sukurta html i ul elementa

for (let i = 0; i < allLis.length; i++) {
  const li = allLis[i];
  if(i % 2) {
    li.style.color = 'green';
  } else {
    li.style.color = 'crimson';
  }
}