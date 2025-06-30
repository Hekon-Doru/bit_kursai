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
  pridetiDaugAkmenu(kiekis) {
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


/*Sukurti klasę Pinigine. 
Konstruktoriuje sukurti dvi savybes 
popieriniaiPinigai ir metaliniaiPinigai. 
Parašyti metodą ideti(kiekis), 
kuris prideda pinigus į piniginę. 
Jeigu kiekis nedidesnis už 2, 
tai prideda prie metaliniaiPinigai, jeigu kitaip-
prie popieriniaiPinigai. 
Parašykite metodą skaiciuoti(), 
kuris suskaičiuotų ir išvestų į konsolę popieriniaiPinigai 
ir metaliniaiPinigai sumą. Sukurti klasės objektą ir 
pademonstruoti veikimą. Nesvarbu kokios popierinės
kupiūros ir metalinės monetos egzistuoja realiame pasaulyje. */

class Pinigine {
  constructor() {
    this.popieriniaiPinigai = 0;
    this.metaliniaiPinigai = 0;
  }

  ideti(kiekis) {
    if (kiekis <= 2) {
      this.metaliniaiPinigai += kiekis;
      console.log('Pridėta metalinių pinigų:', kiekis)
      
    } else {
      this.popieriniaiPinigai += kiekis;
      console.log('Pridėta popierinių pinigų:', kiekis)
    }
  }
  skaiciuoti() {
    console.log('Piniginėje yra metalinių pinigų:', this.metaliniaiPinigai)
    console.log('Piniginėje yra popierinių pinigų:', this.popieriniaiPinigai)
    console.log('Bendrai piniginėje yra:', this.popieriniaiPinigai + this.metaliniaiPinigai);
  }
}

const manoPinigai = new Pinigine();

manoPinigai.ideti(5)
manoPinigai.ideti(20)
manoPinigai.ideti(2)
manoPinigai.skaiciuoti();

/* Sukurti klasę Troleibusas. 
Konstruktoriuje sukurti savybę keleiviuSkaicius kuri yra lygi 0. 

Parašyti du metodus: ilipa(keleiviuSkaicius) ir islipa(keleiviuSkaicius). 
O taip pat parašyti metoda vaziuoja(), 
kuris į konsolę išvestų troleibusu važiuojančių keleivių skaičių. 

Atkreipkite dėmesį, kad troleibusu važiuoti neigiamas keleivių skaičius negali. */

console.log('-------------------------------');
console.log('Autobusas');
console.log('-------------------------------');

class Troleibusas {
  constructor(){
    this.kSk = 0;
  }

  ilipa(k){
    this.kSk += k;
    console.log('Stoteleje ilipo:', k, '', 'keleiviai');
  }
  

  // sitam geriau naudoti this.kSk = Math.max(0, this.kSk - k);
  islipa(k) {
    if (k > this.kSk){
      console.log('Stotelėje išlipo visi keleiviai, vairuotojas ir kontrolieriai, išėjo namo ir negrįžo.')
      this.kSk = 0;
    }
    this.kSk -= k;
    console.log('Stoteleje išlipo:', k, '', 'keleiviai');
  }

  vaziuoja() {
    if (this.kSk <= 0){
      console.log('Autobusas nevažiuoja nes nėra keleivių');
    } else {
      console.log('Autobusu važiuoja:', this.kSk, '', 'keleiviai')
    }
  }
  
}

const myBus = new Troleibusas();

myBus.ilipa(5);
myBus.islipa(6);
myBus.vaziuoja();

/* Sukurti metodą
keleiviuSkaiciusVisuoseTroleibusuose(),
kuris rodytų bendrą keleivių skaičių visuose Troleibusas objektuose.
Bendram kelevių skaičiaus skaičiavimui sukurkite statinį metodą 
bendrasKeleiviuSkaicius(keleiviuSkaicius), 
kuris pridėtų arba atimtų keleivius iš statinės savybės 
visiKeleiviai (kurioje yra įrašytas bendras keleivių skaičius). 
Taip pat atitinkamai modifikuokite metodus ilipa(keleiviuSkaicius)
ir islipa(keleiviuSkaicius).*/