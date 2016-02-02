var BottomShelf = function(){
  this.ingredient1 = "";
  this.ingredient2 = "";
  this.chosenRecipe = {};
  this.recipeArray = [];
};

BottomShelf.prototype.ingredientCheck = function(ingredient1, ingredient2) {
  if (ingredient1 === "Beef" && ingredient2 === "Zucchini") {
    return("teriyakiBeef");
  } else if (ingredient1 === "Beef" && ingredient2 === "Mushrooms") {
    return("stroganoff");
  } else if (ingredient1 === "Chicken" && ingredient2 === "Zucchini") {
    return("risotto");
  } else if (ingredient1 === "Chicken" && ingredient2 === "Mushrooms") {
    return("teriyakiChicken");
  } else {
    return("ratatouille");
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

// var stroganoff = new Recipe("imgur.com/stroganoff", "food network", "foodnetwork.com/stroganoff")
// newBottomShelf.recipeArray.push(stroganoff)

$(document).ready(function() {
  var newBottomShelf = new BottomShelf();
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
      alert(newBottomShelf.ingredientCheck(newBottomShelf.ingredient1, newBottomShelf.ingredient2));
    });
});
