/* const registro = document.querySelector('#registroForm')
registroForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    const nombre = document.querySelector('#usuario').value;
    const email = document.querySelector('#correo').value;
    const contraseña = document.querySelector('#contraseña').value;

    const cuentas = JSON.parse(localStorage.getItem('usuarios')) || [];
    const ifUsuarioRegistrado = cuentas.find(cuenta => cuenta.email === email);
    if (ifUsuarioRegistrado){
        return alert('Ya esta registrado este correo.')
    } 
    cuentas.push({nombre : nombre , email : email , contraseña : contraseña});
    localStorage.setItem('usuarios',JSON.stringify(cuentas));
    alert ('Registro exitoso jefe')
    window.location.href = 'login.html'


});
 */

document.getElementById('registroForm').addEventListener('submit',function(event){

    event.preventDefault();
    const nombre = document.querySelector('#usuario').value;
    const email = document.querySelector('#correo').value;
    const contraseña = document.querySelector('#contraseña').value;

    const cuentas = JSON.parse(localStorage.getItem('usuarios')) || [];
    const ifUsuarioRegistrado = cuentas.find(cuenta => cuenta.email === email);
    if (ifUsuarioRegistrado){
        return alert('Ya esta registrado este correo.')
    } 
    cuentas.push({nombre : nombre , email : email , contraseña : contraseña});
    localStorage.setItem('usuarios',JSON.stringify(cuentas));
    alert ('Registro exitoso jefe')
    window.location.href = 'login.html'
})