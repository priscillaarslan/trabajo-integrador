let results = document.querySelector('.section3');
let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let busqueda = queryStringObj.get('q');
console.log(busqueda)

fetch ('https://api.allorigins.win/raw?url=https://api.deezer.com/search?q=' + busqueda)

    .then(function (response) {
        return response.json();
    })
    .then(function (datos) {
        let buscar = datos.data
        console.log(datos);
        console.log("BUSCAR",buscar.length)
        
        console.log(0<buscar.length)
        if (buscar.length == 0){ 
            results,innerHTML= `
            <img scr="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921" alt="">
            `
        }
        if (buscar.length > 0){
        for (let i = 0; i < buscar.length; i++) {
            
            results.innerHTML += `<article>
            <img scr=${buscar[i].picture}        alt=""   />
            <a href="./detallecanciones.html?Id=${buscar[i].id}"> 
            <p>Name:${buscar[i].title}   </p>
            </a>
            </article>
            `
            }} else{
                results.innerHTML=`
                <h1 class="artistas3">No hay resultados</h1> 
                `
            } 

           
        
    })
    .catch(function (error) {
        console.log(error);
    })




