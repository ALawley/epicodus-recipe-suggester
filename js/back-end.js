var recipeArray = [];
var recipeIds = [];
var searchOutput = {};
var xhr = new XMLHttpRequest();
xhr.open("GET", "http://food2fork.com/api/search?key=1163698b40a362855b8b3cecccdd37f8&q=shredded%20chicken,spinach&sort=r", true);
xhr.send();
xhr.onloadend = function() {
  searchOutput = JSON.parse(xhr.responseText);
  var array = searchOutput.recipes;
  for (var i = 0; i < 5; i++) {
    recipeIds.push(array[i].recipe_id);
  }
  console.log(recipeIds);
  recipeIds.forEach(function(recipeId) {
    xhr.open("GET", "http://food2fork.com/api/get?key=1163698b40a362855b8b3cecccdd37f8&rId=" + recipeId, true);
    xhr.send();
    recipeArray.push(xhr.response);
  });
  debugger;
  return recipeArray;
}
