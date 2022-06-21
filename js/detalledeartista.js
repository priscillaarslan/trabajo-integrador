let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let id = queryStringObj.get("id");
console.log(id);

    fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${id}`)

    .then(function (response) {
        console.log(response);
        return response.json();
      })

      .then(function (data) {
        console.log(data);
        let section = document.querySelector(".detalledeartistas");
    
        section.innerHTML = `<article class="detalleartistas">
        <a href="./detalledeartista.html">
          <h3 class="artistas">Bad Bunny | Genero: Trap </h3>
        </a>
        <img class="img5" src="./img/badbunnyd.jpeg">
        <br>
      </article>`




      
      