const articulos = [
    { nombre: "Remera", precio: 5000 },
    { nombre: "Anteojos", precio: 8000 },
    { nombre: "Gorra", precio: 3500 },
    { nombre: "Zapatillas", precio: 25000 },
    { nombre: "Buzo", precio: 10500 },
];
let carrito = []

let inicio = prompt("Bienvenido, ¿estás listo para comenzar tu compra?")

while (inicio != "si" && inicio != "no") {
    alert("Por favor, indícanos si o no")
    inicio = prompt("Por favor, indícanos si o no")
}
if (inicio == "si") {
    alert("¡Buena elección! Este es nuestro catálogo de productos")
    let productos = articulos.map((articulo) => articulo.nombre + " " + articulo.precio + "$");
    alert(productos.join("\n"));
} else if (inicio == "no") {
    alert( "Muchas gracias por visitar nuestra tienda online, te esperamos pronto!")
}
