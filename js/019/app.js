console.log('hello, world...');


class Miskas {
  constructor(kiekis, miskoPlotas) {
    this.kiekis = kiekis;
    this.miskoPlotas = miskoPlotas;
  }

  vienamGyvunuiTenktantisPlotas() {
    return (this.miskoPlotas / this.kiekis).toFixed(1);
  }

  bendra() {
    console.log('as miskas');
  }

}


class Bebrai extends Miskas {

  constructor(kiekis, miskoPlotas) {
    super(kiekis, miskoPlotas); // tėvinio konstruktoriaus iškvietimas.
  }

  uztvankuKiekis() {
    return Math.floor(this.kiekis / 11); //APVALINAM I GRINDIS
  }

  bendra() {
    console.log('mes bebrai');
  }
}

//barsukai
class Barsukai extends Miskas {


  urvuKiekis() {
    return (this.miskoPlotas / this.kiekis * 5).toFixed(1);
  }


}

const bebrai = new Bebrai(68, 1587);
const barsukai = new Barsukai(158, 5698);

bebrai.bendra();
barsukai.bendra();

console.log(bebrai.vienamGyvunuiTenktantisPlotas(), bebrai.uztvankuKiekis());
console.log(barsukai.vienamGyvunuiTenktantisPlotas(), barsukai.urvuKiekis());

console.clear();

//Janina

class Matematika {

  suma(a, b) {
    return a + b;
  }

  daugyba(a, b) {
    return a * b;
  }

}

//Tomas 

class Skirtumas extends Matematika {
  skirtumas(a, b) { //prisideda papildoma koda
    return a - b;
  }

  suma(a, b) {
    return Math.abs(a) + Math.abs(b); //math abs naikina neigiama sk
  }

}

const m = new Skirtumas();

console.log(m.suma(5, 11), m.daugyba(3, 7), m.skirtumas(3, 7));


//Jaronimas 

class SuDalyba extends Skirtumas {

  dalyba(a, b) {
    return a / b;
  }

}

const d = new SuDalyba();


console.log(d.suma(5, 11), d.daugyba(3, 7), d.skirtumas(3, 7), d.dalyba(7, 8));

console.clear();


// janininos kodas 

class Matematika2 {

#janinosSk = 11;

  constructor(a, b) {
    this.a = a;
    this.b = b;
    this.janinosSk2 = 15;
  }


  suma() {
    return this.a + this.b;
  }

  daugyba() {
    return this.a * this.b;
  }

}

const m2 = new Matematika2(5, -11);

console.log(m2.suma(), m2.daugyba());

//Simona 

class Matematika3 extends Matematika2 {
  
  constructor(a, b, c) {
    super(a, b);
    this.c = c;
    console.log(this.janinosSk2);
  }
  
  
  skirtumas() {
    return this.a - this.b - this.c;
  }
  
}

const m3 = new Matematika3(50, 20, 3);

console.log(m3.suma(), m3.daugyba(), m3.skirtumas());

const str = new String('Bebras');

const abc = 'asdasgdsgasdgasdasdfsadf';

console.log(str.toUpperCase());

String.prototype.addStarToEnd = function() {
  return this + '*';
};

console.log(abc.addStarToEnd())