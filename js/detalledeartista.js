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
        <iframe class="iframe3" src="https://open.spotify.com/embed/track/4gzsuuZypVbxs0Af1LSZyB" width="100%"
          height="80" frameBorder="0" allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
        <iframe class="iframe3" src="https://open.spotify.com/embed/track/2JPLbjOn0wPCngEot2STUS" width="100%"
          height="80" frameBorder="0" allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
        <iframe class="iframe3" src="https://open.spotify.com/embed/track/2vmfvSoZBFAt9hhRoEByLi" width="100%"
          height="80" frameBorder="0" allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
        <iframe class="iframe3" src="https://open.spotify.com/embed/track/4r9jkMEnArtWGH2rL2FZl0" width="100%"
          height="80" frameBorder="0" allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
        <iframe class="iframe3" src="https://open.spotify.com/embed/track/48AJSd42lXpicsGqcgopof" width="100%"
          height="80" frameBorder="0" allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
      </article>`




      