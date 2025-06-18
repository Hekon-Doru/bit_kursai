console.log('labas parduotuve');

const products = [
  {
    id: 456,
    title: 'Plastikinės ekologiškos samanos',
    price: 12.45,
    image: 'http://127.0.0.1:5500/js/cart/assets/01.jpg',
    max: 10
  },
  {
    id: 789,
    title: 'Maži guminiai robotai',
    price: 100.45,
    image: 'http://127.0.0.1:5500/js/cart/assets/02.jpg',
    max: 100
  },
  {
    id: 101112,
    title: 'Dideli guminiai robotai',
    price: 545.45,
    image: 'http://127.0.0.1:5500/js/cart/assets/03.jpg',
    max: 28
  },
  {
    id: 131415,
    title: 'Metaliniai vinys',
    price: 4.45,
    image: 'http://127.0.0.1:5500/js/cart/assets/04.jpg',
    max: 105
  },
  {
    id: 161718,
    title: 'Plastikiniai maišeliai',
    price: 0.45,
    image: 'http://127.0.0.1:5500/js/cart/assets/05.jpg',
    max: 7
  },
  {
    id: 192021,
    title: 'Džiutiniai maišeliai',
    price: 1.45,
    image: 'http://127.0.0.1:5500/js/cart/assets/06.jpg',
    max: 11
  },
  {
    id: 222324,
    title: 'Kotas metalinėms lentoms',
    price: 2.45,
    image: 'http://127.0.0.1:5500/js/cart/assets/07.jpg',
    max: 103
  },
  {
    id: 252627,
    title: 'Plastikiniai maišeliai su užtrauktuku',
    price: 3.45,
    image: 'http://127.0.0.1:5500/js/cart/assets/08.jpg',
    max: 33
  }
];

const renderProducts = _ => {
  const productsHtmlBin = document.querySelector('[data-products]');
  const productTemplate = document.querySelector('[data-product-template]');
  products.forEach(product => {
    const clone = productTemplate.content.cloneNode(true);
    console.log(clone);
    clone.querySelector('[data-title]').textContent = product.title;
    clone.querySelector('[data-image]').setAttribute('src', product.image);
    clone.querySelector('[data-price]').textContent = product.price;
    clone.querySelector('[data-add-amount]').setAttribute('max', product.max);
    clone.querySelector('[data-add-button]').dataset.id = product.id; // prideda tagui atributa kuris yra data-id ="45"
    productsHtmlBin.appendChild(clone);
  })
}

const initShop = _ => {
  renderProducts();
}

if (document.querySelector('[data-shop]')) {
  initShop();
}
