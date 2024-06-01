 import { getJuegos,mostrarCartas,juegoCard } from "./script.js";
 
 


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



getJuegoByCategoria("Accion");
