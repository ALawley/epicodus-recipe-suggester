var BottomShelf = function(){
  this.ingredient1 = "";
  this.ingredient2 = "";
  this.chosenRecipe = {};
  this.recipeArray = [];
};

BottomShelf.prototype.ingredientCheck = function(ingredient1, ingredient2) {
  if (ingredient1 === "Beef" && ingredient2 === "Zucchini") {
    this.chosenRecipe = this.recipeArray[this.recipeArray.indexOf("teriyakiBeef")];
    return "teriyakiBeef";
  } else if (ingredient1 === "Beef" && ingredient2 === "Mushrooms") {
    this.chosenRecipe = this.recipeArray[this.recipeArray.indexOf("stroganoff")];
    return "stroganoff";
  } else if (ingredient1 === "Chicken" && ingredient2 === "Zucchini") {
    this.chosenRecipe = this.recipeArray[this.recipeArray.indexOf("risotto")];
    return "risotto";
  } else if (ingredient1 === "Chicken" && ingredient2 === "Mushrooms") {
    this.chosenRecipe = this.recipeArray[this.recipeArray.indexOf("teriyakiChicken")];
    return "teriyakiChicken"
  } else {
    this.chosenRecipe = this.recipeArray[this.recipeArray.indexOf("ratatouille")];
    return "ratatouille";
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

// var teriyakiBeef = new Recipe("http://hostedmedia.reimanpub.com/TOH/Images/Photos/37/300x300/exps33521_SD955952D19.jpg", "Taste of Home", "tasteofhome.com",  "http://www.tasteofhome.com/recipes/teriyaki-zucchini-and-onion", "Teriyaki Beef", ["zucchini", "onion", "butter", "teriaki", "sesame seeds (optional)"])
// newBottomShelf.recipeArray.push(teriakiBeef)

// var stroganoff = new Recipe("http://foodnetwork.sndimg.com/content/dam/images/food/fullset/2012/11/12/0/FN_Paula-Deen-Beef-Stroganoff_s4x3.jpg.rend.sni12col.landscape.jpeg", "food network", "foodnetwork.com", "http://www.foodnetwork.com/recipes/paula-deen/beef-stroganoff-recipe.html", "Beef Stroganoff", ["beef", "flour", "olive oil", "butter", "onion", "mushrooms", "beef broth", "cream of mushroom", "pepper", "sour cream", "egg noodle"])
// newBottomShelf.recipeArray.push(stroganoff)

// var risotto = new Recipe("http://cdn-image.myrecipes.com/sites/default/files/styles/300x300/public/image/recipes/sl/12/03/chicken-risotto-spring-vegetables-sl-x.jpg?itok=2yrT1ExR", "My Recipes", "myrecipes.com", "http://www.myrecipes.com/recipe/chicken-risotto-spring-vegetables", "Chicken Risotto with Spring Vegetables", ["chicken broth", "asparagus spears", "chicken breasts", "butter", "olive oil", "zucchini", "onion", "arborio rice", "white wine", "parmesan cheese", "fontina cheese", "parsley"] )
// newBottomShelf.recipeArray.push(risotto)

// var teriyakiChicken = new Recipe("http://images.edge-generalmills.com/de3c686e-05e1-4cf6-9b36-cd604b9703a2.jpg", "Betty Crocker", "bettycrocker.com", "http://www.bettycrocker.com/recipes/teriyaki-chicken-stir-fry/87b85076-efa5-4acf-90e0-f84fd5bd3353", "Teriaki Chicken", ["chicken breast", "teriaki sauce", "lemon juice", "bag of frozen broccoli, carrots, waterchestnuts and redpeppers", "a starch (ie. rice, couscous, noodles"])
// newBottomShelf.recipeArray.push(teriyakiChicken)

// var ratatouille = new Recipe("http://www.cdkitchen.com/recipes/images/2013/08/55326-3119-mx.jpg", "cd Kitchen", "cdkitchen.com", "http://www.cdkitchen.com/recipes/recs/1551/Mushroom-Ratatouille84542.shtmlf", "Ratatouille", ["mushrooms", "onion", "eggplant", "zucchini", "red bell pepper", "tomato", "olive oil", "garlic"])
// newBottomShelf.recipeArray.push(ratatouille)


$(document).ready(function() {
  //clicks on an li with a parent ul #ingredient 1
    //we take the value of that li
    //put the value into span class selected-ingredient
    $('.ingredient1').click(function() {
      $('span#selected-ingredient1').text($(this).attr('value'));
    });

    $('.ingredient2').click(function() {
      $('span#selected-ingredient2').text($(this).attr('value'));
    });

    $('.ingredient3').click(function() {
      $('span#selected-ingredient3').text($(this).attr('value'));
    });

});
