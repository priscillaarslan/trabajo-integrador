
let recuperoStorage = localStorage.getItem('favoritos');
let favoritos = JSON.parse(recuperoStorage);


let section = document.querySelector ('.lista')

let personajesFacoritos = '';

if (favoritos == null || favoritos.length == 0){
    section.innerHTML = ' <p>No hay items en favoritos</p>'


for (let i =0; i < favoritos.length; i++){
    console.log("valor" + i)
    const URL = `https://api.deezer.com/track/${favoritos[i]}`;

    fetch(URL)
    .then(function(response){
return response.json();
    }) 