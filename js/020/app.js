console.log('labas statikai');

class AuksoPuodas {

  static suma = 20200;

  static kiekLikoPinigu() {
    console.log(`Aukso puode liko: ${this.suma}`); // statiniam metode this rodo i klase, del to nereikia 'constructor' part'o statiniam metode this yra class'e;
    //console.log(this.vardas);
    // cia yra nesamone, nes tai yra objekto vardas o objekto vardas yra ne vardas :D
  }

  constructor(vardas) {
    this.vardas = vardas;
  }


  isleisti(kiek) {
    console.log(`Leidzia pinigus ${this.vardas}`)
    if (this.constructor.suma < kiek) {
      console.log('baigesi pinigai');
      return;
    } this.constructor.suma -= kiek;
    console.log(`liko ${this.constructor.suma}`);
  }
};


AuksoPuodas.kiekLikoPinigu();
const jonas = new AuksoPuodas('jonas');
const jeronimas = new AuksoPuodas('jeronimas');
const brigita = new AuksoPuodas('brigita');

jonas.isleisti(15000);
brigita.isleisti(20000);
brigita.isleisti(20000);

console.clear();

const  mapas = new Map();
mapas.set('aukstis', '50');
mapas.set('turis', 20);

mapas.set('aukstis', '77');
mapas.set({a: 1}, 'a1 objektas 1');
mapas.set({a: 1}, 'a1 objektas 2');

console.log(mapas.has('turis'));
console.log(mapas.get('turis'));
console.log(mapas);

mapas.set(_ => _, _ => _);
mapas.set(AuksoPuodas, '');

mapas.forEach((value,key) => {console.log(value,key)});

console.clear();

const setas = new Set();

setas.add('bebras');
setas.add('barsukas');
setas.add('bebraS');
setas.add({b:1});
setas.add({b:1});

console.log(mapas.get(AuksoPuodas));
console.log(setas);