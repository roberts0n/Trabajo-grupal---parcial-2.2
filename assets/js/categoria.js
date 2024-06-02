import { mostrarCartas} from "./script.js";
import { navbarPlataforma } from "./index.js";
 


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
    getJuegoByCategoria(categoriaNombre);
    navbarPlataforma();
    

  });
  



