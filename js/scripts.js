var BottomShelf = function(){
  this.ingredient1 = "";
  this.ingredient2 = "";
  this.chosenRecipe = {};
  this.recipeArray = [];
};

BottomShelf.prototype.recipeAdd = function() {
  var kebabs = new Recipe("http://static.food2fork.com/30716_RecipeImage_620x413_beef_vegetable_shish_kebabs_2dc9e.jpg", "Chow", "http://www.chow.com",  "http://www.chow.com/recipes/30716-beef-and-vegetable-shish-kebabs", "Beef and Vegetable Shish Kebabs", ["1 tablespoon kosher salt", "2 teaspoons packed light brown sugar", "1 teaspoon finely grated lemon zest (from about 1 medium lemon)", "1/2 teaspoon ground cumin", "1/2 teaspoon paprika", "1/4 teaspoon freshly ground black pepper", "1/4 teaspoon ground coriander", "1/3 cup olive oil", "2 tablespoons tomato paste", "5 medium garlic cloves, finely chopped", "1 (1-1/2 to 2-pound) sirloin steak, about 1 inch thick", "8 ounces cremini mushrooms", "1 pound zucchini", "1 medium red onion", "10 (12-inch) wooden or metal skewers"]);
  this.recipeArray.push(kebabs);

  var bourguignonne = new Recipe("http://static.food2fork.com/beefdish3_300269b1efe.jpg", "Real Simple", "http://realsimple.com/", "http://www.realsimple.com/food-recipes/browse-all-recipes/quick-beef-bourguignonne-10000001699374/index.html", "Quick Beef Bourguignonne", ["1 tablespoon olive oil", "1 1/4 pounds sirloin steak, cut into 1-inch pieces", "1 kosher salt and pepper", "1 10-ounce package sliced mushrooms", "2 cups 16-ounce package frozen pearl onions", "1 red wine", "1/2 cup 10.75-ounce can Campbells Golden Mushroom soup\n"]);
  this.recipeArray.push(bourguignonne);

  var chickenPappardelle = new Recipe("http://static.food2fork.com/354130a3e3.jpg", "Epicurious", "http://www.epicurious.com/", "http://www.epicurious.com/recipes/food/views/Chicken-Breasts-with-Zucchini-Pappardelle-354130", "Chicken Breasts with Zucchini Pappardelle", ["1 pound zucchini, trimmed", "2 garlic cloves", "4 boneless chicken breast halves with skin (1 1/2 pounds) ", "1 tablespoon olive oil", "2 tablespoons water", "1 cup torn basil leaves"]);
  this.recipeArray.push(chickenPappardelle);

  var chickenMarsala = new Recipe("http://static.food2fork.com/47653a1af.jpg", "All Recipes", "http://allrecipes.com/", "http://allrecipes.com/Recipe/Chicken-Marsala/Detail.aspx", "Chicken Marsala", ["1/4 cup all-purpose flour for coating", "1/2 teaspoon salt", "1/4 teaspoon ground black pepper", "1/2 teaspoon dried oregano", "4 skinless, boneless chicken breast halves - pounded 1/4 inch thick", "4 tablespoons butter", "4 tablespoons olive oil", "1 cup sliced mushrooms", "1/2 cup Marsala wine", "1/4 cup cooking sherry"]);
  this.recipeArray.push(chickenMarsala);

  var zucchiniBalls = new Recipe("http://static.food2fork.com/Kolokythokeftedes(ZucchiniandFetaBalls)150043120830.jpg", "Closet Cooking", "http://closetcooking.com/", "http://www.closetcooking.com/2009/09/kolokythokeftedes-zucchini-and-feta.html", "Kolokythokeftedes (Zucchini and Feta Balls)", ["2 cups zucchini, grated and squeezed", "1/4 cup of feta, crumbled", "1 splash ouzo (optional)", "1 clove garlic, chopped", "2 green onions, sliced", "1 handful herbs (such as mint, dill and parsley), chopped", "1 egg, lightly beaten", "salt and pepper to taste", "flour (I used whole wheat)", "breadcrumbs (I use whole wheat)", "oil for frying\n"]);
  this.recipeArray.push(zucchiniBalls);

  var mushroomSalad = new Recipe("http://static.food2fork.com/Warm2BMushroom2Band2BRoasted2BAsparagus2BWild2BRice2BSalad2Bwith2Band2BFeta2B5002B71693724de9b.jpg", "Closet Cooking", "http://closetcooking.com/", "http://www.closetcooking.com/2011/06/warm-mushroom-and-wild-rice-salad-with.html", "Warm Mushroom, Roasted Asparagus and Wild Rice Salad with Feta", ["1/2 cup wild rice", "1 1/4 cups broth, chicken or vegetable", "1 tablespoon oil", "1 onion, diced", "2 cloves garlic, chopped", "8 ounces mushrooms, cleaned and sliced", "salt and pepper to taste", "1 tablespoon oil", "salt and pepper to taste", "1 pound asparagus, trimmed", "1 handful dill, chopped", "1/4 cup balsamic vinaigrette", "4 cups salad greens", "1/4 cup feta or goat cheese or blue cheese, crumbled\n"]);
  this.recipeArray.push(mushroomSalad);
}

