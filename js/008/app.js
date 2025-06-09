console.log('Have fun!');

function rand(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
};

//funkicja()

const manoStringas = 'AAA';

const manoFunkcija = function () {
  return 'BBB';
}

console.log(manoStringas);

console.log(manoFunkcija);
//spausdina visa reiksme priskirta funkcijai

console.log(manoFunkcija());
//grazina tik funkcijos rezultata

const manoFunkcija2 = function () {
  return 'B'.repeat(3);
}

console.log(manoFunkcija2());

const manoFunkcija3 = function (kiekis) { // (kiekis) - parametras
  kiekis = kiekis + 2;
  return 'B'.repeat(kiekis);
}

console.log(manoFunkcija3(1)); //(1) - argumentas

const n = 1;
console.log(manoFunkcija3(n));

const fun1 = function (pa1, pa2) {
  const rez = pa1 + pa2;
  return rez;
}

const sk1 = 8;

console.log(fun1(sk1, sk1));
/* 
const fun2 = function (pa1, pa2, pa3) {
  const rez1 = pa1 + pa2;
  const rez2 = pa1 + pa2 + pa3;
  const rez =  [rez1, rez2];
  
  return rez;
} */


//funkcijoje viskas eina is eiles
const fun2 = function (pa1, pa2, pa3 = 5) { //galima ideti defaultine reiksme parametrui jei nera kintamojo priduoto argumento
  const rez1 = pa1 + pa2;
  const rez2 = pa1 + pa2 + pa3;
  const rez = [];
  rez.push(rez1);
  rez.push(rez2);

  return rez;
}

console.log(fun2(2, 4, 8));
console.log(fun2(2, 4, 8, 10));
console.log(fun2(2, 4));

//parasykite funkcija kuri gauna du skaicius ir grazina didesni
// (paprastumo delei, skaiciai negali but lygus)

const fun3 = function (p1, p2) {
  if (p1 > p2 && p1 !== p2) {
    return p1;
  } else if (p1 < p2 && p1 !== p2) {
    return p2;
  } else {
    return 'skaiciai lygus';
  }
}

const s1 = rand(0, 50)
const s2 = rand(0, 50)

console.log(s1, s2);

console.log(fun3(s1, s2));

const medis = {};

medis.sakos = 10;
//"this - sako kad šiame objekte kur esam"
medis.obuoliai = function () {
  return this.sakos * 5;
}

console.log(medis.obuoliai());

// dar vienas funkcijos aspektas 
// --------------------------------------------------------------

const hVienas = function (tekstas, spalva = 'crimson') { //anonimine funkcija
  const section = document.querySelector('section');
  const h1 = document.createElement('div');
  h1.style.color = spalva;
  h1.innerText = tekstas;
  section.appendChild(h1);
};

hVienas('Bebras','blue');
hVienas('Bober');
hVienas('Beriedis');

//2nd darbui labai gerai

function suma(a, b) { // vardine funkcija
  return a + b;
};
function suma(a, b) { // vardine funkcija
  return a * b;
};

console.log(suma(5,6));
