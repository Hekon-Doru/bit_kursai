function rand(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
};


function randomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16).padEnd(6, '0');
}

/* Uždavinį atlikite atskirame html faile.
Visame ekrane atsitiktine tvarka “išmėtykite“ 444 pusiau permatomus 
atsitiktinės spalvos ir atsitiktinio skersmens nuo 44 iki 144 (px) apskritimus. 
Apskritimai turi tolygiai (pagal funkciją rand()) dengti visą ekraną.#fun 
*/


let body = document.querySelector('body');
body.style.display = 'flex';
body.style.flexWrap = 'wrap';
body.style.justifyContent = 'space-evenly';

for (let i = 0; i < 444; i++) {
  let aDim = rand(44, 144);
  let aDiv = document.createElement('div');
  body.appendChild(aDiv);
  aDiv.style.width = aDim + 'px';
  aDiv.style.height = aDim + 'px';
  aDiv.style.borderRadius = '50%';
  aDiv.style.backgroundColor = randomColor() + '80';
  aDiv.style.display = 'flex';
}

