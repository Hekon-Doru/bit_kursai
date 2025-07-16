const express = require('express');
const app = express();
const port = 8000;

app.use(express.static('public'));

// router

app.get('/', (req, res) => {
  res.send('Labas serveriau!');
});

app.listen(port, () => {
  console.log(`Klausomės ${port} porto`)
});
