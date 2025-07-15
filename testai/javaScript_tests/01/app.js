console.log('-------------------------------');
console.log('Vytenis V. Kazlas');
console.log('-------------------------------');

// --------------------------------------- //

function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// --------------------------------------- //

console.log('-------------------------------');
console.log('Kauliukai');
console.log('-------------------------------');

// Programiškai ridenkite du žaidimo kauliukus- 
// sugeneruokite du atsitiktinius skaičius nuo 1 iki 6 
// Jeigu kauliukų suma didesnė nei 8 jūs laimėjote, 
// priešingu atveju pralošėte. 
// Išveskite atsakymą, kuriame būtų abiejų kauliukų reikšmės 
// ir išvada laimėjote ar pralošėte.

let kA = rand(1, 6);
let kB = rand(1, 6);

let rez = kA + kB;

if (rez >= 8) {
  console.log(`Išmesti kauliukai atsivertė ties ${kA} ir ${kB} - Jūs laimėjote!`);
} else {
  console.log(`Išmesti kauliukai atsivertė ties ${kA} ir ${kB} - Jūs pralaimėjote.`);
};

// Gyveno du katinukai, Pilkis ir Murklys. 
// Jų svoriai kilogramais buvo atsitiktiniai dydžiai nuo 3 iki 6. 
// Parašyti programą, kuri išvestų katinukų svorius ir apskaičiuotų, 
// kuris katinukas yra lengvesnis. 
// Atsakymas turi būti katinukų vardai su jų svoriais ir 
// lengvesnio katinuko vardas. 
// Jeigu katinukai sveria vienodai, 
// vietoj katinuko vardo parašykite,
//  kad “katinukų svoriai vienodi”.

console.log('-------------------------------');
console.log('Katinukai');
console.log('-------------------------------');

let pilkioSvoris = rand(3, 6);
let murkioSvoris = rand(3, 6);

if (pilkioSvoris < murkioSvoris) {
  console.log(`Pilkis sveria: ${pilkioSvoris}, Murkis sveria: ${murkioSvoris}. Šį kart Murkis sunkesnis.`);
} else if (pilkioSvoris > murkioSvoris) {
  console.log(`Pilkis sveria: ${pilkioSvoris}, Murkis sveria: ${murkioSvoris}. Šį kart Pilkis sunkesnis.`);
} else {
  console.log(`Pilkis sveria: ${pilkioSvoris}, Murkis sveria: ${murkioSvoris}. Šį kart katinukų svoris lygus.`);
}

console.log('-------------------------------');
console.log('Valtys');
console.log('-------------------------------');

// Nojus pasiruošė potvyniui ir nusipirko dvi valtis.
// Vienoje telpa 15 katinukų,
// kitoje 15 karvių (katinukus galima sodinti tik į katinukų valtis,
// o karves tik į karvių, maišyti negalima)
// Prasidėjus liūčiai pas Nojų atėjo atsitiktinis skaičius
// nuo 0 iki 30 katinukų ir toks pats atsitiktinis skaičius karvių.
// Išveskite atėjusių katinukų ir karvių skaičių ir ar
// Nojus galės juos sutalpinti į valtis.
// Jeigu netelpa tik katinukai arba tik karvės vistiek išveskite “Netelpa”. Kas konkrečiai netelpa išvedinėti nereikia. “Telpa” išveskite tik tuo atveju jeigu ir katinukai ir karvės telpa.

let katinuValtiesTalpa = 15;
let karviuValtiesTalpa = 15;
let atejoKatinu = rand(0, 30);
let atejoKarviu = rand(0, 30);

console.log(`Atejo karviu: ${atejoKarviu}. Atejo katinu ${atejoKatinu}.`);

if (atejoKarviu > karviuValtiesTalpa || atejoKatinu > katinuValtiesTalpa) {
  console.log(`Nieks netelpa į valtį.`);
} else { 
  console.log(`Visi sutilpo.`);

} 

// Antanas nusipirko naują butą ir pinigų jam liko nedaug.
// Dabar jis niekaip negali apsispręsti ką pirmiausiai pirkti:
// televizorių, skalbimo mašiną ar šaldytuvą. 
// Todėl nusprendžia ridenti kauliuką 
// (atsitiktinis skaičius nuo 1 iki 6) ir 
// jeigu iškris 1 arba 5 pirkti televizorių, 
// jeigu 3 arba 4 pirkti skalbimo mašiną ir 
// jeigu 2 arba 6 - šaldytuvą.
// Padėkite Antanui apsispręsti. 
// Ridenkite kauliuką ir parašykite atsakymą kokį daiktą jam pirkti.

console.log('-------------------------------');
console.log('Antanas');
console.log('-------------------------------');

let kC = rand(1, 6);

if (kC === 1 || kC === 5) {
  console.log(`Antanai pirk teliką!`);
} else if (kC === 3 || kC === 4) {
  console.log(`Antanai čiupk skalbenkę!`);
} else {
  console.log(`Antanai šaldytuvas tai su nuolaida!`);
}

console.log('-------------------------------');
console.log('Bosas');
console.log('-------------------------------');

//(BOSO lygis) 
// Sugeneruokite tris atsitiktinius skaičius nuo 1 iki 7 
// ir įrašykite juos į tris kintamuosius.
// Kintamuosius su skaičiais atspausdinkite nuo 
// mažiausio iki didžiausio
// (galima naudoti tik if, else operatorius, jokių masyvų ir rūšiavimų).
// Pavyzdžiui: sugeneravus 4, 2, 4 juos reikia 
// atspausdinti tokia tvarka: 2 4 4;

let sk1 = rand(1, 7);
let sk2 = rand(1, 7);
let sk3 = rand(1, 7);

console.log('-------------------------------');
console.log(` Sugeneruoti skaičiai : ${sk1}, ${sk2}, ${sk3}`);
console.log('-------------------------------');

if (sk1 <= sk2 && sk2 <= sk3) {
  console.log(`${sk1}, ${sk2}, ${sk3}`);
} else if (sk1 <= sk3 && sk3 <= sk2) {
  console.log(`${sk1}, ${sk3}, ${sk2}`);
} else if (sk2 <= sk1 && sk1 <= sk3) {
  console.log(`${sk2}, ${sk1}, ${sk3}`);
} else if (sk2 <= sk3 && sk3 <= sk1) {
  console.log(`${sk2}, ${sk3}, ${sk1}`);
} else if (sk3 <= sk1 && sk1 <= sk2) {
  console.log(`${sk3}, ${sk1}, ${sk2}`);
} else if (sk3 <= sk2 && sk2 <= sk1) {
  console.log(`${sk3}, ${sk2}, ${sk1}`);
}