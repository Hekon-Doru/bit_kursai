console.log('labas ibjektai');

const preke1 = {
  title: 'Plastikinės sąmanos',
  price: 45.54,
  amount: 5,
  vat: function () {
    return this.price * this.amount / 100 * 21;
  },
  total: function () {
    return (this.price * this.amount + this.vat()).toFixed(2);
  }
}


const preke2 = {
  title: 'Guminiai robotai',
  price: 145.54,
  amount: 3,
  vat: function () {
    return this.price * this.amount / 100 * 21;
  },
  total: function () {
    return (this.price * this.amount + this.vat()).toFixed(2);
  }
}

// ------------------------------ OBJEKTINIS PROGRAMAVIMAS ---------------------------- //

class BebroPreke {

  constructor(pavadinimas, kaina, kiekis) {
    this.title = pavadinimas;
    this.price = kaina;
    this.amount = kiekis;
    this.cat = 'Bebro prekės';
  }
  vat() {
    return this.price * this.amount / 100 * 21;
  }
  total() {
    return (this.price * this.amount + this.vat()).toFixed(2);
  }

}

const preke3 = new BebroPreke('Guminis batonas', 0.5, 60);
const preke4 = new BebroPreke('Jute Bag', 0.5, 160);


console.log(preke1, preke1.total());
console.log(preke2, preke2.total());
console.log(preke3, preke3.total());
console.log(preke4, preke4.total());


// ------------ task 01
// sukurti classe Du ir su juo sukurt objekta

class Du {
  constructor(turi) {
    this.kiek = 2;
    this.turi = turi;
    
  }
  daug() { //getter kuris kažką gražina
    return this.kiek * this.turi;
  }
  keistiKiek(k){ //setter kuris paima
    if (k <= 10) {
      this.kiek = k;
    } 
    return this;
  }
}

const obj1 = new Du(53);
const obj2 = new Du(33);

/* console.log(obj1, obj2, obj1.daug(), obj2.daug(), obj2.keistiKiek(10));

console.log(obj1, obj2, obj1.daug(), obj2.keistiKiek(10), obj2.daug());

console.log(typeof Du, typeof obj1); */

console.log(obj2.keistiKiek(70).kiek); //chaining


