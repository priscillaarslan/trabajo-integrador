let results = document.querySelector('.section3');
let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let busqueda = queryStringObj.get('q');
console.log(busqueda)

let Artistas = `https://api.allorigins.win/raw?url=https://api.deezer.com/search/artist?q=${busqueda}`




fetch(Artistas)
    .then(function (response) {
        return response.json();
    })
    .then(function (datos) {
        let buscar = datos.data

      



        if (buscar.length > 0) {
            for (let i = 0; i <= 2; i++) {

                results.innerHTML += `<article>
                <img class="img1" src=${buscar[i].picture}>
            <a href="./detalledeartista.html?Id=${buscar[i].id}"> 
            <p class="artistas4">Name:  ${buscar[i].name}   </p>
            </a>
            </article>
            `
            }
        } else if (buscar.length == 0) {
            results.innerHTML = `
                <h1 class="artistas3">No hay resultados</h1> 
                `
        }



    })
    .catch(function (error) {
        console.log(error);
    })






    //Tracks

    let tracks = `https://api.allorigins.win/raw?url=https://api.deezer.com/search/track?q=${busqueda}`

    fetch(tracks)
    .then(function (response) {
        return response.json();
    })
    .then(function (datos) {
        let buscar = datos.data

        console.log(datos);



        if (buscar.length > 0) {
            for (let i = 0; i <= 5; i++) {

                results.innerHTML += `<article>
                <img class="img1" src=${buscar[i].album.cover}>
            <a href="./detallecanciones.html?Id=${buscar[i].id}"> 
            <p class="artistas4">Name:  ${buscar[i].title}   </p>
            </a>
            </article>
            `
            }
        } else if (buscar.length == 0) {
            results.innerHTML = `
                <h1 class="artistas3">No hay resultados</h1> 
                `
        }



    })
    .catch(function (error) {
        console.log(error);
    })


  