const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql')
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static('public'));

const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'forest'
})

con.connect(err => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log(`Connected to the database!`);
});

// Router

app.get('/all-trees', (req, res) => {


  // SELECT * FROM trees
  // SELECT column1, column2
  // FROM table-name

  const sql = `
  SELECT id, name, height, type 
  FROM trees
  `;

  con.query(sql, (err, result) => {
    if (err) throw err;
    res.json(result);
  });

/* 
const labasX20 = 'Labas';

res.send(labasX20); */
});


app.listen(port, () => {
  console.log(`Klausomės porto Nr.: ${port}`);
});