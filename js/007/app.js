console.log("Labas, Ūdra");

function rand(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

/* const stringas = 'A'.repeat(rand(1, 11)) + rand(10, 299) + 'A'.repeat(rand(1, 11))


const found = stringas.match(regex); */ // gali nieko nerasti, tada bus NULL

/* console.log(stringas); */

/* if (null === found) {
  console.log('nieko neradau');
} else {
  console.log(+found[0]);
}
 */
const str1 = "Ananasas";
// atspausdinti consoleje visas ne a raides (tiek mazas tiek dideles)
const regex = /[^aA]/gm;
const found = str1.match(regex); // gali nieko nerasti, tada bus NULL

console.log(str1);
console.log(found);

for (let i = 0; i < str1.length; i++) {
  if (str1[i] !== "a" && str1[i] !== "A") console.log(str1[i]);
}

const str2 = "Bananas";
let strBox = "";

for (let i = 0; i < str2.length; i++) {
  if (str2[i].toLowerCase() != "a") {
    strBox = strBox + str2[i];
  }
}


console.log(strBox);
//suskaiciuoti kiek 'a' yra str2 stringe
let skaicius = "";

for (let i = 0; i < str2.length; i++) {
  if (str2[i].toLowerCase() === "a") {
    skaicius++;
  }
}

console.log(skaicius);

// Iš stringo reikia padaryti kitą stringą, 
// kuriame vietoj 'a' raidžių būtų '*'. 
// Padarius tokį stringą jį atspausdinti konsolėje

let strBox2 = "";
let temp = '*';

for (let i = 0; i < str2.length; i++) {
  if (str2[i].toLowerCase() == "a") {
    strBox2 = strBox2 + temp;
  } else {
    strBox2 = strBox2 + str2[i];
  }
}

console.log(strBox2);