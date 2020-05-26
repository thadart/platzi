var s = document.getElementById("id_canvas");
var lienzo = s.getContext("2d");



var lineas = 50; 
var  yini, xfin;

for (l=0; l < lineas; l++)
{
    yini = 10 * l;
    xfin = 10 * (l + 1);
    dibujarLinea("red", 0, yini, xfin, 500);
}

dibujarLinea("red", 1, 1, 1, 499);
dibujarLinea("red", 1, 499, 499, 499);



function dibujarLinea(color, x_ini, y_ini, x_fin, y_fin)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(x_ini, y_ini);
    lienzo.lineTo(x_fin, y_fin);
    lienzo.stroke();
    lienzo.closePath();
}