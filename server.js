const express = require('express');
const nunjucks = require('nunjucks');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const server = express();
const porta = 3000;

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'doe',
});

server.use(express.static('public'));
server.use(express.urlencoded({ extended: true }));
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());

nunjucks.configure('./', {
  express: server,
  noCache: true,
});


server.get('/', (req, res) => {
  connection.query('select * from donors', (err, results) => {
    if (err) throw err;
    donors = results;
    return res.render('index.html', { donors });
  });
});

server.post('/', (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const blood = req.body.blood;

  const sql = `insert into donors (name, email, blood) values ('${name}', '${email}', '${blood}')`;
  connection.query(sql, (err) => {
    if (err) throw err;
    return res.redirect('/');
  });
});

server.listen(porta, () => {
  console.log(`Servidor rodando na porta ${porta}`);
});
