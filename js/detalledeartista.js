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
        let section = document.querySelector(".detalledeartista");
  console.log(section)
      
        

            
        section.innerHTML += 
        `<article class="detalleartistas">
        <a href="./detalledeartista.html?id=${data.id}">
          <h3 class="artistas">${data.name} </h3>
        </a>
        <img class="img5" src="${data.picture_medium}">
        <br>
      </article>`

  

      
    
  
  
})
.then(function(){
  fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${id}/albums`)
   

    .then(function (response) {
        console.log(response);
        return response.json();
      })

      .then(function (data) {
        console.log(data);
        let section = document.querySelector(".detalledeartista");
  console.log(section)
      
        
for (let i = 0; i < 5; i++) {
  section.innerHTML += 
        `
        <a href="./detalledeldisco.html?id=${data.data[i].id}">
          <h3 class="artistas">${data.data[i].title} </h3>
        </a>
        
        <br>
     `
  
  
}
            
        
  

      
    
  
  
})
})
.catch(function(error) {
  console.log(error);
})