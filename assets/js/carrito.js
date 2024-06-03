
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
              <img src="${juego.imagen}" alt="Juego 1" class="card-img-top ">
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



informacionCarrito();
