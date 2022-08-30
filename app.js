let nombre = prompt("Hola! por favor, ingresa tu nombre y continuemos con la compra:");
let ingresarProductos = parseInt(prompt(`Hola ${nombre}! Gracias por ingresar a nuestra web. Por favor,ingresa los productos que deseas adquirir:\n 1-Zapatillas = $ 18.000\n 2-Remera Stich = $ 8.500\n 3-Jean fluor = $ 7.700\n 4-Buzo negro = $ 7.300\n 0-Total y salir`));
let ingresarCantidad;
let total = 0;


const cantidad = (cant, precio) => {
    return cant * precio;
}


while (ingresarProductos != 0){
    switch(ingresarProductos){
        case 1:
            ingresarCantidad = parseInt(prompt(`Elegiste ZAPATILLAS. Indicanos la cantidad:`));
            total += cantidad(ingresarCantidad, 18000);
            console.log("Producto elegido: Zapatillas. " + "Cantidad Elegida: " + ingresarCantidad + ".");
            break;

        case 2:
            ingresarCantidad = parseInt(prompt("Elegiste REMERA. Indicanos la cantidad:"));
            total += cantidad(ingresarCantidad, 8500);
            console.log("Producto elegido: Remera. " + "Cantidad Elegida: " + ingresarCantidad + ".");
            break;

        case 3:
            ingresarCantidad = parseInt(prompt("Elegiste JEAN FLUOR. Indicanos la cantidad:"));
            total += cantidad(ingresarCantidad, 7700);
            console.log("Producto elegido: Jean Fluor. " + "Cantidad Elegida: " + ingresarCantidad + ".");
            break;

        case 4:
            ingresarCantidad = parseInt(prompt("Elegiste el BUZO NEGRO. Indicanos la cantidad:"));
            total += cantidad(ingresarCantidad, 7300);
            console.log("Producto elegido: Buzo Negro. " + "Cantidad Elegida: " + ingresarCantidad + ".");
            break;

        case 0:
            alert (`Tu monto total es ${cantidad}`);
            break;

        default:
            alert ("Ingresaste una opción incorrecta, por favor volvé a seleccionar.");
            break;
    }

    ingresarProductos = parseInt(prompt(`Hola ${nombre}! Gracias por ingresar a nuestra web. Por favor,ingresa los productos que deseas adquirir:\n 1-Zapatillas = $ 18.000\n 2-Remera Stich = $ 8.500\n 3-Jean fluor = $ 7.700\n 4-Buzo negro = $ 7.300\n 0-Total y salir`));

}

console.log("Total de compra: " + total);
alert (`${nombre}, el total de tu compra es: $ ` + total  + `.\n` + ` Gracias. Volvé pronto!`);

