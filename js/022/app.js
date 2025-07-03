console.log('-------------------------------');
console.log('Ciklai ir loopai');
console.log('-------------------------------');

function rand(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

// do while nuo 1 iki daug
// while nuo 0 iki daug

// Stastka vairuoja BOLT is nori  pirkt meškerę už 200 Eur
// per naktį uždirba nuo 20 iki 80 Eur.

let stasys = 0;

do {
  const uzdarbis = rand(20, 80);
  stasys += uzdarbis;
  console.log(stasys);

} while (stasys < 200);

console.clear();
// turi mociute ir siandien stasio gimtadienis.

stasys = 0;

const mociute = rand(50, 300);

stasys = mociute;

console.log(stasys, 'po gimtadienio');

while (stasys < 200) {
  const uzdarbis = rand(20, 80);
  stasys += uzdarbis;
  console.log(stasys);
}

console.clear();

// paštomatas S, M, L, XL

const siunta = 'L';

console.log('Turim', siunta);

if (siunta == 'S') {
  console.log('Tikrinam S');
}
if (siunta == 'M' || siunta == 'S') {
  console.log('Tikrinam M');
}
if (siunta == 'L' || siunta == 'M' || siunta == 'S') {
  console.log('Tikrinam L');
}
console.log('Tikrinam XL');

console.log('-----------------');

switch (siunta) {
  case 'S': console.log('Tikrinam S');
  case 'M': console.log('Tikrinam M');
  case 'L': console.log('Tikrinam L');
  default: console.log('Tikrinam XL');
}

console.log('-----------------');
switch (siunta) {
  case 'S':
    console.log('Tikrinam S');
    break;
  case 'M':
    console.log('Tikrinam M');
    break;
  case 'L':
    console.log('Tikrinam L');
    break;
  default:
    console.log('Tikrinam XL');
    break;
}

console.clear();

const masyvas = ['Bijūnas', 'Jurginas', 'Rožė', 'Tulpė', 'Narcizas'];

for (let i = 0; i < masyvas.length; i++) {
  const gelyte = masyvas[i];
  console.log(gelyte);
}

console.log('-----------------');

for (const gelyte of masyvas) {
  if (gelyte == 'Rožė') {
    continue;
  }
  console.log(gelyte);
}

console.log('-----------------');
//for in gali pereiti per toki objekta
const objektas = {
  darze: 'Bijūnas',
  prie_kelio: 'Jurginas',
  po_langu: 'Rožė',
  sode: 'Tulpė',
  pamerktas: 'Narcizas'
};


for (const gelyte in objektas) {
  if (objektas[gelyte] == 'Rožė') {
    continue;
  }
  console.log(objektas[gelyte]);
}

let m = [];
do {
  m.push(rand(5, 10));
} while (m.length < 5);

console.log(m)

