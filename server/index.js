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
    database: 'clients'
});

app.get('/', (req, res) => {
    res.send('Home');
})

app.listen(3001, () => {
    db.query("SELECT * FROM users;", (err, resultado) => {
        if(err){
            console.log(err);
        }
        console.log(resultado);
    })
})