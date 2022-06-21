let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let id = queryStringObj.get("id");


let url = `https://api.allorigins.win/raw?url=https://api.deezer.com/track/${id}/`; 
fetch(url)
  .then(function (response) {
    console.log(response);
    return response.json();
  })
  .then(function (data) {
    let section = document.querySelector(".section4");
    console.log(data);

    section.innerHTML += 
    `<article class="article4">
<ul>
<a href="./detalledecanciones.html?id=${data.id}"> <li class="listadetalle5">${data.title}</li> </a>
</ul>
<a href="./detalledeartista.html?id=${data.artist.id}">
  <p class="par"> - ${data.artist.name}</p>
</a>
<a href="./detalledeldisco.html?id=${data.album.id}">
  <p class="par"> - ${data.album.title}</p>
  <img src="${data.album.cover_medium}" alt="">
</a></a>
<iframe title="deezer-widget" src="https://api.allorigins.win/raw?url=https://api.deezer.com/track/${id}" width="100%" height="300" frameborder="0" allowtransparency="true" allow="encrypted-media; clipboard-write"></iframe>
<br>
<label class="agregar" for="terms">

  <button class="agregar" >
    Agregar cancion a mi playlist</button></label>
</article>
<br>
<br>
<br>
`;


    let button = document.querySelector(".agregar");
    let lista = [];

    if (
      localStorage.getItem("playlist") &&
      localStorage.getItem("playlist") != null
    ) {
      lista = JSON.parse(localStorage.getItem("playlist"));
    }
    if (lista.includes(data.id)) {
      button.innerHTML = "sacar de mi playlist";
    }
    button.addEventListener("click", function () {
      if (lista.includes(data.id)) {
        lista.splice(lista.indexOf(data.id), 1);
        button.innerHTML = "Agregar a mi playlist";
        console.log(lista);
      } else {
        lista.push(data.id);
        button.innerHTML = "sacar de mi playlist";
        console.log(lista);
      }
      let guardar = JSON.stringify(lista);
      localStorage.setItem("playlist", guardar);
    });
  })

  .catch(function(error){
    console.log(error);
})


