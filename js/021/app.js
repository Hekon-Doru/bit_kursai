console.log('-------------------------------');
console.log('Ciklai ir loopai');
console.log('-------------------------------');

function rand(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

/* 

For
while
do while

specialus ir keistas ciklas 
switch

kai reikia pereiti per struktura
for in
for of

ciklu valdymas
continue
break
*/

for (let i = 0; i < 7; i++) {
  const random = rand(10, 99);

  if (random > 70) {
    continue;
  }
  console.log(`Nr.${i + 1} - ${random}`);
}

console.log('------------------------');

/* for (let i = 0; i < 7; i++) {
  const random = rand(10, 99);

  if (random > 70) {
    break;
  }
  console.log(`Nr.${i + 1} - ${random}`);
}

for (let i = 0; i < 3; i++) {
  const HS = rand(0, 1) ? 'H' : 'S';
  console.log(HS);
  /* if (HS == 'H') {
    break;
    } neteisingai*/

console.clear();


console.clear();

let HS1;
let HS2;
let saugiklis = 100;

do {

  if (--saugiklis == 0) {
    console.log('BUM');
    break;
  }

  HS1 = rand(0, 1) ? 'H' : 'S';
  HS2 = rand(0, 1) ? 'H' : 'S';
  console.log(HS1, HS2);

} while (HS1 != 'H' || HS2 != 'H');

/* 

== <-> !=
> <-> <=
< <-> >=
|| <-> &&

*/

console.clear();
/* 
let HS3;
let kiekis = 3;

for (let i = 0; i < kiekis; i++) {
  
  do {
    if (--saugiklis == 0) {
      console.log('BUM');
      break;
    }
    
    HS3 = rand(0, 1) ? 'H' : 'S';
    console.log(HS3);
        
  } while (HS3 != 'H');
  
} */
let kiekis2 = 0;

  
      do {
    if (--saugiklis == 0) {
      console.log('BUM');
      break;
    }
    
    const HS4 = rand(0, 1) ? 'H' : 'S';
    console.log(HS4);
    if (HS4 == 'H'){
      kiekis2++;
    } else 
      kiekis2 = 0;
    
        
  } while (kiekis2 != 3);


