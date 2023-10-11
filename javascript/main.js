const articulos = [
    { nombre: "remera", precio: 5000 },
    { nombre: "anteojos", precio: 8000 },
    { nombre: "gorra", precio: 3500 },
    { nombre: "zapatillas", precio: 25000 },
    { nombre: "buzo", precio: 10500 },
];
let carrito = []

let inicio = prompt("Bienvenido, ¿estás listo para comenzar tu compra?")

while (inicio != "si" && inicio != "no") {
    alert("Por favor, indícanos si o no")
    inicio = prompt("Por favor, indícanos si o no")
}
if (inicio == "si") {
    alert("¡Buena elección! Este es nuestro catálogo de productos")
    let productos = articulos.map((articulo) => articulo.nombre + " " + "$" + articulo.precio + " " + "+ iva");
    alert(productos.join("\n"));
} else if (inicio == "no") {
    alert( "Muchas gracias por visitar nuestra tienda online, te esperamos pronto!")
    console.log(inicio)
}

while(inicio != "no"){
    let articulo = prompt("Agrega un articulo al carrito")
    let precio = 0

    if (articulo == "remera" || articulo == "anteojos" || articulo == "gorra" || articulo == "zapatillas" || articulo == "buzo"){
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

    let unidades = parseInt(promt("Agregue la cantidad de unidades que quieres aqgregar al carrito"))

    carrito.push({articulo, unidades, precio})
    console.log(carrito)
    } else {
      alert("Disculpa, no tenemos ese articulo")
    }
    inicio = prompt("Quieres agregar otro articulo?")

    while(inicio ==="no"){
        alert("Muchas gracias por tu compra!")
        carrito.forEach((carritoFinal) => {
            console.log()
        })
    }
}