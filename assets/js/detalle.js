
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
            <p class="mt-5 ">${juego.descripcion}</p>
            <button id="añadirCarrito" class="btn btn-primary mt-5"> Comprar</button>
        </div>
    
    `
    juegoContainerElegido.innerHTML = detalleHTML;
}

const carritoCompra = (juegoNombre)=>{

    document.getElementById('añadirCarrito').addEventListener('click',function(){+

        detalleJuego(juegoNombre).then(juego=>{
            if(juego){

                console.log(juego);

                const productoId = juego.id;
                const productoNombre = juego.nombre;
                const productoPrecio = juego.precio;

                const usuario = JSON.parse(localStorage.getItem('login_success'));
                if(!usuario){
                    return alert('Debes iniciar sesion para poder comprar juegos');
                }

                const cuentas = JSON.parse(localStorage.getItem('usuarios'));
                const usuarioIndex = cuentas.findIndex(cuenta => cuenta.email ==usuario.email);

                const productoCarrito = usuario.carrito.find(item => item.id === productoId);
                if (productoCarrito){
                    return alert('Producto ya añadido');
                }

                usuario.carrito.push({ id: productoId , nombre : productoNombre , precio : productoPrecio });

                cuentas[usuarioIndex].carrito = usuario.carrito;
                localStorage.setItem('usuarios',JSON.stringify(cuentas));
                localStorage.setItem('login_success',JSON.stringify(usuario));
                alert (`Producto añadido al carrito!`);
            }
        })
    })
}




document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const juegoNombre = params.get('nombre');
    detalleJuego(juegoNombre).then(juego =>{
        if (juego){
            cartaJuegoElegido(juego);
            carritoCompra(juegoNombre);
        }
    })
    const usuario = JSON.parse(localStorage.getItem('login_success')) || false;

    if(!usuario){
        window.location.href = 'login.html';
    }
    
    const logout = document.querySelector('#cerrarSesion');

    logout.addEventListener('click',() =>{
        alert('Hasta pronto!')
        localStorage.removeItem('login_success');
        window.location.href = "login.html";    
    })

  });
  