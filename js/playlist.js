var favoritos = [] ;
if(localStorage.getItem('playlist') && localStorage.getItem('playlist') != null){
    favoritos = JSON.parse(localStorage.getItem('playlist'));
}
 /*Local atroage es un objeto literal pero solo me deja almacenar strings  */
/*Como solo nos deja guardar strings, por eso hay que hacer lo de json.parse  */
console.log(favoritos)
/recuperostronage va a tener al valor de la propiedad favoritos del local stroage/

var section = document.querySelector ('.lista')
console.log(section)


/* */
/*Si favoritos ers null o cero, no hay items en favoritos, sino queremos que nos muestre lo que hay en favoritos */
console.log(favoritos.length)
if (favoritos == null || favoritos.length == 0){
    section.innerHTML = ' <p>No hay items en favoritos</p>'
} else{ /* Para que se vea la informacion*/
    for (let i = 0; i < 3; i++){
        console.log("valor" + i)
        const URL = `https://api.allorigins.win/raw?url=https://api.deezer.com/track/${favoritos[i]}`; /* lo que yo quiero guardar en el local stroage, es el id de las caciones*/
        
        fetch(URL)
        .then(function(response){
    return response.json();
        }) 

        .then(function(info){
    console.log (info)
    
            section.innerHTML += ` 
            <article>
            
            <img class="img1" src="${info.artist.picture_medium}" alt="" >
            <a href="./detalledeartista.html?id=${info.artist.id}">
            <p class= "artistas3" > ${info.artist.name}</p>
            </a>
            <a href="./detallecanciones.html?id=${info.id}">
             <h3 class="artistas3"> ${info.title}</h3>
             </a>
            
            </article>`
            





                })

} 
}
