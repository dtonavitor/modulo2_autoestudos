var express = require('express'); 
var hostname = '127.0.0.1';

var bodyParser = require('body-parser')
var port = 1808;
var app = express();

app.use(bodyParser.urlencoded({extended: true}));
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

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});