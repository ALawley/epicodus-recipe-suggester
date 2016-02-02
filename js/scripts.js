var BottomShelf = function(){
  this.ingredient1 = "";
  this.ingredient2 = "";
  this.chosenRecipe = {};
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
