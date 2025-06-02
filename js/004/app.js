console.log('NSO');

// const nso = {}; tuscias objektas

const nso = {
  aliensCount: 4, // jei yra rasoma objeto viduje rasom : vietoj lygybes ir vietoj ; rasom , 
  starSystem: 'Gama Epsilon 4587-888'
};

nso.speed = 50;
nso.speedType = 'km/s';

console.log(nso.speed + ' ' + nso.speedType);

console.log(nso);

// Sukurti objekta ne, kuris turi tureti savybes 
// vardui, pavardei, metams ir svoriui
// Tada naudokite objektą ir konsolėje atspausdinkite:
// "Vardenis pavardenis gimė prieš 40 metų ir užaugo iki 50 svorio"

const me = {
  age: 50,
  name: 'Vardenis',
  surname: 'Pavardenis',
  dateOfBirth: 40,
  weight: 50,
};

me.weightAfterTenYears = ((me.weight / me.age) * 10 + me.weight);

console.log(me.name + ' ' + me.surname + ' gimė prieš ' + me.dateOfBirth + ' ir užaugo iki ' + me.weight + ' svorio');
console.log(`${me.name} ${me.surname} gimė prieš ${me.dateOfBirth} ir užaugo iki ${me.weight} svorio`);

// i objekta me prideti savybe kurioje butu paskaiciuotas svoris po 10metu

/* console.log((me.weight / me.age) * 10); */
console.log(me.weightAfterTenYears);

let A = 5;
let B = A; //by value

A = A + 2;

console.log(A, B);

let C = {
  sk: 5,
};

let D = C; //by refference (objektam tiesiog suteikiami vardai)

C.sk = C.sk + 2;
D.sk = D.sk + 2;

console.log(C, D);
console.log(C === D);

const o1 = { sk: 5 }
const o2 = { sk: 5 }

const o3 = o2;

console.log(o1 === o2);
console.log(o3 === o2);

/* By value
string
number
boolean 

By refference
object */

const barsukas = document.querySelector('h1');
const barsukas2 = document.querySelector('h1 + h1');

console.log(barsukas);
console.log(barsukas2);

const namas = {
  stogas: 'skardinis',
  kambariai: {
    virtuve: 'didelė',
    svetaine: 'dar didesnė',
  }
};

console.log(namas.stogas, namas.kambariai.virtuve);

namas.durys = 'medinės';

console.log(namas);

namas.kambariai.miegamasis = 'Gigantiškas';

console.log(namas?.langai?.pirmas);

const noriuPaziuret = 'miegamasis';

console.log(namas.kambariai[noriuPaziuret]); //tikrina savybe 