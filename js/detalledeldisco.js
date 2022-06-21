let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let id = queryStringObj.get("id");
console.log(id);

fetch (`https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/${id}`)
.then (function(response){
    return response.json()
})
.then(function(data){
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
    let canciones = ""

    
    for (let i = 0; i < data.tracks.data.length; i++) {
        canciones += `<a href="./detalledecanciones.html?id=${data.tracks.data[i].id}"><li class="listacanciones">${data.tracks.data[i].title}</li></a>`;
    }

    let section = document.querySelector(".section6");
    section.innerHTML = `<article class="section10">
      
     
    <p class="ppp">
        Detalle de album <br />
        <img src="" alt="">
     <br><a class="ppp" href="./detalledeartista.html">${data.artist.name}</a><br>
     <br><a class="ppp" href="./Detalledegenero.html">Genero:${data.album.name}</a> <br>
    <br> <a class="ppp" href="./detalledeldisco.html">${data.title}</a> <br>
     <br />
     ${data.releasedate}
    
   </p>
   <li class="listacanciones">
  ${canciones}
   </li>
 </article>
 `
})

