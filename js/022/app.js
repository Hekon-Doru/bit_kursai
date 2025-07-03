console.log('-------------------------------');
console.log('Ciklai ir loopai');
console.log('-------------------------------');

function rand(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

// do while nuo 1 iki daug
// while nuo 0 iki daug

// Stastka vairuoja BOLT is nori  pirkt meškerę už 200 Eur
// per naktį uždirba nuo 20 iki 80 Eur.

let stasys = 0;

do {
  const uzdarbis = rand(20, 80);
  stasys += uzdarbis;
  console.log(stasys);

} while (stasys < 200);

console.clear();
// turi mociute ir siandien stasio gimtadienis.

stasys = 0;

const mociute = rand(50, 300);

stasys = mociute;

console.log(stasys, 'po gimtadienio');

while (stasys < 200) {
  const uzdarbis = rand(20, 80);
  stasys += uzdarbis;
  console.log(stasys);
}