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

console.log('-------------------------------');
console.log('Kibirai');
console.log('-------------------------------');

class Kibiras1 {

  static visiAkemnys = 0;

  constructor() {
    this.akmenuKiekis = 0;
  }

  prideti1Akmeni() {
    this.akmenuKiekis++;
    this.constructor.visiAkemnys++;
  }
  pridetiDaugAkmenu(kiekis) {
    /* return this.akmenuKiekis = this.akmenuKiekis + kiekis; */
    this.akmenuKiekis += kiekis;
    this.constructor.visiAkemnys += kiekis;
  };
  kiekPririnktaAkmenu() {
    console.log(`Kibire yra ${this.akmenuKiekis}`);
  }

  akmenuSkVisuoseKibiruose() {
    console.log(`Visuose kibiruose yra ${this.constructor.visiAkemnys} akmenys.`)
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
kibiroObjektas1.akmenuSkVisuoseKibiruose();
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
    this.centukai = 0;
    this.kupiuros = 0;
  }

  ideti(kiekis) {
    if (kiekis <= 2) {
      this.metaliniaiPinigai += kiekis;
      this.centukai++;
      console.log('Pridėta metalinių pinigų:', kiekis)

    } else {
      this.popieriniaiPinigai += kiekis;
      this.kupiuros++;
      console.log('Pridėta popierinių pinigų:', kiekis)
    }
  }
  skaiciuoti() {
    console.log('Piniginėje yra metalinių pinigų:', this.metaliniaiPinigai)
    console.log('Piniginėje yra popierinių pinigų:', this.popieriniaiPinigai)
    console.log('Bendrai piniginėje yra:', this.popieriniaiPinigai + this.metaliniaiPinigai);
  }

  monetos() {
    console.log(`Piniginėje yra ${this.centukai} monetos.`);
  }

  banknotai() {
    console.log(`Piniginėje yra ${this.kupiuros} kupiuros.`);
  }
}

const manoPinigai = new Pinigine();

manoPinigai.ideti(5)
manoPinigai.ideti(20)
manoPinigai.ideti(2)
manoPinigai.skaiciuoti();
manoPinigai.monetos();

/* console.clear(); */
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

  static visiKeleiviai = 0;

  static bendrasKeleiviuSkaicius(k) {
    this.constructor.visiKeleiviai += k;
    console.log(`Bendras keleivių skaičius yra: ${this.constructor.visiKeleiviai}`)
  }

  constructor(numeris) {
    this.kSk = 0;
    this.numeris = numeris;
  }

  ilipa(k) {
    this.kSk += k;
    this.constructor.visiKeleiviai += this.kSk;
    console.log(`Stoteleje į ${this.numeris} troleibusą įlipo ${k} keleiviai.`);
  }

  // sitam geriau naudoti this.kSk = Math.max(0, this.kSk - k);
  islipa(k) {
    if (k > this.kSk) {
      console.log(`Stoteleje iš ${this.numeris} troleibuso išlipo vairuotojas ir kontrolieriai, išėjo namo ir negrįžo.`)
      this.constructor.visiKeleiviai -= Math.max(0, k);
      this.kSk = 0;
    }
    this.kSk -= k;
    this.constructor.visiKeleiviai -= this.kSk;
    console.log(`Stoteleje iš ${this.numeris} troleibuso išlipo ${k} keleiviai.`);
  }

  vaziuoja() {
    if (this.kSk <= 0) {
      console.log('Autobusas nevažiuoja nes nėra keleivių');
    } else {
      console.log('Autobusu važiuoja:', this.kSk, '', 'keleiviai')
    }
  }

  keleiviuSkaiciusVisuoseTroleibusuose() {
    console.log(`Šiuo metu visuose troleibusuose yra ${this.constructor.visiKeleiviai} keleivių.`);
  }


}

const myBus1 = new Troleibusas(16);
const myBus2 = new Troleibusas(7);
const myBus3 = new Troleibusas(25);

myBus1.ilipa(1);
myBus2.ilipa(1);
myBus1.islipa(30);
myBus3.ilipa(1);
myBus1.vaziuoja();
myBus2.vaziuoja();
myBus3.vaziuoja();

myBus1.keleiviuSkaiciusVisuoseTroleibusuose();

console.log('-------------------------------');
console.log('Pirkiniai');
console.log('-------------------------------');

class PirkiniuKrepselis {

  constructor() {
    this.turinys = new Map();
  }

