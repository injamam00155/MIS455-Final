function api () {
    var searchText = document.getElementById("search").value ;
    var quantity=parseInt (document.getElementById("limit").value);
  
    var url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`; 
  
    fetch (url)
    .then(res => res.json()   )
    .then(data => display(data,quantity)   ); 
  
  // clearing search box and prev. content 
     document.getElementById("search").value = "";
     document.getElementById("limit").value = ""; 
     document.getElementById("container").textContent = "";
  
  }
  
  function display (data,limit){
  
   var oldContent = document.getElementById("container")
   for (var a=0; a<limit; a++){
    
     var newDiv = document.createElement("div");
     newDiv.innerHTML = `

    <div class="card my-4" style="width: 20rem;">
    <img class="card-img-top" src="${data.meals[a].strMealThumb}" alt="Card image cap">
    <div class="card-body ">
      <h5 class="card-title">${data.meals[a].strMeal}</h5>
      <p class="card-text ">${data.meals[a].strInstructions}</p>
    </div>
    <a  href="#" class="btn btn-danger m-2">এটা নিবো</a>
    </div>` ;
  
      oldContent.appendChild(newDiv);
  
   }
  
  }