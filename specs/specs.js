var kebabs = new Recipe("http://static.food2fork.com/30716_RecipeImage_620x413_beef_vegetable_shish_kebabs_2dc9e.jpg", "Chow", "http://www.chow.com",  "http://www.chow.com/recipes/30716-beef-and-vegetable-shish-kebabs", "Beef and Vegetable Shish Kebabs", ["1 tablespoon kosher salt", "2 teaspoons packed light brown sugar", "1 teaspoon finely grated lemon zest (from about 1 medium lemon)", "1/2 teaspoon ground cumin", "1/2 teaspoon paprika", "1/4 teaspoon freshly ground black pepper", "1/4 teaspoon ground coriander", "1/3 cup olive oil", "2 tablespoons tomato paste", "5 medium garlic cloves, finely chopped", "1 (1-1/2 to 2-pound) sirloin steak, about 1 inch thick", "8 ounces cremini mushrooms", "1 pound zucchini", "1 medium red onion", "10 (12-inch) wooden or metal skewers"]);
var bourguignonne = new Recipe("http://static.food2fork.com/beefdish3_300269b1efe.jpg", "Real Simple", "http://realsimple.com/", "http://www.realsimple.com/food-recipes/browse-all-recipes/quick-beef-bourguignonne-10000001699374/index.html", "Quick Beef Bourguignonne", ["1 tablespoon olive oil", "1 1/4 pounds sirloin steak, cut into 1-inch pieces", "1 kosher salt and pepper", "1 10-ounce package sliced mushrooms", "2 cups 16-ounce package frozen pearl onions", "1 red wine", "1/2 cup 10.75-ounce can Campbells Golden Mushroom soup\n"]);
var chickenPappardelle = new Recipe("http://static.food2fork.com/354130a3e3.jpg", "Epicurious", "http://www.epicurious.com/", "http://www.epicurious.com/recipes/food/views/Chicken-Breasts-with-Zucchini-Pappardelle-354130", "Chicken Breasts with Zucchini Pappardelle", ["1 pound zucchini, trimmed", "2 garlic cloves", "4 boneless chicken breast halves with skin (1 1/2 pounds) ", "1 tablespoon olive oil", "2 tablespoons water", "1 cup torn basil leaves"]);
var chickenMarsala = new Recipe("http://static.food2fork.com/47653a1af.jpg", "All Recipes", "http://allrecipes.com/", "http://allrecipes.com/Recipe/Chicken-Marsala/Detail.aspx", "Chicken Marsala", ["1/4 cup all-purpose flour for coating", "1/2 teaspoon salt", "1/4 teaspoon ground black pepper", "1/2 teaspoon dried oregano", "4 skinless, boneless chicken breast halves - pounded 1/4 inch thick", "4 tablespoons butter", "4 tablespoons olive oil", "1 cup sliced mushrooms", "1/2 cup Marsala wine", "1/4 cup cooking sherry"]);
var zucchiniBalls = new Recipe("http://static.food2fork.com/Kolokythokeftedes(ZucchiniandFetaBalls)150043120830.jpg", "Closet Cooking", "http://closetcooking.com/", "http://www.closetcooking.com/2009/09/kolokythokeftedes-zucchini-and-feta.html", "Kolokythokeftedes (Zucchini and Feta Balls)", ["2 cups zucchini, grated and squeezed", "1/4 cup of feta, crumbled", "1 splash ouzo (optional)", "1 clove garlic, chopped", "2 green onions, sliced", "1 handful herbs (such as mint, dill and parsley), chopped", "1 egg, lightly beaten", "salt and pepper to taste", "flour (I used whole wheat)", "breadcrumbs (I use whole wheat)", "oil for frying\n"]);
var mushroomSalad = new Recipe("http://static.food2fork.com/Warm2BMushroom2Band2BRoasted2BAsparagus2BWild2BRice2BSalad2Bwith2Band2BFeta2B5002B71693724de9b.jpg", "Closet Cooking", "http://closetcooking.com/", "http://www.closetcooking.com/2011/06/warm-mushroom-and-wild-rice-salad-with.html", "Warm Mushroom, Roasted Asparagus and Wild Rice Salad with Feta", ["1/2 cup wild rice", "1 1/4 cups broth, chicken or vegetable", "1 tablespoon oil", "1 onion, diced", "2 cloves garlic, chopped", "8 ounces mushrooms, cleaned and sliced", "salt and pepper to taste", "1 tablespoon oil", "salt and pepper to taste", "1 pound asparagus, trimmed", "1 handful dill, chopped", "1/4 cup balsamic vinaigrette", "4 cups salad greens", "1/4 cup feta or goat cheese or blue cheese, crumbled\n"]);

describe('BottomShelf', function() {
  it("hold all page information", function() {
    var testBottomShelf = new BottomShelf();
    expect(testBottomShelf.ingredient1).to.equal("");
    expect(testBottomShelf.ingredient2).to.equal("");
    expect(testBottomShelf.chosenRecipe).to.eql({});
    expect(testBottomShelf.recipeArray).to.eql([]);
  });
  it("has a prototype to check the ingredient selects", function() {
    var testBottomShelf = new BottomShelf();
    expect(testBottomShelf.ingredientCheck("Select", "Select")).to.equal(false);
  });
  it("will return recipe using the two ingredients", function() {
    var testBottomShelf = new BottomShelf();
    testBottomShelf.recipeArray = [kebabs, bourguignonne, chickenPappardelle, chickenMarsala, zucchiniBalls, mushroomSalad];
    expect(testBottomShelf.ingredientCheck("Beef", "Zucchini")).to.equal(kebabs);
    expect(testBottomShelf.ingredientCheck("Chicken", "Mushrooms")).to.equal(chickenMarsala);
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
