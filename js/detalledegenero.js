
let qs = location.search; /*location es un objeto literal. el .search es todo lo que esta en la querystring y esta en forma de string. */
let qsOL = new URLSearchParams(qs) /*aca estamos declarando una nueva variable y lo estamos declarando a un metodo que se llama urlserach params; este metodo convierte ese string clde la query string en un objeto literal */
let id = qsOL.get("idGenero") /*guardamos la propiedad id genero del objeto literal id qsol */
console.log(id)

let generos = document.querySelector("#generosid")
let artist = document.querySelector('.contenedorGenero')

let url = `https://api.allorigins.win/raw?url=https://api.deezer.com/genre/${id}/`; 
fetch(url)
.then(function(response){
    return response.json();
})
.then(function(data){
console.log(data)
document.querySelector(".contenedorGenero").innerHTML +=`<h2 class="generost"> Genero: ${data.name}</h2>`

let urlartistas = `https://api.allorigins.win/raw?url=https://api.deezer.com/genre/${id}/artists`; 
fetch(urlartistas)
.then(function(response){
    return response.json();
})
.then(function(data){
console.log("artistas",data.data)
for (let i = 0; i < data.data.length; i++){
    document.querySelector('.artistas').innerHTML += ` 
    <div class="divartistas" ><img class="imagenesartistas" src="${data.data[i].picture}" alt=""></div>
    <a class="divartistas" href="./detalledeartista.html?idGenero=${data.data[i].id}">${data.data[i].name}</a>`
}
})
})

.catch(function(error){
    console.log(error);
})
