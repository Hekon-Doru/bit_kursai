const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const md5 = require('md5');
const fs = require('node:fs');
const port = 80

app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.static('public'));

app.use((req, res, next) => {
  console.log(req.originalUrl);
  console.log('Labas aš midwitas');

  const token = req.cookies.session || '';
  if (token) {
    let users = fs.readFileSync('./users.json', 'utf8');
    users = JSON.parse(users);
    const user = users.find(u => u.token === token);
    if (user) {
      req.user = {
        name: user.name,
        email: user.email
      }
    } else {
      req.user = null;
    }
  } else {
    req.user = null;
  }

  const url = req.originalUrl;

  if (url === '/profile' && !req.user) {
    res.status(401).send('Not authorised');
    return;
  }
  next();
})



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

  setTimeout( _ => {

    res.clearCookie('kartai'); // isštrina kooki uzdedant praeita laika
    res.redirect('http://localhost:80/');

  }, 5000);
});

app.get('/login', (req, res) => {

  if (req.user) {
    res.redirect('http://localhost/profile');
    return;
  }

  const file = fs.readFileSync('./templates/login.html', 'utf8');
  res.send(file);
});


app.get('/signup', (req, res) => {

  if (req.user) {
    res.redirect('http://localhost/');
    return;
  }

  const file = fs.readFileSync('./templates/signup.html', 'utf8');
  res.send(file);
});

app.get('/profile', (req, res) => {

 const userName = req.user.name;

 let file = fs.readFileSync('./templates/profile.html', 'utf8');
 file = file.replace('{{userName}}', userName)
  res.send(file);

});
// POST

app.post('/logout', (req, res) => {

  res.clearCookie('session');
  res.json({
    success: true
  })

  const file = fs.readFileSync('./templates/login.html', 'utf8');
  res.send(file);
});

app.post('/login', (req, res) => {

  const email = req.body.email;
  const psw = md5(req.body.psw);

  console.log(email.value);

  let users = fs.readFileSync('./users.json', 'utf8');
  users = JSON.parse(users);

  const user = users.find(u => u.email === email && u.psw === psw);

  if (!user) {
    res.json({
      success: false,
      message: 'User email or password invalid'
    })
  } else {

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

  }



});

app.post('/signup', (req, res) => {

  const name = req.body.name;
  const email = req.body.email;
  const psw = md5(req.body.psw);

  console.log(email.value, name);

  let users = fs.readFileSync('./users.json', 'utf8');
  users = JSON.parse(users);

  const newUser = {
    name: name,
    email: email,
    psw: psw,
    token: "",
  }

  const exists = users.find(u => u.email === newUser.email);

  if (name === undefined && name === null) {
    res.json({
      success: false,
      message: 'Neivestas vartotojo slapyvardis',
    });
  } else if (email === undefined && email === null) {
    res.json({
      success: false,
      message: 'Neivestas elektroninis paštas',
    });
  }

  if (!exists) {
    users.push(newUser);
    fs.writeFileSync('./users.json', JSON.stringify(users, null, 2));
    res.json({
      success: true,
      message: `Vartotojas pridėtas`,
    });
  } else {
    res.json({
      success: false,
      message: 'Toks vartotojas jau egzistuoja',
    });
  }




  const token = md5(Math.random() + 'SALT 6548921345'); //pseudo atsitiktinis stringas

  user.token = token;
  users = JSON.stringify(users);

  fs.writeFileSync('./users.json', users);

  res.cookie('session', token);


});





app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
