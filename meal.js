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
     <div class="card m-2" style="width: 18rem;">
    <img src="${data.meals[a].strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${data.meals[a].strMeal}</h5>
    </div>
  </div> ` ;
  
      oldContent.appendChild(newDiv);
  
   }
  
  }