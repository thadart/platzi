var d = document.getElementById("id_canvas");
cuadro = d.getContext("2d");



var fondo = {
    url: "tile.png",
    cargaOK: false
};

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;


var vaca = {
    url: "vaca.png",
    cargaOK: false
};
vaca.imagen = new Image();
vaca.imagen.src = vaca.url;

var pollo = {
    url: "pollo.png",
    cargaOK: false
};
pollo.imagen = new Image();
pollo.imagen.src = pollo.url;

var cerdo = {
    url: "cerdo.png",
    cargaOK: false
};
cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;

fondo.imagen.addEventListener("load", cargarFondo);
vaca.imagen.addEventListener("load", cargarVaca);
pollo.imagen.addEventListener("load", cargarPollo);
cerdo.imagen.addEventListener("load", cargarCerdo);

function cargarFondo()
{
    fondo.cargaOK = true;
    dibujar();
}

function cargarVaca()
{
    vaca.cargaOK = true;
    dibujar();
}

function cargarPollo()
{
    pollo.cargaOK = true;
    dibujar();
}

function cargarCerdo()
{
    cerdo.cargaOK = true;
    dibujar();
}


var num_pollos = aleatorio(0,10);
var num_vacas = aleatorio(0,10);

function dibujar()
{
    if (fondo.cargaOK) 
        {
            cuadro.drawImage(fondo.imagen, 0, 0);
        }
    
    if (vaca.cargaOK)
        {
            for (v=0; v < num_vacas; v++)
            {
                var x = aleatorio(0, 7);
                var x = x * 60;
                var y = aleatorio(0, 7);
                var y = y * 60;
                cuadro.drawImage(vaca.imagen, x, y);
            }
        }
   
    
    if (pollo.cargaOK)
        {   
            for (p=0; p < num_pollos; p++)
            {
                var x = aleatorio(0, 7);
                var x = x * 60;
                var y = aleatorio(0, 7);
                var y = y * 60;
                cuadro.drawImage(pollo.imagen, x, y);
            }        }

    if (cerdo.cargaOK)
        {
            var x = aleatorio(0, 7);
            var x = x * 60;
            var y = aleatorio(0, 7);
            var y = y * 60;
            cuadro.drawImage(cerdo.imagen, x, y);
        }

}


function aleatorio(min, maxi)
{
  var resultado;
  resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
  return resultado;
}
