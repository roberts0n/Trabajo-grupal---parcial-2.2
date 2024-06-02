import { mostrarCartas} from "./script.js";
/* import { navbarPlataforma } from "./index.js"; */
 


export const getJuegoByCategoria = async(categoria) =>{

    try{
        
        const response = await fetch("https://api-game-store-32ua.onrender.com/")

        const data = await response.json();
        
    
        const juegosFiltrados = data.juegos.filter(juego => juego.categoria === categoria);

        
        mostrarCartas(juegosFiltrados);
    }catch(error){
        console.log(`El error es ${error}`);
    }


}



document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const categoriaNombre = params.get('categoria');
    
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
    getJuegoByCategoria(categoriaNombre);
   /*  navbarPlataforma();
     */

  });
  



