var d = document.getElementById("id_canvas");
var cuadro = d.getContext("2d");
cuadro.strokeRect(0, 0, 800, 800);
var posicion = d.getBoundingClientRect(); 

var margenIzq = posicion.left;
console.log(margenIzq);
var margenSup = posicion.top;
console.log(margenSup);


document.addEventListener("mousemove", dibujarRaton)


function dibujarRaton(clic)
{
    if (clic.buttons == 1)
    {
        var x = clic.clientX - margenIzq;
        var y = clic.clientY - margenSup;
    
        dibujarLinea("red", x, y, x - clic.movementX , y - clic.movementY, cuadro);
    }
}

function dibujarLinea(color, xIni, yIni, xFin, yFin, papel)
{
    papel.beginPath();
    papel.strokeStyle = color;
    papel.lineWidth = 3;
    papel.moveTo(xIni, yIni);
    papel.lineTo(xFin, yFin);
    papel.stroke();
    papel.closePath();
}

