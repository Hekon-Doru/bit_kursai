function fun1(a) { // vardine funkcija
  return a * 7;

};

funrezultatas = fun1(3);
console.log(funrezultatas);

// --------------------

const fun2 = function (a) { //anonimine funkcija
  return a * 7;
};

funrezultatas = fun2(3);
console.log(funrezultatas);

// --------------------

const fun3 = (a) => {
  return a * 7;
};

funrezultatas = fun3(3);
console.log(funrezultatas);


// --------------------
const obuoliai = function () {
  return this.sakos * 10;
}

const obuoliaiRodykle = () => {
  return this.sakos * 10;
}

const medis = {};
medis.sakos = 4;
medis.obuoliai = obuoliai;
medis.obuoliaiRodykle = obuoliaiRodykle;

console.log('Paprasta:', medis.obuoliai());
console.log('Paprasta:', this, medis.obuoliai());
console.log('Rodyklė:', medis.obuoliaiRodykle());
console.log('Rodyklė:', this, medis.obuoliaiRodykle());


// --------------------
// jeigu parametru skaicius yra 1 tai galim praleist () skliaustelius
const fun4 = a => {
  return a * 7;
};

funrezultatas = fun4(3);
console.log(funrezultatas);

// --------------------
//jeigu finkcijos kodo eilut yra 1 galim praleisti garbanotus 
// skliaustelius {}, nereikia rasyti return.
const fun5 = a => a * 7;

funrezultatas = fun5(3);
console.log(funrezultatas);

// --------------------
const fun6 = _ => 'bebras'.repeat(2);

// kintamasis _ neturi jokiu privilegiju 

funrezultatas = fun6();
console.log(funrezultatas);

// mmasyvas

const colors = ['green', 'blue', 'yellow', 'pink', 'black'];
//su ciklu konsoleje atspausdinkite po viena spalva

for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

/* const elemPrint = el => console.log(el); */
/* const elemPrint = function(el, index) {
  console.log(index, el);
}

colors.forEach(elemPrint); */

/* colors.forEach(function(el, index) {
  console.log(index, el);
});
 */

/* colors.forEach((el, index) => console.log(index, el)); */

colors.forEach(el => console.log(el));

const digits = [5, 8, 74, 0, 32, 75, 4];

/* digits.forEach(digits => console.log(digits)); */
/* digits.forEach(digits  => console.log(digits*3)); */
/* digits.forEach(digits  => console.log(digits)); */

/* digits.forEach(digits => {
  if (digits !== 0) {console.log(digits);}
}); */

digits.forEach(digits => digits !== 0 ? console.log(digits) : null);


// rodai kad each digits nera lygus 0 ir tada einam sulyginam reiksmes kad nespausdint
// bet aiskiau su ifu

console.clear();
colors.forEach(el => console.log(el));
/* colors.map(el => console.log(el)); */
//map skirtumas nuo forEach - 
console.log('-------------');
const fe = colors.forEach(el => console.log(el));
console.log(fe);
console.log('-------------');
//forEach, neturi return kaip pati funkcija, map - grazina

//map grazina masyva su 5 undefined
//map ne tik perrenka bet ir nukopijuoja i nauja masyva
/* const mp = colors.map(el => console.log(el)); */
/* const mp = colors.map(el => el); */ // <- kopijuoja masyva
/* const mp = colors.map(el => el.toUpperCase()); */

const mp = colors.map(el => '<li>' + el + '</li>');
console.log(mp);

console.log('-------------');

// su map metodu sukurkite nauja masyva kuriame butu seno masyvo skaiciai padauginti is 8
const d2 = [5, 8, 74, 0, 32, 75, 4];

const d2map = d2.map(el => el * 8);
console.log(d2map);