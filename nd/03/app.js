function rand(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
};


function randomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16).padEnd(6, '0');
}

/* rand funkcijos */


const A = [
  'Bebras',
  'Zebras',
  'Vilkas',
  'Lapė',
  'Barsukas',
  'Voverė',
  'Laukinis katinas',
  'Šuo',
  'Naminis katinas',
];

const B = [
  'Kalakutas',
  'Višta',
  'Antis',
  'Žąsis',
  'Ančiasnapis'
];

const C = [
  'Višta',
  'Gaidys',
  'Šernas',
  'Lapė',
  'Vilkas',
  'Šuo dingo',
  'Barsukas',
  'Voverė',
  'Šuo',
  'Naminis katinas',
  'Laukinis katinas',
  'Šuo atsirado',
  'Bebras',
  'Ožys'
];


/* -------------------------------- 1 uzduotis -------------------------------- */
/*Html faile sukurkite ul tagą (tiesiogiai). Į sukurtą tagą, su JS, 
sudėkite li tagus su iš masyvo A nuskaitytais gyvūnais. */
console.log('-----------------------------------')
console.log('uzduotis 1');
console.log('-----------------------------------')

const u1 = document.querySelector('#u1');

const ul1 = document.querySelector('ul');


for (let i = 0; i < A.length; i++) {
  let newLi = document.createElement('li');
  ul1.appendChild(newLi);
  console.log(A[i]);
  newLi.innerText = A[i];
}


/* -------------------------------- 2 uzduotis -------------------------------- */
/*Html faile sukurkite ul tagą (tiesiogiai). 
Į sukurtą tagą, su JS, sudėkite li tagus su iš masyvo A nuskaitytais gyvūnais 
išdėliotais abėcėline tvarka. */
console.log('-----------------------------------')
console.log('uzduotis 2');
console.log('-----------------------------------')

const ul2 = document.querySelector('ul + ul');

A.sort((a, b) => a.localeCompare(b, 'lt'));

for (let i = 0; i < A.length; i++) {
  let newLi = document.createElement('li');
  ul2.appendChild(newLi);
  console.log(A[i]);
  newLi.innerText = A[i];
}


/* -------------------------------- 3 uzduotis -------------------------------- */
/*Html faile sukurkite ul tagą (tiesiogiai). 
Į sukurtą tagą, su JS, sudėkite li tagus su iš masyvų A ir B 
nuskaitytais gyvūnais išdėliotais abėcėline tvarka 
(Rūšiavimas turi būti bendras tarp abiejų masyvų, 
NE kiekvieno atskirai).#pamastykKaip */
console.log('-----------------------------------')
console.log('uzduotis 3');
console.log('-----------------------------------')

const ul3 = document.querySelector('ul + ul + ul');

/* reikia susikurti su map funkcija iš A ir B  masyvo naują masyvą AB */

const AB = [...A, ...B];
AB.sort((a, b) => a.localeCompare(b, 'lt'));

console.log(AB);

for (let i = 0; i < AB.length; i++) {
  let newLi = document.createElement('li');
  ul3.appendChild(newLi);
  console.log(AB[i]);
  newLi.innerText = AB[i];
}

/* console.log(A + A.length);
console.log(B + B.length); */




/* -------------------------------- 4 uzduotis -------------------------------- */
/*Html faile sukurkite section tagą (tiesiogiai).
Į sukurtą tagą, su JS, sudėkite div tagus, 
kurie yra mėlyni apskritimai su centre užrašytais iš masyvo A nuskaitytais gyvūnais. */
console.log('-----------------------------------')
console.log('uzduotis 4');
console.log('-----------------------------------')

const sec1 = document.querySelector('section');
sec1.style.display = 'flex';
sec1.style.flexWrap = 'wrap';

