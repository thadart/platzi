var imagenes = [];
imagenes["Cauchin"] = "vaca.png";
imagenes["Pokacho"] = "pollo.png";
imagenes["Tocinauro"] = "cerdo.png";

var coleccion = [];
coleccion.push(new Pakiman("Cauchin", 100, 50));
coleccion.push(new Pakiman("Pokacho", 80, 60));
coleccion.push(new Pakiman("Tocinauro", 120, 40));

for (var c of coleccion)
{
    c.mostrar();
}
