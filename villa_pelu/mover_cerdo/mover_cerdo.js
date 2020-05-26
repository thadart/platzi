var d = document.getElementById("id_canvas");
var cuadro = d.getContext("2d");

teclas = {
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40
};

fondo = {
    url: "tile.png",
    cargaOK: false
};
fondo.imagen = new Image();
fondo.imagen.src = fondo.url;


vaca = {
    url: "vaca.png",
    cargaOK: false
};
vaca.imagen = new Image();
vaca.imagen.src = vaca.url;

pollo = {
    url: "pollo.png",
    cargaOK: false
};
pollo.imagen = new Image();
pollo.imagen.src = pollo.url;

cerdo = {
    url: "cerdo.png",
    cargaOK: false
};
cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;

document.addEventListener("keydown", moverCerdo);


fondo.imagen.addEventListener("load", cargarFondo);
vaca.imagen.addEventListener("load", cargarVacas);
pollo.imagen.addEventListener("load", cargarPollos);
cerdo.imagen.addEventListener("load", cargarCerdo);


function cargarFondo()
{
    fondo.cargaOK = true;
    dibujar();
}

function cargarVacas()
{
    vaca.cargaOK = true;
    dibujar();
}

function cargarPollos()
{
    pollo.cargaOK = true;
    dibujar();
}

function cargarCerdo()
{
    cerdo.cargaOK = true;
    dibujar
    ();
}

var v1x = aleatorio(10, 420);
var v1y = aleatorio(10, 420);
var v2x = aleatorio(10, 420);
var v2y = aleatorio(10, 420);
var v3x = aleatorio(10, 420);
var v3y = aleatorio(10, 420);

var p1x = aleatorio(10, 420);
var p1y = aleatorio(10, 420);
var p2x = aleatorio(10, 420);
var p2y = aleatorio(10, 420);
var p3x = aleatorio(10, 420);
var p3y = aleatorio(10, 420);
 
var cx = 250;
var cy = 250;

function dibujar()
{
    if (fondo.cargaOK)
    {
        cuadro.drawImage(fondo.imagen, 0, 0);
    }

    if (vaca.cargaOK)
    {
        cuadro.drawImage(vaca.imagen, v1x, v1y);
        cuadro.drawImage(vaca.imagen, v2x, v2y);
        cuadro.drawImage(vaca.imagen, v3x, v3y);
    }

    if (pollo.cargaOK)
    {
        cuadro.drawImage(vaca.imagen, p1x, p1y);
        cuadro.drawImage(vaca.imagen, p2x, p2y);
        cuadro.drawImage(vaca.imagen, p3x, p3y);
    }

    if (cerdo.cargaOK)
    {
        cuadro.drawImage(cerdo.imagen, cx, cy);
    }
}

function moverCerdo(evento)
{
    var mov = 10;

    switch (evento.keyCode)
    {
        case teclas.LEFT:
            cx = cx - mov;
        break;

        case teclas.UP:    
            cy = cy - mov;
        break;

        case teclas.RIGHT:
            cx = cx + mov;
        break;

        case teclas.DOWN:
            cy = cy + mov;
        break;

        default:
        break;
    }

    dibujar();
}

function aleatorio(min, max)
{
  var resultado;
  resultado = Math.floor(Math.random() * (max - min + 1)) + min;
  return resultado;
}