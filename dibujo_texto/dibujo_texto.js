var texto = document.getElementById("id_texto");
var boton = document.getElementById("id_boton");
boton.addEventListener("click", dibujoPorClick);


var d = document.getElementById("id_canvas");
var lienzo = d.getContext("2d");


function dibujoPorClick()
{
    var lineas = parseInt(texto.value);
    var xfin, yini;
    var ancho = d.width;    
    var espacio = ancho / lineas;
    for (l=0; l < lineas; l++)
    {
        yini = espacio * l;
        xfin = espacio * (l + 1);
        dibujarLinea("cyan", 0, yini, xfin, ancho);
    }
}

function dibujarLinea(color, xi, yi, xf, yf)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xi, yi);
    lienzo.lineTo(xf, yf);
    lienzo.stroke();
    lienzo.closePath();
}