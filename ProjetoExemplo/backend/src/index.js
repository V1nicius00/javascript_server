const express = require("express");
const app = express();
app.use(express.json());

app.get("/", (req, res) =>{
    return res.json({
        nome:"Vinícius",
        idade: 19,
        sexo: "Masculino",
        salario: "40.000"
    });
});

app.listen(8081);