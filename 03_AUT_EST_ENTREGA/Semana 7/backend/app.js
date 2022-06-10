const express = require('express'); 
const hostname = '127.0.0.1';

const bodyParser = require('body-parser')
const port = 1809;
const sqlite3 = require('sqlite3').verbose();
const app = express();
const DBPATH = 'activities.db'
const urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(express.static("../frontend/"));

app.get('/view', (req, res) => {
  console.log("Enviei o GET");
  res.setHeader('Access-Control-Allow-Origin', '*');

  res.send(JSON.stringify (
  {
    endereco:"Rua Pamplona, 163 ap.112 - Jardim Paulista, São Paulo - SP",
    telefone:"(11)95210-5844",
    data_nascimento:"18/08/2003",
    email:"dtonavitor@gmail.com"
  }));
});





app.get('/viewactivities', (req, res) => {
  console.log("Enviei o GET");
  res.setHeader('Access-Control-Allow-Origin', '*');

  var db = new sqlite3.Database(DBPATH);
  var sql = 'SELECT id, nome FROM activities';
  db.all(sql, [], (err, rows) => {
    if (err) {
      throw err;
    }
    res.json(rows);
  });
  db.close();
})

app.post('/insertactivities', urlencodedParser, (req, res) => {
  console.log("Enviei o POST");
  res.setHeader('Access-Control-Allow-Origin', '*');

  var db = new sqlite3.Database(DBPATH);
  var sql = "INSERT INTO activities (nome, ano) VALUES ('"+ req.body.nome + "', 2022)";
  db.all(sql, [], (err, rows) => {
    if (err) {
      throw err;
    }
  });
  db.close();
  res.send();
})

app.post('/updateactivities', urlencodedParser, (req, res) => {
  console.log("Enviei o POST");
  res.setHeader('Access-Control-Allow-Origin', '*');

  var db = new sqlite3.Database(DBPATH);
  var sql = "UPDATE activities SET nome = '" + req.body.nome + "' WHERE id = " + req.body.id;
  db.run (sql, [], err => {
    if (err) {
      throw err;
    }
    res.send();
  });
  db.close();
});

app.post('/deleteactivities', urlencodedParser, (req, res) => {
  console.log("Enviei o POST");
  res.setHeader('Access-Control-Allow-Origin', '*');

  sql = "DELETE FROM activities WHERE id = " + req.body.id;
  db = new sqlite3.Database(DBPATH);
  db.run(sql, [], err => {
    if (err) {
      throw err;
    }
    res.send();
  });
  db.close();
});


app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});