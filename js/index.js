// Canciones mas esuchadas

let url = ('https://api.allorigins.win/raw?url=https://api.deezer.com/chart/0/tracks');

fetch(url)

  .then(function (respuesta) {
    return respuesta.json()
  })
  .then(function (datos) {
    console.log(datos.data)
    let artistas = datos.data

    for (let i = 0; i <= 4; i++) {



      document.querySelector('.section1').innerHTML += ` 
<article>

<img class="img1" src=${artistas[i].album.cover} alt="" >
<a href="./detalledeartista.html?id=${artistas[i].id}">
<p class= "artistas3" > ${artistas[i].artist.name}</p>
</a>
<a href="./detallecanciones.html?id=${artistas[i].id}">
 <h3 class="artistas3"> ${artistas[i].title}</h3>
 </a>

    

</article>`


    }

  })

  .catch(function (error) {
    console.log(error);
  })


// Albumes mas escuchados
let url2 = ('https://api.allorigins.win/raw?url=https://api.deezer.com/chart/0/albums');

fetch(url2)

  .then(function (respuesta) {
    return respuesta.json();
  })
  .then(function (datos) {
    console.log(datos.data)
    let almbums = datos.data
    for (let i = 0; i <= 4; i++) {

      document.querySelector('.section2').innerHTML += `
            <article>
            <img class="img1" src=${almbums[i].cover}>
            <a href="./detalledeldisco.html?id=${almbums[i].id}">
              <p class="artistas3"> ${almbums[i].title}</p>
              
            </a>

            
            
            
            `

          


    }
  })


  .catch(function (error) {
    console.log(error);
  })



//Artistas mas esuchados 
let url3 = ('https://api.allorigins.win/raw?url=https://api.deezer.com/chart/0/artists');

fetch(url3)

  .then(function (respuesta) {
    return respuesta.json()
  })
  .then(function (datos) {
    let artistas = datos.data
    console.log(datos.data)
    for (let i = 0; i <= 4; i++) {

      document.querySelector('.section14').innerHTML += `
      <article>
      <img class="img1" src=${artistas[i].picture}>
      <a href="./detalledeartista.html?id=${artistas[i].id}">
        <h3 class="artistas3"> ${artistas[i].name}</h3>
      </a>
     
      
      
      
      
      `

    }
  })