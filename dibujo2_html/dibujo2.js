var s = document.getElementById("id_canvas2");
var lienzo = s.getContext("2d");

var lineas = 50;
var y_ini, x_fin;
for (l=0; l < lineas; l++)
{
    y_ini = l * 10;
    x_fin = 500 - ((l + 1) * 10); 
    dibujarLinea("blue", 500, y_ini, x_fin, 500);
}

dibujarLinea
  

function dibujarLinea(color, xi, yi, xf, yf)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xi, yi);
    lienzo.lineTo(xf, yf);
    lienzo.stroke();
    lienzo.closePath();
}
