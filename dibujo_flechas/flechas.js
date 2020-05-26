var s = document.getElementById("id_canvas");
var cuadro = s.getContext("2d");

document.addEventListener("keydown", dibujoTecla);

var x = 150;
var y = 150;
dibujarLinea("cyan", x-1, y-1, x+1, y+1, cuadro);

var tecla = {
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40
};

function dibujoTecla(evento)
{
    var colorcito = "cyan";
    var movimiento = 10;
    
    switch (evento.keyCode)    
    {
        case tecla.LEFT:
            dibujarLinea(colorcito, x, y, x - movimiento, y, cuadro);
            x = x - movimiento;
        break;

        case tecla.UP:
            dibujarLinea(colorcito, x, y, x, y - movimiento, cuadro);
            y = y - movimiento;
        break;
        
        case tecla.RIGHT:
            dibujarLinea(colorcito, x, y, x + movimiento, y, cuadro);
            x = x + movimiento;
        break;

        case tecla.DOWN:
            dibujarLinea(colorcito, x, y, x, y + movimiento, cuadro);
            y = y + movimiento;
        break;
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
}

