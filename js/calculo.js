//variables
var total = document.querySelector(".total").value;
var resumen = document.querySelector(".resumen");

resumen.onclick = function sacartotal() {
    var cantidad = parseInt(document.querySelector(".cantidad").value);
    var descuento = document.querySelector(".descuento").value;
    
    //estos solo los puse para ver si me toma los datos bien
    console.log("la cantidad es: " + cantidad);
    console.log("categoria de descuento " + descuento);

    //este valida que no este vacia la cantidad y la categoria
    if (cantidad == "") {
        alert("Debe ingresar una cantidad de tickets")
        document.querySelector(".cantidad").focus();//este hace que valla al cuadro de texto de la cantidad para que lo digite
    } else {
        if (descuento == "") {
            alert("Debe ingresar una categoria para el descuento")
            document.querySelector(".descuento").focus();//este hace que valla al cuadro de texto de la categoria
        }
    }

    //saca el valor de los tickets
    total = descuento == 'Estudiante' ? (40 * cantidad) :
        descuento == 'Trainee' ? (100 * cantidad) :
            descuento == 'Junior' ? (170 * cantidad) : 'Seleccione una opcion valida'

    document.querySelector(".total").innerHTML ="Total a pagar: $"+total;//aqui modifico eltexto del total para que aparezca con el precio
}
