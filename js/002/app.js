const b1 = 3;
const b2 = 5;
const b3 = 3 + 5;
console.log(b3)

const a1 = document.querySelector('.a1').innerText;
const a2 = document.querySelector('.a2').innerText;

const suma = +a1 + +a2;

const a3 = document.querySelector('.a3');

a3.innerText = suma;

// js prisiima interpretatoriaus vaidmeni

const skaicius = 55;
const stringas = '4a5';

const skaiciusIsStringo1 = Number(stringas);
//labai teisingas
// Number() konvertuoja stringą į number, bet jei stringe yra ne skaičius, tai jis grąžina NaN (not a number)
const skaiciusIsStringo2 = parseInt(stringas);
//specializuotai teisingas
// parseInt() konvertuoja stringą į number, bet jei stringe yra ne skaičius, tai jis grąžina tik iki pirmo ne skaičiaus
const skaiciusIsStringo3 = +stringas;
//sutrumpintas hakas kuris naudojamas dažniausiai realiame kode
// + operatorius konvertuoja stringą į number, bet jei stringe yra ne skaičius, tai jis grąžina NaN (not a number)

console.log(skaiciusIsStringo1, skaiciusIsStringo2, skaiciusIsStringo3);

console.log(Number(stringas))
// Number() konvertuoja stringą į number


console.log(skaicius + stringas);
console.log(+stringas + skaicius);

// pliuso simbolis paverčia stringą kuriame yra skaičiai - numberiu

console.log (6 % 3);

console.log (99 % 0.3);

// % operatorius grąžina liekaną po dalybos


console.log (100 % 40);

const A = 45 + 0.5 * 3 - 2 / 4 + 1;

const B = 3.65124654

console.log(B.toFixed(2));

console.log(A.toFixed(2));
// toFixed() metodas suapvalina skaičių iki n skaitmenų po kablelio
// galutinis rezultatas

let C = 20;

console.log(C++);
console.log(C);

let V1 = 2;

const R1 = V1++ * V1++;

console.log(R1);

let V2 = 4;

/* V2 = V2 + 5; */
V2 += 5; // tai yra tas pats kaip V2 = V2 + 5;


console.log(V2);

let B1 = true;
let B2 = false;

console.log(typeof B1, typeof B2);
// typeof operatorius grąžina tipo pavadinimą

// 0 NaN null undefined false '' - visi šie yra falsy
// visi kiti yra truthy

let tusciasStringas = '';
// loginiai veiksmai
// arba - OR ||
// ir - AND &&
// ne - NOT !



console.log('-----------------------------------');
console.log('true || true', true || true);
console.log('true || false', true || false);
console.log('false || true', false || true);
console.log('false || false', false || false);
console.log('-----------------------------------');
console.log('true && true', true && true);
console.log('true && false', true && false);
console.log('false && true', false && true);
console.log('false && false', false && false);
console.log('-----------------------------------');
console.log('!true', !true);
console.log('!false', !false);
console.log('-----------------------------------');