const createDiv = function (text, color, type, ilgis) {
  let newDiv = document.createElement(type);
  sec1.appendChild(newDiv);
  newDiv.style.width = '100px';
  newDiv.style.height = '100px';
  newDiv.style.borderRadius = '50%';
  newDiv.style.backgroundColor = color;
  newDiv.style.display = 'flex';
  newDiv.style.justifyContent = 'center';
  newDiv.style.alignItems = 'center';
  newDiv.style.textAlign = 'center';
  newDiv.style.color = 'white';
  if (ilgis !== undefined) {
    newDiv.innerText = text + ' ' + ilgis;
  } else {
    newDiv.innerText = text;
  }
}

A.forEach(element => {
  createDiv(element, 'blue', 'div');
});


/* -------------------------------- 5 uzduotis -------------------------------- */
/*Html faile sukurkite section tagą (tiesiogiai).
Į sukurtą tagą, su JS, sudėkite div tagus, 
kurie yra raudoni apskritimai su centre centre užrašytais iš masyvo B nuskaitytais gyvūnais
ir tų gyvūnų raidžių skaičiumi.
 */
console.log('-----------------------------------')
console.log('uzduotis 5');
console.log('-----------------------------------')

const sec2 = document.querySelector('section + section');
sec2.style.display = 'flex';
sec2.style.flexWrap = 'wrap';


B.forEach(element => {
  createDiv(element, 'red', 'div', element.length);
});

/* newDiv.style.backgroundColor = 'red'; */
/* -------------------------------- 6 uzduotis -------------------------------- */
/*Html faile sukurkite section tagą (tiesiogiai).
Į sukurtą tagą, su JS, sudėkite div tagus, 
kurie yra žali apskritimai su centre užrašytais gyvūnais,
nuskaityto iš masyvo A. 
Dėkite tik tuos gyvūnus, kurie savo pavadinime turi tik vieną žodį.
 */
console.log('-----------------------------------')
console.log('uzduotis 6');
console.log('-----------------------------------')

A.forEach(element => {
  if (element.trim().split(/\s+/).length !== 2) {
    createDiv(element, 'green');
  }
});

/* -------------------------------- 7 uzduotis -------------------------------- */
/*Html faile sukurkite section tagą (tiesiogiai).
Į sukurtą tagą, su JS, sudėkite span tagus, kurie yra geltoni apskritimai
su centre užrašytais iš masyvo B nuskaitytų gyvūnų pavadinimų raidėm.
Kiekvienas span tagas- atskira raidė. 
(visų gyvūnų visos raidės atskiruose span taguose).#ciklasCikle
 */
console.log('-----------------------------------')
console.log('uzduotis 7');
console.log('-----------------------------------')

regex = /[\w|ąčęėįšųūžĄČĘĖĮŠŲŪŽ]{1}/gm

B.forEach(element => {
  let el = [];
  const found = element.match(regex);
  el.push(found);
  console.log(element);
  console.log(found)
  console.log(element);
  console.log(el);
  el.forEach(element => {
    createDiv(element[0], 'yellow', 'span');
  });
});

/* -------------------------------- 8 uzduotis -------------------------------- */
/*
Html faile sukurkite du ul tagus (tiesiogiai). 
Į  vieną sukurtą tagą, su JS, sudėkite li tagus 
su iš masyvo C nuskaitytais gyvūnais, 
kurių pavadinimas ne ilgesnis kaip 6 raidės, į kitą likusius.
 */
console.log('-----------------------------------')
console.log('uzduotis 8');
console.log('-----------------------------------')

const ul4 = document.querySelector('ul + ul + ul + ul');

const createDiv2 = function (text, type) {
  let add = document.createElement(type);
  ul4.appendChild(add);
  newDiv.innerText = text;
}

regex = /[\w]{6}/gm


C.forEach(element => {
  createDiv(element, 'li');
});

/* 
for (let i = 0; i < C.length; i++) {
  let newLi = document.createElement('li');
  ul4.appendChild(newLi);
  console.log(C[i]);
  newLi.innerText = C[i];
} */
