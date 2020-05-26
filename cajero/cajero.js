class Billete
{
    constructor(v, c)
    {
        this.valor = v;
        this.cantidad = c;
    }
}

function entregarDinero()
{
    var t = document.getElementById("texto");
    var dinero = parseInt(t.value);
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
        
            entregado.push(new Billete(b.valor, papeles));
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
                resultado.innerHTML = resultado.innerHTML + e.cantidad + " Billetes de " + e.valor + "€ <br />";
            }
        }                        
    }
}       

var caja = [];
caja.push(new Billete(50, 3));
caja.push(new Billete(20, 2));
caja.push(new Billete(10, 2));

var division = 0;
var papeles = 0;
var entregado = [];

var resultado = document.getElementById("resultado");
var b = document.getElementById("boton");
b.addEventListener("click", entregarDinero);
