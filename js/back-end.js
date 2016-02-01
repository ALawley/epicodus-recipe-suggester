var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
  if(xhr.readyState ===4) {
    var recipes = JSON.parse(xhr.response); 
    var recipeIds = [];
    for (var i = 0; i < 5; i++) {
      recipeIds.push(recipes[i].recipe_id);
    }
    console.log(recipeIds);
  }
};
xhr.open("GET", "http://food2fork.com/api/search?key=8372f42fa276d8c0a7a8ed7569bfb408&q=shredded%20chicken,spinach&sort=r", false);
xhr.send();
