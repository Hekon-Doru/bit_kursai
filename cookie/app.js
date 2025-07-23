const express = require('express')
const app = express()
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const port = 80
const md5 = require('md5');
const fs = require('node:fs');

app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.static('public'));

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

app.get('/reset', (req, res) => {

  setTimeout(_ => {

    res.clearCookie('kartai'); // isštrina kooki uzdedant praeita laika
    res.redirect('http://localhost:80/');

  }, 5000);
})

app.post('/login', (req, res) => {

  const email = req.body.email;
  const psw = md5(req.body.psw);

  let users = fs.readFileSync('./users.json', 'utf8');
  users = JSON.parse(users);

  const user = users.fund(u => u.email === email && u.psw === pws);

  if (!user) {
    res.json({
      success: false,
      message: 'User email or password invalid'
    })
  }

  const token = md5(Math.random() + 'SALT 6548921345'); //pseudo atsitiktinis stringas

  user.token = token;
  users = JSON.stringify(users);

  fs.writeFileSync('./users.json', users);

  res.cookie('session', token);

  res.json({
    success: true,
    message: 'Welcome',
    name: user.name
  });

});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
