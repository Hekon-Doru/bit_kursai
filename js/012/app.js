console.log('hello, Json');

function rand(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
};


// JSON JavaScript Object Notation
/* API - applicaton prototypyng integration */
/* REST - Represantational State Transfer */

const obj = [
  { a: 2 },
  { a: 2 },
  { a: [4, 5] },
];

console.log(obj, typeof obj);

const objString = JSON.stringify(obj);

console.log(objString, typeof objString);

const objBack = JSON.parse(objString);

console.log(objBack, typeof objBack);

console.clear();

/* fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json()) // kai gaunam ats, paverciam objektu1
  .then(json => {
    console.log(json);
    printTitles(json);
  }) */// atspausdinam consoleje

console.log('kodas po fetcho');

const printTitles = obj => {
  const ul = document.querySelector('ul');

  obj.forEach(p => {
    const li = document.createElement('li');
    li.innerText = p.title;
    ul.appendChild(li);
  });
} // kas atsitiks kai pareis kodas

/* fetch('https://in3.dev/inv/')
  .then(response => response.json()) // kai gaunam ats, paverciam objektu1
  .then(json => {
    console.log(json);
  }) */// atspausdinam consoleje

console.clear();

const cart = [
  { id: 875, title: 'Pieniškos dešros', price: 2.45, count: 2 },
  { id: 8654, title: 'Sviestukas sintetinis', price: 3.20, count: 1 },
  { id: 86546, title: 'Batonas studentų', price: 1.22, count: 1 },
  { id: 875, title: 'Bulvės 4kl', price: 0.58, count: 2 },
];

/* prie kiekvieno produkto pridėti savybę total
ir joje paskaičiuoti atitinkamo produkto bendrą sumą */


/* const cartPlus1 = cart.map(unit => unit.id === 8654 ? ({...unit, count: unit.count + 1 }) : unit); */

const cartSum = cart.map(unit => ({ ...unit, total: unit.price * unit.count }));
console.log(cartSum);

const newProduct = { id: 7892, title: 'Morkos beveik plautos', price: 0.35, count: 1 };
cart.unshift(newProduct); //unshift yra tas pats kas push'as tiek kad pradzion deda

console.log(cart);

const batonas = cart.find(cart => cart.title == 'Batonas studentų');

console.log(batonas);

const newProduct2 = { id: 875, title: 'Bulvės 4kl', price: 0.88, count: 2 };
const newProduct3 = { id: 5665, title: 'Bulvės 4kl', price: 0.98, count: 2 };

const deti = rand(0, 1) ? newProduct2 : newProduct3;

// prideti produkta i krepseli

/* const batonas = cart.find(cart => cart.title == 'Batonas studentų'); */
/* const bulbes = cart.find(cart =>  unit.id == deti.id ? ({...unit, count: unit.count + deti.count }) : cart.push(deti)); */
/* console.log(bulbes); */

const cartProduct = cart.find(cart => cart.id == deti.id);

if (cartProduct) {
  cartProduct.count = cartProduct.count + deti.count;
} else {
  cart.push(deti);
}

console.log(cart);