
const getJuegos = async() =>{

    try{
        
        const response = await fetch("https://api-game-store-32ua.onrender.com/")

        const data = await response.json();
        /* console.log(data.juegos); */
        return data.juegos;
    }catch(error){
        console.log(`El error es ${error}`);
    }


}


const detalleJuego = async(nombre) =>{

    try {

        const response = await getJuegos();
        const data = buscarJuegoPorNombre(response,nombre);
        if (!data){
            throw new Error('No se encontro nada jefe');
        }
        return data;
        }catch(error){
            console.log(`El error es ${error}`);
        }
}

const buscarJuegoPorNombre = (juegos,nombre) =>{
    return juegos.find(juego => juego.nombre === nombre);
};

const cartaJuegoElegido = (juego)=>{
    const juegoContainerElegido = document.getElementById("detalleJuego");
    juegoContainerElegido.innerHTML = "";

    const detalleHTML = `
    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 pt-5">
        <img src="${juego.imagen}" alt="Imagen de videojuego" class="card-img-top w-100">
    </div>
        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 pt-5">
            <h2 class="mt-5">${juego.nombre}</h2>
            <h3 class="">${juego.plataformas}</h3>
            <h4 class="">${juego.precio}</h4>
            <p class="mt-5 ">${juego.stock}</p>
            <button class="btn btn-primary mt-5"> Comprar</button>
        </div>
    
    `
    juegoContainerElegido.innerHTML = detalleHTML;
}





document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const juegoNombre = params.get('nombre');
    detalleJuego(juegoNombre).then(juego =>{
        if (juego){
            cartaJuegoElegido(juego);
        }
    })
  });
  