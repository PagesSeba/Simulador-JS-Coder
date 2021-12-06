// Jquery
$(document).ready(function() {
    console.log("el DOM esta listo");
});
//Variables
let nombre = 0;
let total = 0;
let totalConIva = 0
let precio = 0;
let equipo = 0;
let id = 0;
const IVA = 1.21;

//FUNCIONES


function agregarProductoSeleccionadoAlCarrito(id) {
    let camisetaSeleccionada = camisetas.find( camiseta => camiseta.id === id);
    carrito.push(camisetaSeleccionada);
}
function crearTicket(){
    console.log(carrito);
    calcularTotalConIva();
    $("#compra").html("")
    $("#compra").fadeIn(1000)
    $("#compra").append( `<h5>¡Muchas gracias por tu compra! el total de la misma es $ ${total} </h5>`)
    $("#compra").append( '<h6> (El precio total incluye impuestos) </h6>')
    $("#compra").addClass(["mt-2", "text-dark", "text-center"]);
    vaciarCarrito();
}
function calcularTotalCarrito() {
    for(producto of carrito){
        total += producto.precio;
    }
    crearTicket();
}

function DOMCarrito() {
  $("#carritoC").html("")
  $("#carritoC").fadeIn(1000)
 carrito.forEach( producto => {
  $("#carritoC").append('<tr>' + 
                        '<th scope="row">' +  producto.id  + '</th>'+ 
                        '<td>' + producto.equipo + '</td>' + 
                        '<td>' + producto.tipo + ' ' + producto.localia + '</td>' + 
                        '<td> $' + producto.precio + '</td>' +
                        '</tr>')
 });
}
function vaciarCarrito(){
        $("#carritoC").fadeOut(1000);
        setTimeout(vaciarDOM, 1100);
        carrito.length = 0
        total = 0
        
     }
function vaciarDOM(){
  $("#carritoC").text("")
}
function calcularTotalConIva(){
    total = total * IVA;
}


//Objetos

class Indumentaria {
    
    constructor(id, tipo, imagen, equipo, localia, precio) {
        this.id = id;
        this.tipo = tipo.toUpperCase();
        this.imagen = imagen
        this.equipo = equipo;
        this.localia = localia;
        this.precio = parseFloat(precio);

    }

}

//Arrays//
const camisetas = [];
const carrito = [];

const camiseta1 = new Indumentaria(1,"Camiseta","../IMG/BelgranoTitular.jpg", "BELGRANO", "LOCAL", 6500);
const camiseta2 = new Indumentaria(2,"Camiseta","../IMG/TalleresTitular.jpg", "TALLERES", "LOCAL", 7000);
const camiseta3 = new Indumentaria(3,"Camiseta","../IMG/InstitutoTitular.jpg", "INSTITUTO", "LOCAL", 5500);
const camiseta4 = new Indumentaria(4,"Camiseta","../IMG/RacingTitular.jpg", "RACING", "LOCAL", 3750);
const camiseta5 = new Indumentaria(5,"Camiseta","../IMG/BelgranoSuplente.jpg","BELGRANO", "VISITANTE", 6250);
const camiseta6 = new Indumentaria(6,"Camiseta","../IMG/TalleresSuplente.jpg", "TALLERES", "VISITANTE", 6900);
const camiseta7 = new Indumentaria(7,"Camiseta","../IMG/InstitutoSuplente.jpg", "INSTITUTO", "VISITANTE", 5500);
const camiseta8 = new Indumentaria(8,"Camiseta","../IMG/RacingSuplente.jpg","RACING", "VISITANTE", 3575);

camisetas.push(camiseta1);
camisetas.push(camiseta2);
camisetas.push(camiseta3);
camisetas.push(camiseta4);
camisetas.push(camiseta5);
camisetas.push(camiseta6);
camisetas.push(camiseta7);
camisetas.push(camiseta8);

console.log(camisetas);

// ORDENAR UN ARRAY POR UNA CONDICIÓN (Precio de - a +)
camisetas.sort(function (a, b) { 
    if (a.precio > b.precio) {
      return 1;
    }
    else if (a.precio < b.precio) {
      return -1;
    }
    else
    return 0;
});
  
//Evento Ticket

$("#crearComprobante").on("click", function() {
    calcularTotalCarrito();
})
$("#borrarComprobante").on("click", function() {
    vaciarCarrito();
})

/**
 * Ejecución del código
 */
DOMCarrito(carrito)
//Storage y JSON
//Indumentaria
const guardarCamisetas = (clave, valor) => { localStorage.setItem(clave, valor) };

for (const camiseta of camisetas) {
    guardarCamisetas(camiseta.id, JSON.stringify(camiseta));
}
const devolver = localStorage.getItem(guardarCamisetas);
const recuperarCamisetas = JSON.parse(devolver);
