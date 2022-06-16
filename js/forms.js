
let formulario = document.querySelector('form');
let input = document.querySelector('.input');

 

//eventos y condicionales//
formulario.addEventListener("submit", function (event) {
    event.preventDefault()
    if(input.value.length == 0){
        alert("el campo no puede estar vacio")
    } else {
        formulario.submit()
    }
})