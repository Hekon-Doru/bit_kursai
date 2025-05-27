console.log("Labas pasauli!");
// This is a simple JavaScript file that logs a message to the console

console.log(87 + 13);
// This will log the result of the addition to the console
console.log('s' - 'a');

// visi skaiciai yra vadinami "number" tipo
// visi tekstai yra vadinami "string" tipo
// visi loginiai (true/false) yra vadinami "boolean" tipo

var manoKintamasis = 17;

var manoKintamasis2 = 3;
// manoKintamasis yra kintamasis, kuris gali būti bet kokio tipo

console.log(manoKintamasis * manoKintamasis2);

// var nebenaudoja placiai bet gali naudoti dviem atvejais
// var gali naudoti automatines kodo apdirbimo programos
// var gali naudoti programeris kuris supranta kaip veikia var nes zino kad jo butent reikia

// vietoj var galima naudoti let ir const
let manoKintamasis3 = 5;
// hoistingas yra JavaScript funkcionalumas, kuris leidzia naudoti kintamuosius pries juos paskelbiant
// var yra hoistinamas, tai reiskia kad jis gali buti naudojamas pries jo paskelbima
// o let ir const yra nehoistinami ir aiskiai suprantami zmogui
// let yra kintamasis, kuris gali keisti savo verte
// const yra kintamasis, kuris negali keisti savo vertes
const manoKintamasis4 = 10;

// kintamojo vardas negali prasideti nuo skaiciaus
// kintamojo vardas negali tureti tarpu ir specialiu simboliu
// kintamojo vardas gali tureti tik raides, skaicius ir _
// kintamojo vardas gali tureti lietuviskus simbolius, bet tai yra bloga praktika
// kintamojo vardas turi buti prasmingas ir atitikti jo turini

// dar vienas kintamasis yra objektas
// objektas yra sudarytas is raktu ir reikšmių porų
// objektas yra panašus į žodyną, kur raktas yra žodis, o reikšmė yra apibrėžimas
// objektas gali turėti bet kokio tipo reikšmes, įskaitant kitus objektus, masyvus ir funkcijas
// jis prasideda su { ir baigiasi su }

let medis = {};

medis.tipas = "liepa";
medis.aukstis = 24;
medis.matavimoVienetai = "m";
medis.amzius = 5;
medis.amzius.matavimas = "metai";

console.log(medis);

console.log(document);
// document yra objektas, kuris atstovauja HTML dokumentą

console.log(document.querySelector("h1"));
// querySelector yra funkcija, kuri grąžina pirmą elementą, atitinkantį CSS selektorių

// noredami kad js matytu visa html dokumenta galime naudoti defer arba kelti js faila po html dokumentu

const manoH1 = document.querySelector("h1");

manoH1.style.color = 'red';
manoH1.style.fontSize = '50px';

console.log(manoH1);
// viengubas kabutes naudojam js
// dvigubas kabutes naudojam html


let zveriukai1 = document.querySelector("p");

zveriukai1.style.color = 'blue';
zveriukai1.style.fontSize = '30px';

console.log(zveriukai1);

let zveriukai2 = document.querySelector("p:nth-of-type(2)");
zveriukai2.style.fontSize = '20px';
zveriukai2.style.color = 'green';

const p1 = document.querySelector("p");
const p2 = document.querySelector("p + p");

p1.style.color = 'purple';
p2.style.color = 'orange';

/* const allP = document.querySelectorAll("p");


console.log(allP);

allP.forEach(el => el.style.color = 'pink'); */
// querySelectorAll grąžina visus elementus, atitinkančius CSS selektorių

//jquery yra legendine biblioteka, bet jau dabar nebeaktuali, nes tai yra praeities technologija
// jquery yra panašus į querySelector, bet turi daugiau funkcijų ir yra lengviau naudojamas
const mano = "višta";
const p3 = document.querySelector("p:nth-of-type(3)");

// innerText pakeičia teksto turinį, o innerHTML pakeičia HTML turinį

p3.innerHTML =
`
<span class='zveriukas'>
    Me
        <b>š</b>
    ka ${mano}
</span>
`;
// dvigubos kabutės naudojamos HTML, o viengubos kabutės naudojamos JavaScript
// norint visur naudoti dvigubas kabutes, galima naudoti backtick (``) ženklus
// backtick ženklai leidžia naudoti kintamuosius ir daugiaspalvį tekstą
// arba \ - ženklą, kad pabėgti nuo kabučių

