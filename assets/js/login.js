

document.getElementById('loginForm').addEventListener('submit',function(event){

    event.preventDefault();

    const email = document.querySelector('#correo').value;
    const contraseña = document.querySelector('#contraseña').value;

    const cuentas = JSON.parse(localStorage.getItem('usuarios')) || []

    const validarUsuario = cuentas.find(cuenta => cuenta.email === email && cuenta.contraseña === contraseña);

    if(!validarUsuario){
        return alert('Usuario/Contraseña incorrectos');
    }   
    alert(`Bienvenido ${validarUsuario.nombre} !`);
    localStorage.setItem('login_success', JSON.stringify(validarUsuario))
    window.location.href = '/index.html'
   
    
})

const usuario = JSON.parse(localStorage.getItem('login_success')) || false;
if (usuario) {
    alert('Ya has iniciado sesion');
    window.location.href = '/index.html';
}

