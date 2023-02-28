const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();

app.use(express.json())
app.use(cors);
app.use(bodyParser.urlencoded({ extended : true }))

//conexão com banco
const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'congresso'
});

db.query("SELECT * FROM users;", (err, resultado) => {
    if(err){
        console.log(err);
    }
    console.log(resultado);
})

app.get('/', (req, res) => {
    res.send("Acesse /read para ler os dados ou /insert para inserir novos dados.")
})

app.listen(8080, () => {
    console.log("Server running.")
})