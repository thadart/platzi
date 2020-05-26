s = document.getElementById("id_canvas4");
lienzo = s.getContext("2d");


var xini, yfin;
var lineas = 50;

for (l=0; l < lineas; l++)

{
    xini = 10 * l;
    yfin = 10 * (l + 1);
    dibujarLinea("green", xini, 0, 500, yfin);
}
dibujarLinea("green", 1, 1, 499, 1);
dibujarLinea("green", 499, 1, 499, 499);


function dibujarLinea(color, xi, yi, xf, yf)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xi, yi);
    lienzo.lineTo(xf, yf);
    lienzo.stroke();
    lienzo.closePath();
}