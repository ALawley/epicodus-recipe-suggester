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
