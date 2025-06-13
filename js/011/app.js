console.log('ate');

const skaiciai = [5, 8, 7];

const skaiciai1 = skaiciai;


const skaiciai2 = [88, ...skaiciai, 44];

const skaiciai3 = { obouolys1: 'didelis', ...skaiciai, obouolys2: 'didelis' };

skaiciai1[0] = 88;

console.log(skaiciai, skaiciai1, skaiciai2, skaiciai3);

const medis = { sakos: 10, obuoliai: 22, aukstis: 15 };

const medis2 = { obuoliai: 200, ...medis, sakos: 15 };

console.log(medis, medis2);

const funSpread = function (a, b) {
  console.log(a - b);
}

const manoSk = [7, 10];

funSpread(...manoSk);

const funRest = function (ab, bc, ...argumentai) {
  let suma = 0;
  argumentai.forEach(el => suma += el);
  console.log('suma iš: ', argumentai.length, 'lygi', suma);
}

funRest(4, 7, 9, 21);
funRest(4, 21);
funRest(4, 7, 9, 21, 81, 7, 9, 7);

const stebuklas = [
  4,
  [1, 2],
  5,
  8
];

const kitasStebuklas = [...stebuklas]; // seklus kopijavimas - Shallow copy 
const deepStebuklas = structuredClone(stebuklas);

stebuklas[0] = 100;
stebuklas[1][1] = 200;

console.log(stebuklas, kitasStebuklas, deepStebuklas);

const skaiciaiPaprasti = [7, 9, 7, 9];
// sukurt nauja masyva, kuriame kiekvienas skaicius yra padauginas is 5

const skMap = skaiciaiPaprasti.map(el => el * 5);
console.log(skMap);

const skaiciaiObjekte = [
  { skaicius: 4 },
  { skaicius: 7 },
  { skaicius: 56 },
  { skaicius: 34 },
  { skaicius: 11 }

];

// sukurti naują masyvą, kuriame kiekvienas 
// skaičius yra padaugintas iš 5 skaicius turi likti duotam objekte, 
// objekto savybės vardas turi likti toks pat

/* const skRe = skaiciaiObjekte.map(obj => ({ skaicius: obj.skaicius * 5 })); */

const skRe = skaiciaiObjekte.map(obj => {
  return { skaicius: obj.skaicius * 5 };
});

console.log(skRe);

const cart = [
  { id: 875, title: 'Pieniškos dešros', price: 2.45, count: 2 },
  { id: 8654, title: 'Sviestukas sintetinis', price: 3.20, count: 1 },
  { id: 86546, title: 'Batonas studentų', price: 1.22, count: 1 },
  { id: 875, title: 'Bulvės 4kl', price: 0.58, count: 2 },
];

// paditdinti visų produktų kiekius 1

const cartPlus1 = cart.map(unit => unit.id === 8654 ? ({...unit, count: unit.count + 1 }) : unit);

console.log(cartPlus1);

//ternaris visada turi tureti ? - if ir tada : - else

