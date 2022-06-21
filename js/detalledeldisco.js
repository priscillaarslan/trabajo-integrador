let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let id = queryStringObj.get("id");
console.log(id);

fetch (`https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/${id}`)
.then (function(response){
    return response.json()
}).then(function(data){
    console.log(data);

    let generos = `Este disco no tiene generos asignados`
    for (let i = 0; i < data.genres.data.length; i++) {
        if (i==0) {
            generos = `<a href="./detalledeldisco.html?id=${data.genres.data[i].id}">${data.genres.data[i].name}</a>`;
        } else{
            generos += `, <a href="./detalledeldisco.html?id=${data.genres.data[i].id}">${data.genres.data[i].name}</a>`;
        }   
    } 
    console.log(generos);

    let canciones = ''
    for (let i = 0; i < data.tracks.data.length; i++) {
        canciones += `<a href="./detalledecanciones.html?id=${data.tracks.data[i].id}"><li class="listacanciones">${data.tracks.data[i].title}</li></a>`;
    }

    let section = document.querySelector(".section6");
    section.innerHTML = `<article class="section10">
     
    <p class="ppp">
        Detalle de album <br />
        <img src="" alt="">
     <br><a class="ppp" href="./detalledeartista.html">Artista: Ozuna</a><br>
     <br><a class="ppp" href="./Detalledegenero.html">Genero: reggaeton</a> <br>
    <br> <a class="ppp" href="./detalledeldisco.html">Album: Aura</a> <br>
     <br />
     Fecha de Publicacion: 2018
    
   </p>
   <li class="listacanciones">
     <ol>Aura </ol>
     <ol>Me dijeron </ol>
     <ol>Vaina loca</ol>
     <ol> Devuelveme </ol>
     <ol>Quiero mas </ol>
     <ol>Tu olor</ol>
     <ol>Ibiza </ol>
     <ol>Escape </ol>
     <ol>Pasado y presente </ol>
     <ol>Aunque me porte mal</ol>
     <ol>Sigueme los pasos</ol>
     <ol>Hola</ol>
     <ol>Comentale</ol>
   </li>
 </article>
 `

 .catch(function(error) {
    console.log(error);
})

