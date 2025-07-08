
function rand(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

console.log('-------------------------------');
console.log('Basic Js Cycles');
console.log('-------------------------------');

/* Sukurkite tris kintamuosius ir priskirkite jiems skirtingus sveikus skaičius iš intervalo 5…25;
Paskaičiuokite jų sumą ir priskirkite ją kintamajam. Pasinaudokite console.log atspauzdinkite sumos kintamąjį;
Sudėkite skaičius į stringo tipo kintamąjį ir jį atspauszdinkite pasinaudodami console.log;
Sudėkite skaičius į stringo tipo kintamąją padarant tarp skaičių tarpus ir jį atspauszdinkite pasinaudodami console.log;
Sudėkite skaičius į stringo tipo kintamąją padarant tarp skaičių tarpus ir gale pridedėkite trijų skaičių sumą, paskaičiuotą A dalyje. 
Atspausdinkite gautą stringo tipo kintąmąjį pasinaudodami console.log; */

// 1

let A = rand(5, 25);
let B = rand(5, 25);
let C = rand(5, 25);

let sum = A + B + C;
console.log(sum);

let string = `${A} + ${B} + ${C} = ${sum}`;
console.log(string);

// 2
console.log('-------------------------------');

/* Sukurkite vieną kintamąjį, 
jam priskirkite skaičių (iš intervalo 5…10), 
kurį sugeneruoja funkcija rand(5, 10) 
ir jį atspauszdinkite pasinaudojus console.log;
*/
let D = rand(5, 10);
console.log(D);


// 3
console.log('-------------------------------');

let labas = 'Labas';
for (let i = 0; i < 5; i++) {
  console.log(labas);
}

// 4 
console.log('-------------------------------');
for (let i = 0; i < 7; i++) {
  console.log(D);
}

//5 
console.log('-------------------------------');
for (let i = 0; i < D; i++) {
  console.log(D);
}

//6
console.log('-------------------------------');
for (let i = 0; i < D; i++) {
  if (D > 7) {
    console.log(D);
  }
}

//7 
console.log('-------------------------------');
let E = 0;
let stringas = '';
for (let i = 0; i <= 5; i++) {
  let F = rand(10, 20);
  E += F;
  stringas += `${F} `;
  console.log(E);
}
stringas += `${E} `;
console.log(stringas);

console.clear();
//8 
console.log('-------------------------------');

let generatedNum = 0;
let generatedNumSum = 0;
let cycleCount = 0;
let skippedNumCount = 0;
let skippedNumSum = 0;
let lygNumCount = 0;
let nelygNumCount = 0;
let cycleCount2 = 0;

/* if (generatedNum < 12) {
  for (let i = 0; i < cycleCount; i++) {
    console.log(D);
  }
} */
do {

  while (generatedNum < 12) {
    generatedNum = rand(10, 25);
    console.log(generatedNum);

    if (generatedNum < 18) {
      generatedNumSum += generatedNum;
    } else {
      skippedNumSum += generatedNum;
      skippedNumCount++;
    }

    if (generatedNum % 2 === 0) {
      lygNumCount++;
    } else {
      nelygNumCount++;
    }
    
    cycleCount++
    //B 
    //Suskaičiuokite kiek iteracijų padarėte ir jų kiekį
    // atspauzdinkite pasinaudodami console.log už
    // ciklo ribų jam pasibaigus;
  }
  cycleCount2++
  console.log(`-------------------`)
  console.log(`Cikle buvo lyginių skaičių: ${lygNumCount}. Nelyginių: ${nelygNumCount}.`);
  console.log(`Ciklas kartotas: ${cycleCount}. Bendra suma: ${generatedNumSum}.`);
  console.log(`Praleista skaičių: ${skippedNumCount}. Bendra praleistų skaičių suma: ${skippedNumSum}.`);
} while (cycleCount2 <= 20)
console.log(`Antras ciklas kartotas: ${cycleCount2}.`);


/*Ciklą iš dalies B kartokite tol, 
kol to ciklo iteracijų kiekis bus didesnis nei 20 (vieno ciklo). 
Paskaičiuokite kiek pakartojimų buvo atlikta
ir rezultatą atspauzdinkite pabaigoje. */

//9
console.log('-------------------------------');
/*Ciklo viduje generuokite atsitiktinius skaičius funkcija rand(), 
kurie yra iš intervalo 5-10. Ciklą kartokite tol, 
kol ciklo viduje bus sugeneruotas skaičius 5;

Ciklo viduje paleiskite dar vieną ciklą kurį kartokite tiek kartų,
koks skaičius buvo sugeneruotas.
Paskaičiuokite kiek iteracijų padarė išorinis ciklas 
ir kiek bendrai iteracijų padarė vidinis ciklas. 
Rezultatus atspauzdinkite pasinaudodami 
console.log už ciklo ribų jam pasibaigus;

Padarykite taip, kad išorinis ciklas pasibaigtų
kai 5 yra sugeneruojamas ne pirmą, 
bet trečią kartą ir paskaičiuokite iteracijas analogiškai kaip A dalyje;

Padarykite analogiškai kaip B dalyje, 
bet tik kai 5 yra sugeneruojami 3 kartus iš eilės;
*/
let cycleVidinis = 0;
let cycleIsorinis = 0;

do {
  sk = rand(5, 10);
  for (let i = 0; i < sk; i++) {
    console.log(sk);
    cycleVidinis++
    console.log(`Vidinio ciklo counteris: ${cycleVidinis}`);
    console.log('-------------------------------');
  }
  if (cycleVidinis == 3) {
    break
  } else cycleIsorinis++
  console.log(`Išorinio ciklo counteris: ${cycleIsorinis}`);
  console.log('-------------------------------');

} while (sk != 5);
console.log(`Vidinis ciklas kartotas kartų: ${cycleVidinis}`);
console.log(`Išorinis ciklas kartotas kartų: ${cycleIsorinis}`);

/* 
let kiekis2 = 0;


do {


  const HS4 = rand(0, 1) ? 'H' : 'S';
  console.log(HS4);
  if (HS4 == 'H') {
    kiekis2++;
  } else
    kiekis2 = 0;


} while (kiekis2 != 3); */
