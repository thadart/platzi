s = document.getElementById("id_canvas");
lienzo = s.getContext("2d");


var lineas = 50; 
var  yini, xfin;

for (l=0; l < lineas; l++)
{
    yini = 10 * l;
    xfin = 10 * (l + 1);
    dibujarLinea("red", 0, yini, xfin, 500);
}

for (l=0; l < lineas; l++)
{
    yini = l * 10;
    xfin = 500 - ((l + 1) * 10); 
    dibujarLinea("blue", 500, yini, xfin, 500);
}

for(l=0; l < lineas; l++)
{
    xini = 500 - (10 * l);
    yfin = 10 * (l + 1);
    dibujarLinea("yellow", xini, 0, 0, yfin);
}

for(l=0; l < lineas; l++)
{
    xini = 10 * l;
    yfin = 10 * (l + 1);
    dibujarLinea("green", xini, 0, 500, yfin);
}

dibujarLinea("black", 1, 1, 1, 499);
dibujarLinea("black", 1, 499, 499, 499);
dibujarLinea("black", 499, 499, 499, 1);
dibujarLinea("black", 499, 1, 1, 1);

function dibujarLinea(color, xi, yi, xf, yf)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xi, yi);
    lienzo.lineTo(xf, yf);
    lienzo.stroke();
    lienzo.closePath();
}