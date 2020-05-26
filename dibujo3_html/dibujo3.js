s = document.getElementById("id_canvas3");
lienzo = s.getContext("2d");


var xini, yfin;
var lineas = 50;

for(l=0; l < lineas; l++)
{
    xini = 500 - (10 * l);
    yfin = 10 * (l + 1);
    dibujarLinea("yellow", xini, 0, 0, yfin);
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