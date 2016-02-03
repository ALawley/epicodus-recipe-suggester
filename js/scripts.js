var BottomShelf = function(){
  this.ingredient1 = "";
  this.ingredient2 = "";
  this.chosenRecipe = {};
  this.recipeArray = [];
};

BottomShelf.prototype.recipeAdd = function() {
  var teriyakiBeef = new Recipe("http://hostedmedia.reimanpub.com/TOH/Images/Photos/37/300x300/exps33521_SD955952D19.jpg", "Taste of Home", "http://www.tasteofhome.com",  "http://www.tasteofhome.com/recipes/teriyaki-zucchini-and-onion", "Teriyaki Beef", ["zucchini", "onion", "butter", "teriaki", "sesame seeds (optional)"]);
  this.recipeArray.push(teriyakiBeef);

  var stroganoff = new Recipe("http://foodnetwork.sndimg.com/content/dam/images/food/fullset/2012/11/12/0/FN_Paula-Deen-Beef-Stroganoff_s4x3.jpg.rend.sni12col.landscape.jpeg", "food network", "http://www.foodnetwork.com", "http://www.foodnetwork.com/recipes/paula-deen/beef-stroganoff-recipe.html", "Beef Stroganoff", ["beef", "flour", "olive oil", "butter", "onion", "mushrooms", "beef broth", "cream of mushroom", "pepper", "sour cream", "egg noodle"]);
  this.recipeArray.push(stroganoff);

  var risotto = new Recipe("http://cdn-image.myrecipes.com/sites/default/files/styles/300x300/public/image/recipes/sl/12/03/chicken-risotto-spring-vegetables-sl-x.jpg?itok=2yrT1ExR", "My Recipes", "http://www.myrecipes.com", "http://www.myrecipes.com/recipe/chicken-risotto-spring-vegetables", "Chicken Risotto with Spring Vegetables", ["chicken broth", "asparagus spears", "chicken breasts", "butter", "olive oil", "zucchini", "onion", "arborio rice", "white wine", "parmesan cheese", "fontina cheese", "parsley"]);
  this.recipeArray.push(risotto);

  var teriyakiChicken = new Recipe("http://images.edge-generalmills.com/de3c686e-05e1-4cf6-9b36-cd604b9703a2.jpg", "Betty Crocker", "http://www.bettycrocker.com", "http://www.bettycrocker.com/recipes/teriyaki-chicken-stir-fry/87b85076-efa5-4acf-90e0-f84fd5bd3353", "Teriyaki Chicken", ["chicken breast", "teriaki sauce", "lemon juice", "bag of frozen broccoli, carrots, waterchestnuts and redpeppers", "a starch (ie. rice, couscous, noodles"]);
  this.recipeArray.push(teriyakiChicken);

  var ratatouille = new Recipe("http://www.cdkitchen.com/recipes/images/2013/08/55326-3119-mx.jpg", "cd Kitchen", "http://www.cdkitchen.com", "http://www.cdkitchen.com/recipes/recs/1551/Mushroom-Ratatouille84542.shtml", "Ratatouille", ["mushrooms", "onion", "eggplant", "zucchini", "red bell pepper", "tomato", "olive oil", "garlic"]);
  this.recipeArray.push(ratatouille);
}

BottomShelf.prototype.ingredientCheck = function(ingredient1, ingredient2) {
  if (ingredient1 === "Beef" && ingredient2 === "Zucchini") {
    var returnRecipe = {};
    var array = this.recipeArray;
    for (var index = 0; index < this.recipeArray.length; index +=1) {
      if (array[index].recipeTitle === "Teriyaki Beef") {
      returnRecipe = array[index]
      return returnRecipe;
      }
    }
  } else if (ingredient1 === "Beef" && ingredient2 === "Mushrooms") {
    var returnRecipe = {};
    var array = this.recipeArray;
    for (var index = 0; index < this.recipeArray.length; index +=1) {
      if (array[index].recipeTitle === "Beef Stroganoff") {
      returnRecipe = array[index]

      return returnRecipe;
      }
    }
  } else if (ingredient1 === "Chicken" && ingredient2 === "Zucchini") {
    var returnRecipe = {};
    var array = this.recipeArray;
    for (var index = 0; index < this.recipeArray.length; index +=1) {
      if (array[index].recipeTitle === "Chicken Risotto with Spring Vegetables") {
      returnRecipe = array[index]

      return returnRecipe;
      }
    }
  } else if (ingredient1 === "Chicken" && ingredient2 === "Mushrooms") {
    var returnRecipe = {};
    var array = this.recipeArray;
    for (var index = 0; index < this.recipeArray.length; index +=1) {
      if (array[index].recipeTitle === "Teriyaki Chicken") {
      returnRecipe = array[index]

      return returnRecipe;
      }
    }
  } else {
    var returnRecipe = {};
    var array = this.recipeArray;
    for (var index = 0; index < this.recipeArray.length; index +=1) {
      if (array[index].recipeTitle === "Ratatouille") {
      returnRecipe = array[index]

      return returnRecipe;
      }
    }
  }
}


var Recipe = function(img_url, publisher, publisher_url, source_url, recipeTitle, ingredient_list) {
    this.img_url = img_url;
    this.publisher = publisher;
    this.publisher_url = publisher_url;
    this.source_url = source_url;
    this.recipeTitle = recipeTitle;
    this.ingredient_list = ingredient_list;
};


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
    newBottomShelf.chosenRecipe = newBottomShelf.ingredientCheck(newBottomShelf.ingredient1, newBottomShelf.ingredient2);
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
    // alert(newBottomShelf.recipeArray);
    // alert(newBottomShelf.recipeArray[1]);

  });
});
