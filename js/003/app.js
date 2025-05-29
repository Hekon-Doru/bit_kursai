console.log('_________________');
console.log('Welcome');
console.log('_________________');

const string1 = 'Bebras';
const string2 = ' ';
const string3 = ''; //false..

/* const log1 = !string1; */
// stringas 1 bus pakeistas 5 loginini kintamaji (true/false)
const log1 = !!string1;
// antras ! pakeicia atgal 
const log2 = !!string2;
const log3 = !!string3;

console.log(log1, log2, log3);

const skaicius4 = 55;
const skaicius5 = -4.55;
const skaicius6 = 0; // tik nulis bus false, visada, visi skaiciai yra true

const log4 = !!skaicius4;
const log5 = !!skaicius5;
const log6 = !!skaicius6;

console.log(log4, log5, log6);

/*
> daugiau
< mažiau
>= daugiau arba lygu
<= mažiau arba lygu
!= nelygu
== lygu
!== adekvatu? griežtai nelygu verte ir tipas lyginami
=== neadekvatu? griežtai lygu verte ir tipas lyginami 

*/

if (5 || 0) {
  //branch true
  console.log('Oooo taip');
}
else {
  //branch false
  console.log('Fuck nooo');
};

// || grąžina pirmą true reikšmę
// && grąžina pirmą false reikšmę
const A = 5 && 6


// jei ||or tai tada 5 jei and - 6

console.log(A);

console.log('-----------------------------------');
console.log('true || true', true || true); // prieina prie 5 nes atsakymas yra true ir nebetikrina
console.log('true || false', true || false);
console.log('false || true', false || true);
console.log('false || false', false || false);
console.log('-----------------------------------');
console.log('true && true', true && true); // 5 yra true, bet jei yra antras true tada bendras rezultatas yra true,
console.log('true && false', true && false);// antras rezas yra 6 ir rezultatas yra 6
console.log('false && true', false && true); // jei pirmas butu 0 tai tuomet bus false ir jis stabdo ir duoda rez 0
console.log('false && false', false && false);
console.log('-----------------------------------');
console.log('!true', !true);
console.log('!false', !false);
console.log('-----------------------------------');

console.log('null NaN');

// skliausteliai yra aukščiausio lygio

const B = 9;
//sita naudoti prie spalvos
if (B > 9) {
  console.log('b daugiau uz 9');
} else if (B == 9) {
  console.log('b lygu 9');
}
else {
  console.log('b maziau uz 9');
}

/* Ternary - priskiriamoji sąlyga */

const C = 1;

let atsakymas;
if (C == 1) {
  atsakymas = 'C yra 1';
} else {
  atsakymas = 'C nera 1';
};
const atsakymas2 = C == 1 ? 'C yra vienas' : 'C nera vienas';// ternaris

console.log(atsakymas2);

//cia galima bus daryt su color
// {} skliausteliai vadinamas - blokas

console.log(atsakymas);

let kintamasis = 'virsus';

/* {
  {
    console.log(kintamasis);
    // jei kintamasis bandomas atspausdinti 
    // anksciau nei jam priskirta reiksme bus eroras
    let kintamasis = 'vidus';
  }
  console.log(kintamasis);
} */

// tiek let tiek const yra blokinis kintamasis
// jis deklaruojamas bloke bet uz jo ribu nematomas,
// jei jis patenka i kita bloka tai jis yra matomas

const s = 'red';

const turiu = s == 'green' ? 'zalias' : s == 'red' ? 'raudonas' : 'kitas';

console.log(turiu);