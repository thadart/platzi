var d = document.getElementById("id_canvas");
var cuadro = d.getContext("2d");
document.addEventListener("mousemove", dibujarPorRaton);
var posicion = d.getBoundingClientRect();
console.log(posicion);





function dibujarPorRaton(mover)
{
    var x_canvas = mover.clientX - posicion.left;
    var y_canvas = mover.clientY - posicion.top;    
    
    if (mover.buttons == 1)
    {
        dibujarLinea("red", x_canvas, y_canvas, x_canvas - mover.movementX, y_canvas - mover.movementY, cuadro);        
    }
}

function dibujarLinea(color, xi, yi, xf, yf, papel)
{
    papel.beginPath();
    papel.strokeStyle = color;
    papel.lineWidth = 3;
    papel.moveTo(xi, yi);
    papel.lineTo(xf, yf);
    papel.stroke();
    papel.closePath();