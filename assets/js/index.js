
document.addEventListener("DOMContentLoaded", () => {

    const usuario = JSON.parse(localStorage.getItem('login_success')) || false;

    if(!usuario){
        window.location.href = '/vistas/login.html';
    }
    
    const logout = document.querySelector('#cerrarSesion');

    logout.addEventListener('click',() =>{
        alert('Hasta pronto!')
        localStorage.removeItem('login_success');
        window.location.href = "/vistas/login.html";    
    })



})


/* Conexion con codigo JQUERY usando el metodo ajax. Se consume segunda api aqui para el index.html*/

$(document).ready(function(){


    const obtenerComentarios = ()=>{

        return $.ajax({
            url : "https://api-comentarios-web.onrender.com",
            method : "GET",
            dataType : "json",
            error : function(error){
                console.log(`el error es : ${error}`)
            }
        });
    }


    const crearComentarios = (comentariosUsuarios)=>{

        let comentariosRow = $("#comentariosRow");

        $.each(comentariosUsuarios, (index,comentariosUsuarios)=>{

            const {usuario , comentario} = comentariosUsuarios;

            const divRow = $("<div>").addClass("col-md-4 col-sm-6 col-xs-12 my-5 d-flex justify-content-center");
            const card = $("<div>").addClass("card bg-dark text-center cartas movimiento comentarios");
            const divBody = $("<div>").addClass("card-body");
            const titulo = $("<h5>").addClass("card-title text-light").text(usuario);
            const parrafo = $("<p>").addClass("card-text").text(comentario);

            comentariosRow.append(divRow);
            divRow.append(card);
            card.append(divBody);
            divBody.append(titulo);
            divBody.append(parrafo);

        });

    };

    obtenerComentarios().then(comentarios => crearComentarios(comentarios.comentarios))
    .catch(error => console.log(`El error es : ${error}`));

    
    
})

export const juegoCard = ({nombre,imagen,precio})=>{


    const htmlCard = `
    <div class="col-md-4 col-sm-6 col-xs-12 my-5">
        <div class="card bg-dark text-center cartas movimiento" >
            <img src="${imagen}" class="card-img-top rounded" alt="Imagen de videojuego">
        <div class="card-body bg-dark text-light">
            <h5 class="card-title">${nombre}</h5>
            <p class="card-text"> $: ${precio}</p>
            <a href="#" class="comprarBoton btn btn-primary" data-nombre="${nombre}" >Comprar</a>
        </div>
        </div>
    </div> 
    `;
    
    return htmlCard;

}


export  const cartasCarro = (carro)=>{

    const contenedorCarro = document.getElementById('carroRow');

    contenedorCarro.innerHTML = "";

    carro.forEach((juego)=>{
        
        const carroHTML = diseñoCarro(juego);

        contenedorCarro.innerHTML += carroHTML;

    })


}