
let qs = location.search; 
let qsObjLiteral = new URLSearchParams(qs);
let idPersonaje = qsObjLiteral.get('id');

alert(`capturando el id numero ${idPersonaje}`)
/*Buscar el personaje*/

let URL = `https://api.deezer.com/genre/${idPersonaje}`;

fetch(URL).then(function(response) {
    return response.json();
}) .then(function name(data){
    console.log(data);

/*Capturar los elementos del DOM*/
    let etiquetaNombre = document.querySelector('.nombre');
    let etiquetaImg = document.querySelector('img');

/*Darle valor a los elementos*/
etiquetaNombre.innerText = `Nombre: ${data.name}`;
etiquetaEstatus.innerText = `Estatus: ${data.status}`;
etiquetaEspecie.innerText = `Especie: ${data.species}`;
etiquetaImg.src = data.image; 

}) .catch(function(error){
    console.log(error);
});

/*Es logica*/

let favoritos = []; 

/*Recuperar del storage la info*/
let recuperoStorage = localStorage.getItem('favoritos');

if(recuperoStorage != null){
    /*Si recupero el storage y me trae algo que quiero convertirlo en un tipo de dato JS */

    favoritos = JSON.parse(recuperoStorage);
};
let fav = document.querySelector('.fav');

if(favoritos.includes(idPersonaje)){
    fav.innerText = 'Quitar de Fav';
}

fav.addEventListener('click', function(e) {
    e.preventDefault();
    alert("click en el fav")


if (favoritos.includes(idPersonaje)){
/*Eliminar un elemento del array*/

let indice = favoritos.indexOf(idPersonaje);
favoritos.splice(indice, 1)
fav.innerText = 'Agregar a Fav';

}else{
    favoritos.push(idPersonaje);
    fav.innerText = "Quitar de Fav";
}

/*Subir info al storage*/
let favToString= JSON.stringify(favoritos);
localStorage.setItem('favoritos', favToString);
})