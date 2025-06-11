console.log('mygtukai');

const funClick1 = function () {
  console.log('Mygtuką 1 kazkas paspaudė');
}


//1.
const btn1 = document.querySelector('#btn1');

//2.
/* btn1.addEventListener */

//3
btn1.addEventListener('click', funClick1);

// Paspausdus mygtuką h2 turi nusidazyti kazkokia kita spalva

/* const funClick2 = function() {
if (bobr.style.color !== 'red'){
  bobr.style.color = 'red';
} else {
  bobr.style.color = 'blue';
}
} */
/* const funClick2 = function () {
  bobr.style.color = bobr.style.color === 'red' ? 'black' : 'red';
} */


const btn2 = document.querySelector('#btn2');
const bobr = document.querySelector('h2');

btn2.addEventListener('click', function () {
  bobr.style.color = bobr.style.color === 'red' ? 'black' : 'red';
});

btn2.addEventListener('mouseover', function (e) {
  e.target.style.color = 'skyBlue';
});

btn2.addEventListener('mouseleave', function () {
  btn2.style.color = 'black';
});

const lrt = document.querySelector('a');

lrt.addEventListener('click', function (e) {
  e.preventDefault();
  console.log('tu paspaudei ant LRT linko');
});


const vaikas = document.querySelector('.vaikas');
const tevas = document.querySelector('.tevas');


vaikas.addEventListener('click', function (e) {
  /* tevas.style.backgroundColor = 'darkblue'; */
  e.stopPropagation(); //sustabdo pletimasi
  e.target.style.backgroundColor = 'darkblue';
});
tevas.addEventListener('click', function (e) {
  /* vaikas.style.backgroundColor = 'orangered'; */
  e.target.style.backgroundColor = 'orangered';
});

const btn3 = document.querySelector('#btn3');

btn3.addEventListener('click', function (e) {
  const input = document.querySelector('input');
  const reiksme = +input.value;
  console.log(reiksme);
})