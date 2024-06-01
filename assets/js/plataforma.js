import { mostrarCartas,juegoCard } from "./script.js";
 
 


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
    getJuegoByPlataforma(plataformaNombre);
    

  });
  


