var recipeArray = [];
var xhr = new XMLHttpRequest();
var recipeIds = [];
xhr.open("GET", "http://food2fork.com/api/search?key=1163698b40a362855b8b3cecccdd37f8&q=shredded%20chicken,spinach&sort=r", true);
xhr.send();
xhr.onloadend = function() {
  console.log("hi1");
  var searchOutput = JSON.parse(xhr.responseText);
  console.log("hi2");
  console.log(searchOutput);
  for (var i = 0; i < 5; i++) {
    recipeIds.push(searchOutput.recipes[i].recipe_id);
  }
  recipeIds.forEach(function(recipeId) {
    xhr.open("GET", "http://food2fork.com/api/get?key=1163698b40a362855b8b3cecccdd37f8&rId=" + recipeId, true);
    xhr.send();
    recipeArray.push(xhr.response);
    return recipeArray;
  });
}
