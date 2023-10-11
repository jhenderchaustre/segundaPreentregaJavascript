const articulos = [
    { nombre: "remera", precio: 5000 },
    { nombre: "anteojos", precio: 8000 },
    { nombre: "gorra", precio: 3500 },
    { nombre: "zapatillas", precio: 25000 },
    { nombre: "buzo", precio: 10500 },
];
let carrito = []

function calcularPrecioConIVA(total) {
    const iva = 0.21; // 21% de IVA
    const precioConIVA = total + (total * iva);
    return precioConIVA;
}

let inicio = prompt("Bienvenido, ¿estás listo para comenzar tu compra?")

while (inicio !== "si" && inicio !== "no") {
    alert("Por favor, indícanos si o no")
    inicio = prompt("Por favor, indícanos si o no")
}

if (inicio == "si") {
    alert("¡Buena elección! Este es nuestro catálogo de productos")
    let productos = articulos.map((articulo) => articulo.nombre + " $" + articulo.precio + " + iva");
    alert(productos.join("\n"));
} else if (inicio == "no") {
    alert("Muchas gracias por visitar nuestra tienda en línea, te esperamos pronto!")
}

while (inicio !== "no") {
    let articulo = prompt("Agrega un artículo al carrito")
    let precio = 0

    if (articulo == "remera" || articulo == "anteojos" || articulo == "gorra" || articulo == "zapatillas" || articulo == "buzo") {
        switch (articulo) {
            case "remera":
                precio = 5000;
                break;
            case "anteojos":
                precio = 8000;
                break;
            case "gorra":
                precio = 3500;
                break;
            case "zapatillas":
                precio = 25000;
                break;
            case "buzo":
                precio = 10500;
                break;
            default:
                break;
        }

        let unidades = parseInt(prompt("Agrega la cantidad de unidades que deseas al carrito"))

        carrito.push({ articulo, unidades, precio })
        console.log(carrito)

        inicio = prompt("¿Quieres agregar otro artículo?")
    } else {
        alert("Disculpa, no tenemos ese artículo")
    }
}

if (inicio === "no") {
    alert("¡Muchas gracias por tu compra!")
    carrito.forEach((item) => {
        console.log(`Artículo: ${item.articulo}, Unidades: ${item.unidades}, Precio: $${item.precio}`);
    })

    const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0);
    const precioFinalConIVA = calcularPrecioConIVA(total);
    console.log(El` precio final con IVA es: $${precioFinalConIVA}`)
    alert(El`Muchas grac : $${precioFinalConIVA}`)
    
}
