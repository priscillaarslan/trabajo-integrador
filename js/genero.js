let url = "https://api.allorigins.win/raw?url=https://api.deezer.com/genre/"


fetch(url)
  .then(function(response){
    return response.json();
  })
  .then(function(generos){
      let contenedor = document.querySelector(".ulgenero");
   
    for (let i = 0; i<6; i++ ) {
      contenedor.innerHTML += `<li>
                                  <a class="letrasgenero" href="./Detalledegenero.html?idGenero=${generos.data[i].id}">${generos.data[i].name} 
                                  <img class="fotosgenero" src=${generos.data[i].picture_medium} alt="${generos.data[i].title}">
                                  </a>
                              </li>` 
    }
})

.catch(function(error){
    console.log(error);
})