BottomShelf.prototype.ingredientCheck = function(ingredient1, ingredient2) {
  if (ingredient1 === "Select" || ingredient2 === "Select") {
    return false;
  }
  else if (ingredient1 === "Beef" && ingredient2 === "Zucchini") {
    var returnRecipe = {};
    var array = this.recipeArray;
    for (var index = 0; index < this.recipeArray.length; index +=1) {
      if (array[index].recipeTitle === "Beef and Vegetable Shish Kebabs") {
      returnRecipe = array[index]
      return returnRecipe;
      }
    }
  } else if (ingredient1 === "Beef" && ingredient2 === "Mushrooms") {
    var returnRecipe = {};
    var array = this.recipeArray;
    for (var index = 0; index < this.recipeArray.length; index +=1) {
      if (array[index].recipeTitle === "Quick Beef Bourguignonne") {
      returnRecipe = array[index]

      return returnRecipe;
      }
    }
  } else if (ingredient1 === "Chicken" && ingredient2 === "Zucchini") {
    var returnRecipe = {};
    var array = this.recipeArray;
    for (var index = 0; index < this.recipeArray.length; index +=1) {
      if (array[index].recipeTitle === "Chicken Breasts with Zucchini Pappardelle") {
      returnRecipe = array[index]

      return returnRecipe;
      }
    }
  } else if (ingredient1 === "Chicken" && ingredient2 === "Mushrooms") {
    var returnRecipe = {};
    var array = this.recipeArray;
    for (var index = 0; index < this.recipeArray.length; index +=1) {
      if (array[index].recipeTitle === "Chicken Marsala") {
      returnRecipe = array[index]

      return returnRecipe;
      }
    }
  } else if (ingredient1 === "Vegetarian" && ingredient2 === "Zucchini"){
    var returnRecipe = {};
    var array = this.recipeArray;
    for (var index = 0; index < this.recipeArray.length; index +=1) {
      if (array[index].recipeTitle === "Kolokythokeftedes (Zucchini and Feta Balls)") {
      returnRecipe = array[index]

      return returnRecipe;
      }
    }
  } else if (ingredient1 === "Vegetarian" && ingredient2 === "Mushrooms"){
    var returnRecipe = {};
    var array = this.recipeArray;
    for (var index = 0; index < this.recipeArray.length; index +=1) {
      if (array[index].recipeTitle === "Warm Mushroom, Roasted Asparagus and Wild Rice Salad with Feta") {
      returnRecipe = array[index]

      return returnRecipe;
      }
    }
  } else {}
}


var Recipe = function(img_url, publisher, publisher_url, source_url, recipeTitle, ingredient_list) {
    this.img_url = img_url;
    this.publisher = publisher;
    this.publisher_url = publisher_url;
    this.source_url = source_url;
    this.recipeTitle = recipeTitle;
    this.ingredient_list = ingredient_list;
};

var checkInputs = function(newBottomShelf) {
  if (newBottomShelf.ingredientCheck(newBottomShelf.ingredient1, newBottomShelf.ingredient2) === false) {
    $(".select-reminder").show();
    return false;
  } else {
    return true;
  }
}

var displayRecipe = function(newBottomShelf) {
  newBottomShelf.chosenRecipe = newBottomShelf.ingredientCheck(newBottomShelf.ingredient1, newBottomShelf.ingredient2);
  $(".select-reminder").hide();
  $(".recipe-display").show();
  $(".ingredient_list").empty();
  $("img#recipe-image").attr("src", newBottomShelf.chosenRecipe.img_url);
  $("#recipe-link").attr("href", newBottomShelf.chosenRecipe.source_url);
  $("#recipe-title").text(newBottomShelf.chosenRecipe.recipeTitle);
  $("#publisher-link").attr("href", newBottomShelf.chosenRecipe.publisher_url);
  $("#publisher").text(newBottomShelf.chosenRecipe.publisher);
  newBottomShelf.chosenRecipe.ingredient_list.forEach(function(ingredient) {
    $(".ingredient_list").append("<li class='list-result'>" + ingredient + "</li>");
  });
}

$(document).ready(function() {
  var newBottomShelf = new BottomShelf();
  newBottomShelf.recipeAdd();

  //clicks on an li with a parent ul #ingredient 1
    //we take the value of that li
    //put the value into span class selected-ingredient
  $('.ingredient1').click(function() {
    $('span#selected-ingredient1').text($(this).attr('value'));
  });

  $('.ingredient2').click(function() {
    $('span#selected-ingredient2').text($(this).attr('value'));
  });

  // $('.ingredient3').click(function() {
  //   $('span#selected-ingredient3').text($(this).attr('value'));
  // });
  $("#find-recipes").click(function() {
    newBottomShelf.ingredient1 = $('span#selected-ingredient1').text();
    newBottomShelf.ingredient2 = $('span#selected-ingredient2').text();
    if (checkInputs(newBottomShelf)) {
      displayRecipe(newBottomShelf);
    } else {}
  });
});
// }
// newBottomShelf.chosenRecipe = newBottomShelf.ingredientCheck(newBottomShelf.ingredient1, newBottomShelf.ingredient2);
// $(".recipe-display").show();
// $(".ingredient_list").empty();
// $("img#recipe-image").attr("src", newBottomShelf.chosenRecipe.img_url);
// $("#recipe-link").attr("href", newBottomShelf.chosenRecipe.source_url);
// $("#recipe-title").text(newBottomShelf.chosenRecipe.recipeTitle);
// $("#publisher-link").attr("href", newBottomShelf.chosenRecipe.publisher_url);
// $("#publisher").text(newBottomShelf.chosenRecipe.publisher);
// newBottomShelf.chosenRecipe.ingredient_list.forEach(function(ingredient) {
//   $(".ingredient_list").append("<li class='list-result'>" + ingredient + "</li>");
// });
// alert(newBottomShelf.recipeArray);
// alert(newBottomShelf.recipeArray[1]);
