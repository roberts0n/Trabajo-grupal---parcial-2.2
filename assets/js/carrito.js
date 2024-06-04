
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
            <div class="col-md-3 mt-2 mb-5 ">
              <h3 class="pt-5 text-center">${juego.nombre}</h3>
              <h5 class="mt-2 text-center"> $ : ${juego.precio} CLP</h5>
              <div class="d-flex justify-content-center">
                <button id="eliminarCarrito-${juego.id}" class="mt-2 btn btn-danger">Eliminar del carro</>
              </div>
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

        usuario.carrito.forEach(juego=>{
            document.getElementById(`eliminarCarrito-${juego.id}`).addEventListener('click',function(){
                eliminarDelCarro(juego.id);
            })
        });

        mostrarTotalCarrito(usuario.carrito);

};


};

const eliminarDelCarro = (productoId) =>{

    const usuarioLogin = JSON.parse(localStorage.getItem('login_success')) || false;

        if (usuarioLogin) {
            const cuentas = JSON.parse(localStorage.getItem('usuarios')) || [];


            const usuarioIndex = cuentas.findIndex(cuenta => cuenta.email === usuarioLogin.email);

            if (usuarioIndex !== -1) {
                const usuario = cuentas[usuarioIndex];
                usuario.carrito = usuario.carrito.filter(item => item.id !== productoId);

                
                localStorage.setItem('login_success', JSON.stringify(usuario));

                cuentas[usuarioIndex] = usuario;
                localStorage.setItem('usuarios', JSON.stringify(cuentas));

                
                informacionCarrito();
                alert('Producto eliminado del carrito.');
            } else {
                console.log('No se encontró el usuario.');
            }
        } else {
            alert('No has iniciado sesión');
            window.location.href = 'login.html'; 
        }

}



const usuario = JSON.parse(localStorage.getItem('login_success')) || false;

if(!usuario){
    window.location.href = 'login.html';
}


export const procesoCompra = ()=>{

    const usuarioLogin = JSON.parse(localStorage.getItem('login_success')) || false;

    if (usuarioLogin){
        const cuentas = JSON.parse(localStorage.getItem('usuarios')) || [];

        const usuarioIndex = cuentas.findIndex(cuenta =>cuenta.email ===usuarioLogin.email);

        if (usuarioIndex!==-1){
            const usuario = cuentas[usuarioIndex];

            if(usuario.carrito.length===0){
                alert('Nada que comprar aca jefe');
                return;
            }

            usuario.carrito.forEach(juego=>{
                if(!usuario.compras.some(compra => compra.id === juego.id)){
                    usuario.compras.push(juego);
                }
            });

            usuario.carrito = [];

            /* /* usuario.compras = usuario.compras.concat(usuario.carrito);
            usuario.carrito  = []; */

            cuentas[usuarioIndex] = usuario;
            localStorage.setItem('login_success', JSON.stringify(usuario));

            localStorage.setItem('usuarios',JSON.stringify(cuentas)); 

            informacionCarrito();
            alert('Compra exitosa!')
        }else{
            console.log('nada por aqui jefe');
        }

        }else{
            console.log('no hay usuario');
        }
    }


    
const mostrarTotalCarrito = (carrito)=> {
    const total = carrito.reduce((sum, item) => sum + item.precio, 0);
    const totalCarrito = document.getElementById('totalCarrito');
    totalCarrito.textContent = `Total : $${total}`;
    };
    

    

document.addEventListener('DOMContentLoaded', function() {

    informacionCarrito();

    const realizarCompras = document.getElementById('botonCompra');
    realizarCompras.addEventListener('click',procesoCompra);

    const logout = document.querySelector('#cerrarSesion');

    logout.addEventListener('click',() =>{
        alert('Hasta pronto!')
        localStorage.removeItem('login_success');
        window.location.href = "login.html";    
    });




})





