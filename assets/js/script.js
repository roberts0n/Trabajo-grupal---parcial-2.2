
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
        })
    })

}

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


export const diseñoCarro = (juego) =>{

    const diseñoCarroHTML = `
        <div class="col-md-3 mt-5 mb-5">
              <img src="" alt="Juego 1" class="card-img-top ">
            </div>
            <div class="col-md-3 mt-5 mb-5 ">
              <h3 class="pt-5 text-center">${juego.nombre}</h3>
              <h5 class="mt-5 text-center"> $ : ${juego.precio}</h5>
            </div>
            

        `;

        return diseñoCarroHTML;
}

export const informacionCarrito = ()=>{
    const cuentas = JSON.parse(localStorage.getItem('usuarios')) ||  [];
    
    const usuarioLogin = JSON.parse(localStorage.getItem('login_success')) || false;

    console.log('usuarioLogueado:', usuarioLogin);
    console.log('cuentas:', cuentas);

    const usuario = cuentas.find(cuenta =>cuenta.email === usuarioLogin.email );
    if (usuario && usuario.carrito) {
        console.log(usuario.carrito);
        cartasCarro(usuario.carrito);

}





}
