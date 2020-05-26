class Billete
{
    constructor (v, c)
    {
        this.valor = v;
        this.cantidad = c;
        this.imagen = new Image();
        this.imagen.src = imagenes[this.valor];
    }
}

imagenes = [];
imagenes[50] = "b50.jpg";
imagenes[20] = "b20.jpg";
imagenes[10] = "b10.jpg";

var caja = [];
caja.push(new Billete(50, 10));
caja.push(new Billete(20, 10));
caja.push(new Billete(10, 10));
var dinero_caja = 0;




for (b of caja)
{
    dinero_caja += b.valor*b.cantidad; 
}


function entregarDinero()
{   
    var txt = document.getElementById("texto");
    var dinero = parseInt(txt.value);
    for (b of caja)
    {
        if (dinero >0 )
        {
            div = Math.floor(dinero/b.valor);
            if (div > b.cantidad)
            {
                papeles = b.cantidad;      
                b.cantidad = 0; 
                console.log(b.cantidad);
            }
            else
            {
                papeles = div; 
                b.cantidad -= papeles; 
                console.log (b.cantidad);  
            }
    
            entregado.push(new Billete(b.valor, papeles));
            dinero -= (papeles*b.valor);
        }
    }

        if (dinero > 0)
        {   
            resultado.innerHTML = "El cajero no dispone de suficiente dinero";
        }
        else
        {
            resultado.innerHTML = "<strong>Dinero entregado: <br /></strong>";
            for (e of entregado)
            {
                if (e.cantidad > 0)
                {
                    resultado.innerHTML = resultado.innerHTML + e.cantidad + " Billetes de " + e.valor + "€ <br/>";
                }
            }
            resultado.innerHTML += "<hr />";
        }                      
    var suma = (caja[0].cantidad*caja[0].valor) + (caja[1].cantidad*caja[1].valor) + (caja[2].cantidad*caja[2].valor);
    c.innerHTML = "<strong>Dinero disponible en el cajero: </strong> <br/>" + suma;
}


var c = document.getElementById("d_caja");
c.innerHTML = "<strong>Dinero disponible en el cajero: </strong><br/>" + dinero_caja;


var div = 0;
var papeles = 0;
var entregado = [];



var s = document.getElementById("d_sesion");
var resultado = document.getElementById("resultado");

var bot = document.getElementById("boton");
bot.addEventListener("click", entregarDinero);

