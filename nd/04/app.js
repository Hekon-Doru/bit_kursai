/* console.log(obj1, obj2, obj1.daug(), obj2.daug(), obj2.keistiKiek(10));

console.log(obj1, obj2, obj1.daug(), obj2.keistiKiek(10), obj2.daug());

console.log(typeof Du, typeof obj1); */





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
    /* return this.akmenuKiekis = this.akmenuKiekis + kiekis; */
    return this.akmenuKiekis += kiekis;
  };
  kiekPririnktaAkmenu() {
    console.log(this.akmenuKiekis);
  }
}

const kibiroObjektas1 = new Kibiras1();
const kibiroObjektas2 = new Kibiras1();
console.log('-----------');
kibiroObjektas1.kiekPririnktaAkmenu();
console.log('-----------');
kibiroObjektas1.pridetiDaugAkmenu(55)
kibiroObjektas1.kiekPririnktaAkmenu();
console.log('-----------');
kibiroObjektas1.pridetiDaugAkmenu(55)
kibiroObjektas1.kiekPririnktaAkmenu();
console.log('-----------');
kibiroObjektas1.prideti1Akmeni();
kibiroObjektas1.kiekPririnktaAkmenu();
console.log('-----------');
kibiroObjektas1.prideti1Akmeni();
kibiroObjektas1.kiekPririnktaAkmenu();
console.log('-----------');
kibiroObjektas1.prideti1Akmeni();
kibiroObjektas1.kiekPririnktaAkmenu();
console.log('-----------');
kibiroObjektas1.prideti1Akmeni();
kibiroObjektas1.kiekPririnktaAkmenu();
console.log('-----------');
kibiroObjektas1.prideti1Akmeni();
kibiroObjektas1.kiekPririnktaAkmenu();
console.log('-----------');
kibiroObjektas1.prideti1Akmeni();
kibiroObjektas1.kiekPririnktaAkmenu();