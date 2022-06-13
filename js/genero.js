let url = "https://api.allorigins.win/raw?url=https://api.deezer.com/genre/"


fetch(url)
  .then(function(response){
    return response.json();
  })
  .then(function(generos){
      let contenedor = document.querySelector(".ulgenero");
   
    for (let i = 0; i < generos.data.length; i++) {
      contenedor.innerHTML += `<li>
                                  <a href="./Detalledegenero.html?idGenero=${generos.data[i].id}">${generos.data[i].name}</a>
                              </li>` 
    }
})

.catch(function(error){
    console.log(error);
})

