var searchOuput = {};
var xhr = new XMLHttpRequest();
xhr.open("GET", "http://food2fork.com/api/search?key=1163698b40a362855b8b3cecccdd37f8&q=shredded%20chicken,spinach&sort=r", false);
xhr.send();
searchOutput = JSON.parse(xhr.responseText);
var recipeIds = [];
for (var i = 0; i < 5; i++) {
  recipeIds.push(searchOutput.recipes[i].recipe_id);
}
recipeIds.forEach(function(recipeId) {
  xhr.open("GET", "http://food2fork.com/api/get?key=1163698b40a362855b8b3cecccdd37f8&rId=" + recipeId, false);
  xhr.send();
  console.log(xhr.responseText);
});
