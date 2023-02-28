const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(express.json());
app.use(cors);
app.use(bodyParser.urlencoded({ extended : true }))

//conexão com banco
const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'congresso'
});


app.get("/", (req, res) => {
    res.send("Hello World!").status(200);
})

app.get("/read", (req, res) => {
    db.query("SELECT * FROM users;", (err, resultado) => {
        if(err){
            console.log(err);
        }
        console.log(resultado);
        res.send(resultado);
    })
})

app.listen(8080, () => console.log("server running"))