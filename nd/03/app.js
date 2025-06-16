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

const createDiv = function(text) {
  let newDiv = document.createElement('div');
  sec1.appendChild(newDiv);
  newDiv.innerText = text;
  newDiv.style.width = '100px';
  newDiv.style.height = '100px';
  newDiv.style.borderRadius = '50%';
  newDiv.style.backgroundColor = 'blue';
  newDiv.style.display = 'flex';
  newDiv.style.justifyContent = 'center';
  newDiv.style.alignItems = 'center';
  newDiv.style.color = 'white';
}

A.forEach(element => {
  createDiv(element);
});

