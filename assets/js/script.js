

 const getJuegos = async() =>{

    try{
        
        const response = await fetch("https://api-game-store-32ua.onrender.com")

        const data = await response.json();
         /* console.log(data.juegoABuscar);  */
        mostrarCartas(data.juego);
    }catch(error){
        console.log(`El error es ${error}`);
    }


}

export const mostrarCartas = (juegos)=>{

    const contenedorJuego = document.getElementById("juegoRow");

    contenedorJuego.innerHTML="";

    juegos.map((juego)=>{
        const cardHTML = juegoCard(juego);

        contenedorJuego.innerHTML += cardHTML;
    });

    document.querySelectorAll('.comprarBoton').forEach((button)=>{

        button.addEventListener('click',(event) =>{
            const nombreJuego = event.currentTarget.getAttribute('data-nombre');
            window.location.href = `juego.html?nombre=${encodeURIComponent(nombreJuego)}`;
            console.log(nombreJuego);
        })
    })

}

export const juegoCard = ({nombre,imagen,precio})=>{
    
    return `
    <div class="col-md-4 col-sm-6 col-xs-12 my-5">
        <div class="card bg-dark text-center cartas movimiento" >
            <img src="${imagen}" class="card-img-top rounded" alt="Imagen de videojuego">
        <div class="card-body bg-dark text-light">
            <h5 class="card-title">${nombre}</h5>
            <p class="card-text"> $: ${precio}</p>
            <a href="#" class="comprarBoton btn btn-primary" data-nombre="${nombre}" >Comprar</a>
        </div>
        </div>
    </div> `;

}

/* getJuegos()
 */