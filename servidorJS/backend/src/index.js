const express = require("express");
const app = express();
const rotas = require("./rotas");

app.use(express.json());
app.use(rotas);

require("./config/dbConfig");

//app.get("/", (req, res) =>{
//    return res.json({
//        nome:"Vinícius",
//        idade: 19,
//       sexo: "Masculino",
//       salario: "40.000"
//   });
//});

app.listen(8081);