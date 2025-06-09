console.log('Have fun!');

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