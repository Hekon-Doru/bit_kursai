console.log('Vytenis V. Kazlas');

function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const bitGirls = ['Edita', 'Lina', 'Brigita', 'Deimantė', 'Justė'];
const cats = ['Murka', 'Rainius', 'Meilutė', 'Bosas', 'Dičkis'];

console.log('--------------');
console.log('1 užduotis');
console.log('--------------');

/* Prie masyvo bitGirls pradžios (ne galo!) 
pridėkite Nausėdą (po pridėjimo bitGirls turės 6 elementus). */

atsitiktinisAsmuo = 'Nausėda';
bitGirls.unshift(atsitiktinisAsmuo);
console.log(bitGirls);

console.log('--------------');
console.log('2 užduotis');
console.log('--------------');

/* Sukurkite naują masyvą bitCats Pagridu paimkite masyvą cats.
Naujasis masyvas turėtų turėti elementus iš mažų, 
dviejų narių, masyviukų: 
pirmas narys katinuko vardas,
antras - katinuko svoris - atsitiktinės tekstinės reikšmės - “storas” arba “normalus”.
*/

const bitCats = cats.map(cat => {
  let svoris = rand(0, 1) > 0 ? 'storas' : 'normalus';
  return [cat, svoris];
});
console.log(bitCats);

console.log('--------------');
console.log('3 užduotis');
console.log('--------------');

/* bitCats masyve suskaičiuokite kiek yra storų ir normalių katinukų. */
/* 
if (bitCats.length > 0) {
  let storas = 0;
  let normalus = 0;
  
  bitCats.forEach(cat => {
    if (cat[1] === 'storas') {
      storas++;
    } else {
      normalus++;
    }
  });
  
  console.log(`Stori katinukai: ${storas}, normalūs katinukai: ${normalus}`);
} */

const netelpaProDuris = bitCats.filter(cat => cat[1] === 'storas').length;
const telpaProDuris = bitCats.filter(cat => cat[1] === 'normalus').length;
console.log(`Stori katinukai: ${netelpaProDuris}, normalūs katinukai: ${telpaProDuris}`);


console.log('--------------');
console.log('4 užduotis');
console.log('--------------');

/* Išrūšiuokite gautą bitsCats masyvą pagal antrą katinuko vardo raidę, 
abėcėlės tvarka (ne pagal visą vardą, o tik pagal antrą raidę) 
Tokiu būdu katinukas vardu Rainius pagal antrą “a” raidę 
turėtų atsidurti viršuje. */

bitCats.sort((a, b) => {
  return a[0].charAt(1).localeCompare(b[0].charAt(1));
});

console.log(bitCats);

console.log('--------------');
console.log('5 užduotis');
console.log('--------------');

/* (BOSO lygis) 
Iš masyvų bitGirls ir bitCats padarykite masyvą happyCats,
kurio elementai būtų masyvai iš mergaitės vardo ir katinuko vardo. 

Nausėdai katinuko neduokit (nes neužteks)
ir vietoj katinuko Nausėdai priskirkite stringą “Barsukas”. */

const happyCats = [];

bitGirls.forEach(element => {
  if (element === 'Nausėda') {
    happyCats.push([element, 'Barsukas']);
  } else {
    happyCats.push([element, bitCats[bitCats.length - 1][0]]);
    bitCats.pop();
  }
});

console.log(happyCats);

