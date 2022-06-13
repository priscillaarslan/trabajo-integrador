


let qs = location.search;

let qsOL = new URLSearchParams(qs)
let id = qsOL.get("idGenero")

let url = `https://api.allorigins.win/raw?url=https://api.deezer.com/genre/${id}`;

fetch(url)
.then(function(response){
    return response.json();
})
.then(function(data){
console.log(data)
document.querySelector(".contenedorGenero").innerHTML +=`<h2 class="Genero" >Genero: ${data.name}</h2>`
})

.catch(function(error){
    console.log(error);
})