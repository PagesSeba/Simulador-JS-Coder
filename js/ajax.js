// AJAX
const URLJSON = "./js/camisetas.json"

$("#cLocal").append('<button class= "btn btn-primary" id = "btnC">Ver Camisetas</button>');


$("#btnC").click(() => {

    $.getJSON(URLJSON , function(respuesta,estado){

       if(estado === "success"){

         $("#btnC").hide(0)  

           let datos_cLocales = respuesta.camisetas;

           for (const dato of datos_cLocales){              
                  

               agregar_card_camiseta(dato);
                                        
           }
       }else{
           console.log(estado);
       }
   })
}); 


async function agregar_card_camiseta(dato){

   await    $("#cLocal").fadeIn(1000).append(`<div class="row gap-5">
                                           <div class="col-6 col-md-3 card shadow-sm p-3 mb-5 bg-body rounded mx-5" style="width: 18rem;">
                                           <img src=${dato.imagen} class="card-img-top bordeProductos" alt="...">
                                           <div class="card-body">
                                           <h5 class="card-title text-center">${dato.equipo}</h5>
                                           <p class="card-text text-center">Camiseta ${dato.localia} de la temporada 20/21</p>
                                           <p class="card-text text-center text-dark">Precio: $${dato.precio}</p>
                                           <a href="#" id="btn_${dato.cId}" class="btn ${dato.btn} w-100" ">Agregar</a>
                                           </div>
                                       </div>`
   
   );
   $(`#btn_${dato.cId}`).click(()=>{

       agregarProductoSeleccionadoAlCarrito(dato.id); 
       DOMCarrito();


   });



}
// async function agregar_card_camisetaV(dato){

//     await    $("#cVisi").fadeIn(1000).append(`<div class="row gap-5">
//                                             <div class="col-6 col-md-3 card shadow-sm p-3 mb-5 bg-body rounded mx-5" style="width: 18rem;">
//                                             <img src=${dato.imagen} class="card-img-top bordeProductos" alt="...">
//                                             <div class="card-body">
//                                             <h5 class="card-title text-center">${dato.equipo}</h5>
//                                             <p class="card-text text-center">Camiseta ${dato.localia} de la temporada 20/21</p>
//                                             <p class="card-text text-center text-dark">Precio: $${dato.precio}</p>
//                                             <a href="#" id="btn_${dato.cId}" class="btn ${dato.btn} w-100" ">Agregar</a>
//                                             </div>
//                                         </div>`
    
//     );
 
//     $(`#btn_${dato.cId}`).click(()=>{
 
//         agregarProductoSeleccionadoAlCarrito(dato.id); 
//         DOMCarrito();
 
 
//     });
 
 
 
//  }