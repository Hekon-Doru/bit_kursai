console.log('Vytenis V. Kazlas');
function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log('--------------');
console.log('1 užduotis');
console.log('--------------');

/* Vyksta automobilių žiedinės lenktynės.
Automobiliui Nr. 55 liko nuvažiuoti 10 ratų. 
Suprogramuokite for ciklą, kuris imituotų 10 ratų automobilio važiavimą ir kiekviename cikle pateiktų (atspausdintų) kiek ratų dar liko automobiliui nuvažiuoti. Paskutinis skaičius turėtų būti 1. Visas rezultatas turėtų būti toks: 
 10 9 8 7 6 5 4 3 2 1 (skaičiai gali būti atspausdinti stulpeliu).*/

for (let i = 10; i >= 1; i--) {
  console.log(`Nr. 55 liko nuvažiuoti rat8: ${i}`);
}

console.log('--------------');
console.log('2 užduotis');
console.log('--------------');

/* Vyksta automobilių žiedinės lenktynės.
Automobiliui Nr. 55 liko nuvažiuoti 10 ratų.
Kiekvieną ratą automobilis važiuoja skirtingu
nuo 120 iki 220 km/h greičiu.
Suprogramuokite for ciklą, kuris imituotų
10 ratų automobilio važiavimą,
rand() funkcija generuokite atsitiktinį automobilio greitį
o visiems ciklams pasibaigus pateikite bendrą visų 10 ratų vidutinįgreitį.*/

let visasGreitis = 0;

for (let i = 1; i <= 10; i++) {
  const ratoGreitis = rand(120, 220);
  visasGreitis += ratoGreitis;
  console.log(`Nr. 55 važiavo ${i} ratą su greičiu: ${ratoGreitis} km/h`);
}

const vidutinisGreitis = (visasGreitis / 10).toFixed(0);
console.log(`Nr. 55 vidutinis greitis: ${vidutinisGreitis} km/h`);

console.log('--------------');
console.log('3 užduotis');
console.log('--------------');

/* Vyksta automobilių žiedinės lenktynės.
Automobiliui Nr. 55 liko nuvažiuoti 10 ratų.
Jo kuro bake liko 44 litrai kuro.
Kiekviename rate automobilis sunaudoja atsitiktinį kiekį kuro:
nuo 3 iki 6 litrų. Suprogramuokite for ciklą,
kuris imituotų 10 ratų automobilio važiavimą,
o ciklams pasibaigus pateikite išvadą ar automobiliui
užteko kuro įveikti visus 10 ratų. Kurui pasibaigus
ciklą nutraukite anksčiau laiko. 
 */

let kuroLiko = 44;
let kuroSunaudota = 0;

for (let i = 1; i <= 10; i++) {
  const kuroSunaudotaRatui = rand(3, 6);
  kuroLiko -= kuroSunaudotaRatui;
  kuroSunaudota += kuroSunaudotaRatui;

  if (kuroLiko < 0) {
    console.log(`Nr. 55 nebaigė lenktynių, nes kuras baigėsi po ${i} rato.`);
    break;
  }
}

if (kuroLiko >= 0) {
  console.log(`Nr. 55 baigė lenktynes, liko kuro ${kuroLiko}.`);
}

/* Čia gal su do while būtų praprasčiau gal,
nežinojau ar jau reikia naudoti ar prieisim dar, tai palikau if'us. */

console.log('--------------');
console.log('4 užduotis');
console.log('--------------');

/* Vyksta automobilių žiedinės lenktynės.
Automobiliui Nr. 55 liko nuvažiuoti 10 ratų (žiedų).
Kiekviename žiede yra 5 posūkiai,
kuriuose automobilio greitis yra
atsitiktinis dydis nuo 20 iki 120 km/h.

Imituokite tokią situaciją dviem for ciklais
(vienas 10 ratų, kitas 5 posūkiai) ir ciklams pasibaigus
atspausdinkite mažiausią automobilio greitį kažkuriame iš posūkių.*/

let maziausiasGreitis = 120;

for (let i = 1; i <= 10; i++) {
  for (let j = 1; j <= 5; j++) {
    const posukioGreitis = rand(20, 120);
    if (posukioGreitis < maziausiasGreitis) {
      maziausiasGreitis = posukioGreitis;
    }
  }
}

console.log(`Mažiausias automobilio greitis: ${maziausiasGreitis} km/h`);

console.log('--------------');
console.log('5 Bosiux');
console.log('--------------');

/* Dykumoje vyksta lenktynės.
Automobilis Nr. 55 juose dalyvauja.

Kiekviename kilometre
gali atsitikti arba neatsitikti rand(0, 1) tokie trys įvykiai:
netikėtai iššokti - neiišokti ant kelio kengūra,\
vairuotojas gali nespėti - spėti pasukti vairą ir
vairuotojas gali nespėti - spėti paspausti stabdžius.

Imituokite tokią situaciją do while ciklu-
vienas kilometras vienas ciklo prasisukimas.

Cikle rand() funkciją atsitiktinai generuokite visų įvykių tikimybę.
Jeigu viename cikle įvyksta visi nepalankūs įvykiai:
iššoka kengūra,
vairuotojas nespėja pasukti vairo ir nespėja paspausti stabdžių
while ciklą baikite.

Ciklo pabaigoje atspausdinkite kiek kilometų
sugebėjo nuvažiuoti automobilis be avarijos.

*/

let nuvaziuotiKm = 0;
let kengura = 0;
let vairas = 0;
let stabdziai = 0;

do {
  nuvaziuotiKm++;
  kengura = rand(0, 1);
  vairas = rand(0, 1);
  stabdziai = rand(0, 1);

} while (kengura != 1 || vairas != 0 || stabdziai != 0);

console.log(`Automobilis Nr. 55 nuvažiavo ${nuvaziuotiKm} km be avarijos.`);
