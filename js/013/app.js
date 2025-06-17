console.log('labas bebrai');


fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(json => {
    console.log(json);
    printUsers(json);
  });

const printUsers = users => {
  const ul = document.querySelector('ul');
  users.forEach(user => {
    // const li = document.createElement('li');
    // li.textContent = `${user.name} (${user.email}) from ${user.address.city}`;
    // ul.appendChild(li);
    const template = document.querySelector('#user-template');
    const clone = template.content.cloneNode(true);
    clone.querySelector('.name').textContent = user.name;
    clone.querySelector('.email').textContent = user.email;
    clone.querySelector('.city').textContent = user.address.city;
    ul.appendChild(clone);
  });
}

const cart = [
  { id: 877, title: 'Pieniškos dešros', price: 2.45, count: 2 },
  { id: 8974, title: 'Sviestukas sintetinis', price: 3.20, count: 1 },
  { id: 16548, title: 'Batonas studentų', price: 1.22, count: 1 },
  { id: 974, title: 'Bulvės 4kl', price: 0.88, count: 2 },
  { id: 7841, title: 'Žąsinas užšaldytas', price: 8.99, count: 1 },
  { id: 785, title: 'Šašlykas marinuotas', price: 4.88, count: 1 },
  { id: 7854, title: 'Zuikis netikras', price: 5.22, count: 1 },
  { id: 1223, title: 'Ąsotis kačių pienui laikytt', price: 45.99, count: 1 }
];

const noDesra = cart.filter(product => product.id != 877);
console.log(noDesra);

const radBaton = cart.find(product => product.id == 16548);
console.log(radBaton);

let cartCount = 0;

cart.forEach(p => cartCount = cartCount + p.count);

console.log(cartCount);
const cartCount2 = cart.reduce((accumulator, product) => accumulator + product.count, 0);
//accumulator - musu susigalvotas kintamasis kur dedam tarpines sumavimo reiksmes
// 0 yra pradine akumulaitoriaus reiksme
//imam primo prod count, dedam su akumuliatorium, tada grazinam, ir ta suma tampa nauju akumuliatorium
// skaiciuojama visa bendra count.

console.log(cartCount2);

cart.sort((a, b) => a.price - b.price);//sukeitimas minusas, nesukeitimas pliusas

const cartSort = cart.toSorted((a, b) => a.price - b.price);
console.log(cart);


const cartByTitle = cart.toSorted((a, b) => {
  if (a.title > b.title) {
    return 1;
  }
  if (a.title < b.title) {
    return -1;
  }
}
);
console.log(cartByTitle);

const cartByTitleLocal = cart.toSorted((a, b) => a.title.localeCompare(b.title, 'lt'));

console.log(cartByTitleLocal);


console.clear()

fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => response.json())
  .then(json => {
    console.log(json);
    console.log(json.filter(el => el.completed));
    console.log(json.filter(el => el.id === 7));
    console.log(json.sort((a, b) => a.title.localeCompare(b.title, 'lt')));
  });



