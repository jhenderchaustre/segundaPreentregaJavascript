const articulos = [
    { nombre: "remera", precio: 5000 },
    { nombre: "anteojos", precio: 8000 },
    { nombre: "gorra", precio: 3500 },
    { nombre: "zapatillas", precio: 25000 },
    { nombre: "buzo", precio: 10500 },
];
let carrito = [];

function calcularPrecioConIVA(total) {
    const iva = 0.21;
    const precioConIVA = total + (total * iva);
    return precioConIVA;
}

let inicio = prompt("Bienvenido, ¿estás listo para comenzar tu compra?");

while (inicio.toLowerCase() !== "si" && inicio.toLowerCase() !== "no") {
    alert("Por favor, indícanos si o no");
    inicio = prompt("Por favor, indícanos si o no");
}

if (inicio.toLowerCase() === "si") {
    alert("¡Buena elección! Este es nuestro catálogo de productos");
    let productos = articulos.map((articulo) => articulo.nombre + " $" + articulo.precio + " + iva");
    alert(productos.join("\n"));

    while (inicio.toLowerCase() !== "no") {
        let articulo = prompt("Agrega un artículo al carrito");
        let precio = 0;

        const productoEncontrado = articulos.find(item => item.nombre === articulo);
        if (productoEncontrado) {
            let unidades = parseInt(prompt("Agrega la cantidad de unidades que deseas al carrito"));
            carrito.push({ articulo, unidades, precio: productoEncontrado.precio });
            console.log(carrito);
        } else {
            alert("Disculpa, no tenemos ese artículo");
        }

        inicio = prompt("¿Quieres agregar otro artículo?");
    }

    alert("Presiona aceptar para continuar");
    carrito.forEach((item) => {
        console.log(`Artículo: ${item.articulo}, Unidades: ${item.unidades}, Precio: $${item.precio}`);
    });

    const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0);
    const precioFinalConIVA = calcularPrecioConIVA(total);
    console.log(`El precio final con IVA es: $${precioFinalConIVA}`);
    alert(`Hemos procesado tu compra, el total a pagar es: $${precioFinalConIVA} ¡Muchas gracias por elegirnos!`);
} else {
    alert("Muchas gracias por visitar nuestra tienda en línea, te esperamos pronto!");
}
