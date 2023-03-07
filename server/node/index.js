const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");

//conexão com o banco
const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "linda_bestie"
});

const app = express();
const port = 8080;

app.use(bodyParser.json());

app.use( bodyParser.urlencoded({
    extended: true,
}));

app.listen(port, () => {
    if(db) console.log('Conexão bem sucedida');
    console.log(`Server running ${port}.`)
})

app.get("/", (request, response) => {
    const sqlSelect = `SELECT * from fofas;`;
    db.query(sqlSelect, (err, result) => {
        if(err) return console.log('Ocorreu um erro: ' + err)

        response.json(result);
    })
})

app.get("/update", (request, response) => {
    const sqlUpdate = `
    UPDATE fofas
    SET senha = 'bestie'
    WHERE id = '2';
    `;
    db.query(sqlUpdate, (err, result) => {
        if (err) return console.log("Ocorreu um erro" + err)

        response.json(result);
    })
})