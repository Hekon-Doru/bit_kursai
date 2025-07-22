const express = require('express')
const app = express()
const cookieParser = require('cookie-parser');
const port = 80

app.use(cookieParser());

app.get('/', (req, res) => {

  let counter;

  const minute = 60 * 1000;
  const hour = 60 * 60 * 1000;
  const day = 24 * 60 * 60 * 1000;

  if (req.cookies.kartai) {
    counter = parseInt(req.cookies.kartai);
  } else {
    counter = 0;
  }

  counter++;

  res.cookie('kartai', counter, { maxAge: minute }); // irasome kuki

  res.send(`
    Hello ${counter} Cookie!
    <a href="http://localhost:80/reset/"> trinti </a>
    `);
})

app.get('/reset', (req,res) => {
  res.clearCookie('kartai'); // isštrina kooki uzdedant praeita laika

  res.redirect('http://localhost:80/');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
