
let qs = location.search;
let qsOL = new URLSearchParams(qs)
let id = qsOL.get("idGenero")


let generos = document.querySelector("#generosid")
let artist = document.querySelector('.contenedorGenero')

let url = `https://api.allorigins.win/raw?url=https://api.deezer.com/genre/${id}/`; 
fetch(url)
.then(function(response){
    console.log(response)
    return response.json();
})
.then(function(data){
console.log(data)
document.querySelector(".contenedorGenero").innerHTML +=`<h2>Genero: ${data.name}</h2>`
})

.catch(function(error){
    console.log(error);
})


let urlartistas = `https://api.allorigins.win/raw?url=https://api.deezer.com/genre/${id}/artists`; 
fetch(urlartistas)
.then(function(response){
    console.log(response)
    return response.json();
})
.then(function(data){
console.log("artistas",data.data)
for (let i = 0; i <= 6; i++){
    document.querySelector('.artistas').innerHTML += `
    <a href="./detalledeartista.html?idGenero=${data.data[i].id}">${data.data[i].name}"></a>
    <h2 class="artistas1">Artista:</h2>`
}
})

.catch(function(error){
    console.log(error);
})
