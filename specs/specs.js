var teriyakiBeef = new Recipe("http://hostedmedia.reimanpub.com/TOH/Images/Photos/37/300x300/exps33521_SD955952D19.jpg", "Taste of Home", "tasteofhome.com",  "http://www.tasteofhome.com/recipes/teriyaki-zucchini-and-onion", "Teriyaki Beef", ["zucchini", "onion", "butter", "teriaki", "sesame seeds (optional)"]);
var stroganoff = new Recipe("http://foodnetwork.sndimg.com/content/dam/images/food/fullset/2012/11/12/0/FN_Paula-Deen-Beef-Stroganoff_s4x3.jpg.rend.sni12col.landscape.jpeg", "food network", "foodnetwork.com", "http://www.foodnetwork.com/recipes/paula-deen/beef-stroganoff-recipe.html", "Beef Stroganoff", ["beef", "flour", "olive oil", "butter", "onion", "mushrooms", "beef broth", "cream of mushroom", "pepper", "sour cream", "egg noodle"]);
var risotto = new Recipe("http://cdn-image.myrecipes.com/sites/default/files/styles/300x300/public/image/recipes/sl/12/03/chicken-risotto-spring-vegetables-sl-x.jpg?itok=2yrT1ExR", "My Recipes", "myrecipes.com", "http://www.myrecipes.com/recipe/chicken-risotto-spring-vegetables", "Chicken Risotto with Spring Vegetables", ["chicken broth", "asparagus spears", "chicken breasts", "butter", "olive oil", "zucchini", "onion", "arborio rice", "white wine", "parmesan cheese", "fontina cheese", "parsley"]);
var teriyakiChicken = new Recipe("http://images.edge-generalmills.com/de3c686e-05e1-4cf6-9b36-cd604b9703a2.jpg", "Betty Crocker", "bettycrocker.com", "http://www.bettycrocker.com/recipes/teriyaki-chicken-stir-fry/87b85076-efa5-4acf-90e0-f84fd5bd3353", "Teriaki Chicken", ["chicken breast", "teriaki sauce", "lemon juice", "bag of frozen broccoli, carrots, waterchestnuts and redpeppers", "a starch (ie. rice, couscous, noodles"]);
var ratatouille = new Recipe("http://www.cdkitchen.com/recipes/images/2013/08/55326-3119-mx.jpg", "cd Kitchen", "cdkitchen.com", "http://www.cdkitchen.com/recipes/recs/1551/Mushroom-Ratatouille84542.shtmlf", "Ratatouille", ["mushrooms", "onion", "eggplant", "zucchini", "red bell pepper", "tomato", "olive oil", "garlic"]);

describe('BottomShelf', function() {
  it("hold all page information", function() {
    var testBottomShelf = new BottomShelf();
    expect(testBottomShelf.ingredient1).to.equal("");
    expect(testBottomShelf.ingredient2).to.equal("");
    expect(testBottomShelf.chosenRecipe).to.eql({});
    expect(testBottomShelf.recipeArray).to.eql([]);
  });
  it("will run ingredient check and return ratatouille", function() {
    var testBottomShelf = new BottomShelf();
    testBottomShelf.recipeArray = [teriyakiBeef, stroganoff, risotto, teriyakiChicken, ratatouille];
    expect(testBottomShelf.ingredientCheck()).to.equal(ratatouille);
  });
  it("will run ingredient check and return teriyakiBeef if ingredients are beef and zucchini", function() {
    var testBottomShelf = new BottomShelf();
    testBottomShelf.recipeArray = [teriyakiBeef, stroganoff, risotto, teriyakiChicken, ratatouille];
    expect(testBottomShelf.ingredientCheck("Beef", "Zucchini")).to.equal(teriyakiBeef);
  });
});

describe('Recipe', function() {
  it("identifiy if a recipe has a user specified ingredient", function() {
    var testRecipe = new Recipe("img.com", "Food", "Food.com", "Food.com/rosemary_chicken", "rosemary chicken", ["chicken", "rosemary", "butter"]);
    expect(testRecipe.img_url).to.equal("img.com");
    expect(testRecipe.publisher).to.equal("Food");
    expect(testRecipe.publisher_url).to.equal("Food.com");
    expect(testRecipe.source_url).to.equal("Food.com/rosemary_chicken");
    expect(testRecipe.recipeTitle).to.equal("rosemary chicken");
    expect(testRecipe.ingredient_list).to.eql(["chicken", "rosemary", "butter"]);
  });
});

// describe('recipe', function() {
//   it("identifiy if a recipe has a user specified ingredient", function() {
//     var testrecipe = new recipe("chicken");
//     expect(testrecipe.).to.equal(true);
//   )};
//   )};
