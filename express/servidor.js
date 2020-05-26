var express = require("express");
var aplicacion = express();

aplicacion.get("/", inicio);
aplicacion.get("/comida", comida);



function inicio(peticion, resultado)
{
    resultado.send("<p><center><h1>Hola Papá!</br> Estás en un servidor que he montado usando Express</h1></center></p>");
}

function comida(peticion, resultado)
{
    resultado.send("<p><center><h1>No sé qué hacer mañana de primero!</h1></center></p>");
}

aplicacion.listen(8989);