  ideti(preke, kiekis) {
    if (this.turinys.has(preke)) {
      this.turinys.set(preke, this.turinys, get(preke) + kiekis);
    }
    this.turinys.set(preke, kiekis);
  }

  /* idetiSureli(kiekis){
    this.turinys.set('Sureliai:', kiekis);
    console.log(`Į krepšelį idėta ${kiekis} sūreliai`);
  }
  idetiPieno(kiekis){
    this.turinys.set('Pienas:', kiekis);
    console.log(`Į krepšelį idėta ${kiekis} pienas`);
  }
  idetiDuonos(kiekis){
    this.turinys.set('Duonos:', kiekis);
    console.log(`Į krepšelį idėta ${kiekis} duona`);
  } */

  krepselioTurinys() {
    this.turinys.forEach((kiek, kas) => console.log(`Turime ${kas} ${kiek} vienetu.`))
  }
}

const norfa = new PirkiniuKrepselis();
norfa.ideti('Duonos', 2);
norfa.ideti('Surelis', 5);
norfa.krepselioTurinys();

/*Sukurti klasę Stikline. 
Sukurti savybes turis ir kiekis. 
Turis turi būti pasirenkamas objekto kūrimo metu.
Parašyti metodą ipilti(kiekis), kuris keistų savybę kiekis. 
Jeigu stiklinės tūris yra mažesnis nei pilamas kiekis-
 kiekis netelpa ir būna lygus tūriui. Parašyti metodą ispilti(),
 kuris grąžiną kiekį. Pilant išpilamas visas kiekis, 
 tas kas netelpa, nuteka per stalo viršų.  
 Sukurti metodą stiklinejeYra(), kuris į konsolę atspausdintų 
 kiek stiklinėje yra skysčio. Sukurti tris stiklinės objektus 
 su tūriais: 200, 150, 100. Didžiausią pripilti pilną ir tada 
 ją ispilti į mažesnę stiklinę, o mažesnę į dar mažesnę.
*/

console.log('-------------------------------');
console.log('Stikline');
console.log('-------------------------------');

class Stikline {

  #turis;

  constructor(turis) {
    this.#turis = turis;
    this.kiekis = 0;
  }

  ipilti(kiekis) {
    this.kiekis = this.kiekis + kiekis;
    this.kiekis = Math.min(this.#turis, this.kiekis);
    return this;
  }
  ispilti() {
    const kiekis = this.kiekis;
    this.kiekis = 0;
    return kiekis;
  }
}

const s200 = new Stikline(200);
const s150 = new Stikline(150);
const s100 = new Stikline(100);

s100.ipilti(s150.ipilti(s200.ipilti(180).ispilti()).ispilti());
console.log(s200, s150, s100);

console.clear();

console.log('-------------------------------');
console.log('Grybaujam');
console.log('-------------------------------');


function rand(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

const trueFalse = function () {

  let sk = rand(0, 1);
  /* console.log(sk);
  console.log('-------------------------------'); */
  if (sk == '1') {
    /* console.log('true'); */
    return true;
  } else {
    /* console.log('false'); */
    return false;
  }
}

trueFalse();

class Grybas {

  constructor() {
    this.valgomas = trueFalse() ? 'Valgomas' : 'Nevalgomas';
    this.sukirmijes = trueFalse() ? 'Sveikas' : 'Sukirmijes';
    this.svoris = rand(5, 45);
  }

}

class Krepsys {

  constructor() {
    this.dydis = 500;
    this.svoris = 0;
  }

  deti(svoris) {
    this.svoris = this.svoris + svoris;
    this.svoris = Math.min(this.dydis, this.svoris);
    return this;
  }
}

const krepsi = new Krepsys();

do {
  const randamGryba = new Grybas();
  console.log(randamGryba);
  if (randamGryba.valgomas == 'Valgomas') {
    console.log('Radom valgomą,')
    if (randamGryba.sukirmijes == 'Sveikas'){
      krepsi.svoris += randamGryba.svoris;
      console.log('ir sveiką grybą,')
      console.log('tai dedam į krepšą')
      console.log('-------------------------------');
    }
      } else {
    console.log('Ieškom grybų');
    console.log('-------------------------------');
  }  
  
} while (krepsi.svoris < krepsi.dydis)
  console.log(krepsi);


/*  while (stasys < 200) {
 const uzdarbis = rand(20, 80);
 stasys += uzdarbis;
 console.log(stasys);
} */
/* 
  const randamGryba = new Grybas();
  console.log(randamGryba); */