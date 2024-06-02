import { mostrarCartas} from "./script.js";
/* import { navbarPlataforma } from "./index.js";
  */
 


export const getJuegoByPlataforma = async(plataforma) =>{

    try{
        
        const response = await fetch("https://api-game-store-32ua.onrender.com/")

        const data = await response.json();
        
    
        const juegosFiltrados = data.juegos.filter(juego => juego.plataformas === plataforma);

        
        mostrarCartas(juegosFiltrados);
    }catch(error){
        console.log(`El error es ${error}`);
    }


}



document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const plataformaNombre = params.get('plataforma');
    
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
    getJuegoByPlataforma(plataformaNombre);
    /* navbarPlataforma(); */
    

  });
  


