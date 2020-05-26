class Billete
{
    constructor(v, c, i)
    {
        this.imagen = new Image();
        this.valor = v;
        this.cantidad = c;
        this.imagen.src = imagenes[this.valor];
    }
}

imagenes = [];
imagenes[50] = "b50.jpg";
imagenes[20] = "b20.jpg";
imagenes[10] = "b10.jpg";


function entregarDinero()
{
    var t = document.getElementById("texto");
    dinero = parseInt(t.value);
    for (b of caja)
    {
        if (dinero > 0)
        {
            division = Math.floor(dinero/b.valor);    
            if (division > b.cantidad)
            {
                papeles = b.cantidad;
            }
            else
            {
                papeles = division;
            }
        
            entregado.push(new Billete(b.valor, papeles, b.imagen));
            dinero -= (b.valor * papeles);        
        }
    }
       
    if (dinero > 0)
    {
        resultado.innerHTML = "El cajero no dispone de suficiente dinero";
    }
    else
    {            
        for (e of entregado)
        {   
            if (e.cantidad > 0)
            {   
                resultado.innerHTML += e.cantidad + " billetes de " + e.valor + " euros ";
                resultado.appendChild(e.imagen);
                resultado.innerHTML += "<hr />"
            }
        }
    }        
}       

var caja = [];
caja.push(new Billete(50, 10, "b50.jpg"));
caja.push(new Billete(20, 10, "b20.jpg"));
caja.push(new Billete(10, 10, "b10.jpg"));
console.log(caja);

var division = 0;
var papeles = 0;
var entregado = [];

var resultado = document.getElementById("resultado");
var b = document.getElementById("boton");
b.addEventListener("click", entregarDinero);