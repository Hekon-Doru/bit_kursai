console.log('OOP js 018');
console.log('Helllo little one!');


// Janina kodina
class Cart {

  #max = 14; // Nes taip sugalvojo Antanas. Max'as yra PRIVATUS

  constructor() {
    /* this.max = 10; //Nes taip sugalvojo Antanas. */
    this.count = 0;
  }
  //get'eris yra funkcija visada.
  /* get max() {
    return this.#max;
  } */

  set max(val) {
    console.error(`Keisti ${val}  ali tik Janina.`);
    /* this.#max = val - 50; */
  }
  #toServer() {
    // Žinome. kad serveris krepšelė skaičiuoja kaip max 10
    // Žinome, kad serverį koduoja Antanas - backenderis.
    console.log('Liko įdėti:', this.#max - this.count);
  }

  putToCart(amount) {
    if (amount + this.count > this.#max) {
      console.log(`daugiau nei ${this.#max}. Blogai. Netelpa`);
    } else {
      this.count += amount;
      console.log('Pridėta. Dabar yra: ', this.count);
      this.#toServer();
    }
  }

}


// Ieva prisijungia prie kodo, ji nežino nieko nei apie Janiną, nei Antaną.
// Ieva gavo Janinos kodą ir pradėjo kodint.

const c = new Cart();

/* c.max = 100; */
// Iki Ievos info neateina kad max negali būt daugiau nei 10.
/* console.log(c.max()); */

//su get max pakeičia funkciją į SAVYBĘ
c.max = 100; // čia gaunasi jog nežinant kad get yra galima sujaukti visą protą :D
console.log(c.max);

c.putToCart(5);
c.putToCart(4);
c.putToCart(4);

//1.sukurti klase Color
//2. 

class Corol {

  #color = 'red';

  constructor() {
    this.#fullBody(this.#color);
    const body = document.querySelector('body');
    body.style.backgroundColor = this.#color;
  }

  /*  #randomColor() {
   return '#' + Math.floor(Math.random() * 16777215).toString(16).padEnd(6, '0');
 } */

  #fullBody() {
    const body = document.querySelector('body');
    body.style.width = '100vw';
    body.style.height = '100vh';
    body.style.overflow = 'hidden';
  }

  set bodyColor(c) {
    this.#color = c;
    const body = document.querySelector('body');
    body.style.backgroundColor = this.#color;
  }

}

const color = new Corol();

console.log(color);
color.fullBody(color);
color.bodyColor('skyblue');
