console.log('labas ibjektai');


// ------------------------------ OBJEKTINIS PROGRAMAVIMAS ---------------------------- //

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
  keistiKiek(k) { //setter kuris paima
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



//Sukurti klasę Kibiras1. 
// Konstruktoriuje sukurti savybę akmenuKiekis  kuri lygi 0. 
// Parašyti šiai klasei metodus, pridedančius akmenis: 
// prideti1Akmeni() 
// pridetiDaugAkmenu(kiekis) 
// ir metodą išvedantį akmenų kiekį į konsolę-
//  kiekPririnktaAkmenu(). 
// Sukurti vieną kibiro objektą ir 
// pademonstruoti akmenų rinkimą į kibirą ir rezultatų išvedimą.

class Kibiras1 {
  constructor() {
    this.akmenuKiekis = 0;
  }

  prideti1Akmeni() {
 return this.akmenuKiekis++;
  }
  pridetiDaugAkmenu(kiekis){
    return this.akmenuKiekis = this.akmenuKiekis + kiekis;
  };
  kiekPririnktaAkmenu() {
    console.log(this.akmenuKiekis);
  }
}

const kibiroObjektas1 = new Kibiras1();
kibiroObjektas1.kiekPririnktaAkmenu();
kibiroObjektas1.pridetiDaugAkmenu(99)
kibiroObjektas1.kiekPririnktaAkmenu();
kibiroObjektas1.prideti1Akmeni();
kibiroObjektas1.kiekPririnktaAkmenu();