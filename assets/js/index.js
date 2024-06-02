

const mostrarPlataformas = ()=>{


    const contenedorPlataformas = document.getElementById("plataformasAbrir");
    contenedorPlataformas.innerHTML = "";

    const plataformaHTML = `
    <div class="col consolas">
        <a href="#">
        <img src="assets/img/steam.png" alt="Steam" width="120px" >
        </a>
    </div>
    <div class="col consolas">
        <a href="#">
        <img src="assets/img/playstation.svg" alt="Playstation" width="120px">
        </a>
    </div>
    <div class="col consolas">
        <a href="#">
        <img src="assets/img/xbox.svg" alt="Xbox" width="120px">
        </a>
    </div>
    <div class="col consolas">
        <a href="#">
        <img src="assets/img/nintendo-switch.svg" alt="Switch" width="120px">
        </a>
    </div>
    
    `

    contenedorPlataformas.innerHTML = plataformaHTML;

    document.querySelectorAll('.consolas a img').forEach((imagen)=>{

        imagen.addEventListener('click',(event)=>{
            const nombrePlataforma = event.currentTarget.getAttribute('alt');
            window.location.href = `plataforma.html?plataforma=${encodeURIComponent(nombrePlataforma)}`;
            console.log(nombrePlataforma);
            event.preventDefault;
        })
    })


}



export const navbarPlataforma = ()=>{

    document.querySelectorAll('.plataformaEnlace').forEach((plataformaEnlace)=>{
        
        plataformaEnlace.addEventListener('click',(event)=>{
            event.preventDefault();
            
            const imagen = event.currentTarget.querySelector('img');
            const nombrePlataforma = imagen.getAttribute('alt');
            const nuevaURL = `plataforma.html?plataforma=${encodeURIComponent(nombrePlataforma)}`;

            window.location.href = nuevaURL;
            console.log(nombrePlataforma);
                
        });
        
    });


}


/* function checkLogin() {
    if (localStorage.getItem('loggedIn') !== true) {
        console.log('la conexion es correcta jefaso');
        window.location.href = 'login.html';
    }else{
        console.log('estas on');
    }
}

 */

document.addEventListener("DOMContentLoaded", () => {
    /* if (document.getElementById("plataformasAbrir")) {
        mostrarPlataformas();
    } */
    /* navbarPlataforma(); */
   /*  checkLogin (); */


})
