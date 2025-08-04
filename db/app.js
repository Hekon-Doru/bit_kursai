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
});

con.connect(err => {
  if (err) throw err;
  console.log('Connected!');
});

app.get('/all-trees', (req, res) => {

  const sortBy = req.query.sortBy;

  let sql;

  console.log(`List sorted by: ${sortBy}`);

  if (sortBy === 'name') {
    sql = `
      SELECT id, name, height, type
      FROM trees
      ORDER BY name
    `;
  } else if (sortBy === 'height') {
    sql = `
      SELECT id, name, height, type
      FROM trees
      ORDER BY height
    `;
  } else if (sortBy === 'type') {
    sql = `
      SELECT id, name, height, type
      FROM trees
      ORDER BY type
    `;
  } else if (sortBy === undefined) {
    sql = `
      SELECT id, name, height, type
      FROM trees
      ORDER BY id
    `;
  }

  con.query(sql, (err, result) => {
    if (err) throw err;
    res.json(result);
  });

});


app.get('/all-clients', (req, res) => {
  /* 
    const sortBy = req.query.sortBy;
  
    let sql; */

  /*  |
  SELECT column_name(s)
  FROM table1
  INNER JOIN table2
  ON table1.column_name = table2.column_name;
  */

  const sql = `
  SELECT c.id, name, p.id AS pid, number, client_id
  FROM clients AS c
  INNER JOIN phones AS p
  ON c.id = p.client_id;
  `;

  con.query(sql, (err, result) => {
    if (err) throw err;
    res.json(result);
  });

});

app.get('/all-clients-left', (req, res) => {
  /* 
    const sortBy = req.query.sortBy;
  
    let sql; */

  /*  |
  SELECT column_name(s)
  FROM table1
  INNER JOIN table2
  ON table1.column_name = table2.column_name;
  */

  const sql = `
  SELECT c.id, name, p.id AS pid, number, client_id
  FROM clients AS c
  LEFT JOIN phones AS p
  ON c.id = p.client_id;
  `;

  con.query(sql, (err, result) => {
    if (err) throw err;
    res.json(result);
  });

});

app.get('/all-clients-right', (req, res) => {

  const sql = `
  SELECT c.id, name, p.id AS pid, number, client_id
  FROM clients AS c
  RIGHT JOIN phones AS p
  ON c.id = p.client_id;
  `;

  con.query(sql, (err, result) => {
    if (err) throw err;
    res.json(result);
  });

});


app.post('/tree', (req, res) => {

  const name = req.body.name;
  const type = req.body.type;
  const height = req.body.height;

  console.log(name, type, height);

  // INSERT INTO table_name (column1, column2, column3, ...)
  // VALUES (value1, value2, value3, ...);

  const sql = `
    INSERT INTO trees (name, type, height)
    VALUES (?, ?, ?)
  `;

  con.query(sql, [name, type, height], (err, result) => {
    if (err) throw err;
    res.json(result);
  });

});

app.put('/tree/:id', (req, res) => {
  const id = req.params.id;
  const height = req.body.height;

  const sql =
    `
  UPDATE trees
  SET height = ?
  WHERE id = ?
  `

  con.query(sql, [height, id], (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

app.delete('/tree/:id', (req, res) => {

  const id = req.params.id

  // DELETE FROM table_name WHERE condition;

  const sql = `
    DELETE FROM trees
    WHERE id = ?
  `;

  con.query(sql, [id], (err, result) => {
    if (err) throw err;
    res.json(result);
  });

});


app.listen(port, () => {
  console.log(`Klausomės porto Nr.: ${port}`);
});