const express = require('express');
const app = express();
const port = 8000;

app.use(express.static('public'));

// router

app.get('/', (req, res) => {

  const labasx20 = 'Labas '.repeat(20);
  res.send(labasx20);
  /* res.send('Labas serveriau!'); */
});

app.get('/bebras', (req, res) => {
  res.send('labas Bebrai');
});

app.get('/mielas/barsukas', (req, res) => {
  res.send('labas Barsukai');
});

app.get('/spalva/:kintamasis', (req, res) => {
  const spalvosKintamasis = req.params.kintamasis;
  res.send(` <h2> ${spalvosKintamasis.toUpperCase()} </h2>
  <p style="color: ${spalvosKintamasis}"> Parametras gaunamas iš requesto</p>
  `);
});

// 1. einant adresu /plus-desimt/14 turi but atsakymas 24 

app.get('/plus-ten/:getin', (req, res) => {
const sk = req.params.getin;
const sum = parseInt(sk) + 10;
res.send(`<h2> ${sum} </h2>`);
});


// 1. Einant adresu /daugyba/14/2 turi būti atsakymas 28 (14 * 2 = 28) 14 ir 2 yra kintamieji, kurie gali būti bet kokie skaičiai
app.get('/daugyba/:sk1/:sk2', (req, res) => {
  const sk1 = parseInt(req.params.sk1);
  const sk2 = parseInt(req.params.sk2);
  const sum = sk1 * sk2;
  res.send(`<h2> ${sum} </h2>`);
  });


  // /plus-eleven?skaicius=2
app.get('/plus-eleven', (req, res) => {
  const sk1 = parseInt(req.query.skaicius1 || 0);
  const sk2 = parseInt(req.query.skaicius2 || 0);

  res.send(11 + sk1 + sk2 + '');
  });

app.listen(port, () => {
  console.log(`Klausomės ${port} porto`)
});
