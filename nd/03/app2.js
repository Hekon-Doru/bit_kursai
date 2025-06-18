function rand(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
};


function randomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16).padEnd(6, '0');
}

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



/*

Uždavinį atlikite atskirame html faile. 

Visame ekrane atsitiktine tvarka “išmėtykite“
iš masyvo C nuskaitytus gyvūnus.

Kad būtų daugiau gyvūnų, 
tą patį masyvą nuskaitykite 10 kartų. 

Gyvūnų pavadinimų raidžių dydis- atsitiktinis nuo 10px iki 100px.
Gyvūnų pavadinimų raidžių spalva atsitiktinė. 

Pavadinimai turi tolygiai (pagal funkciją rand()) dengti visą ekraną

(funkcijos duotos 02. DOM ir Cycles (one & four edition)).#fun

*/


let body = document.querySelector('body');
body.style.position = 'relative';

/* let D = [...C]* 10; */
/* .repeat(10); */

/* const ratukas = function(times) {
  return '...C + '.repeat(times);
}

let D = [...ratukas(10)]; */

for (let i = 0; i < C.length; i++) {
  C.forEach(el => {
    let tSize = rand(10, 100);
    let aDiv = document.createElement('div');
    body.appendChild(aDiv);
    aDiv.innerText = el;
    aDiv.style.color = randomColor();
    aDiv.style.fontSize = tSize + 'pt';
    aDiv.style.position = 'absolute';
    aDiv.style.top = rand(0, 100) + 'vh';
    aDiv.style.left = rand(0, 100) + 'vw';
  })
};

