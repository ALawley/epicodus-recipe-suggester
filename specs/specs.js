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
    expect(testBottomShelf.ingredientCheck()).to.equal("ratatouille");
  });
  it("will run ingredient check and return teriyakiBeef if ingredients are beef and zucchini", function() {
    var testBottomShelf = new BottomShelf();
    expect(testBottomShelf.ingredientCheck("Beef", "Zucchini")).to.equal("teriyakiBeef");
  });
  it("will run ingredient check and return stroganoff if ingredients are beef and mushrooms", function() {
    var testBottomShelf = new BottomShelf();
    expect(testBottomShelf.ingredientCheck("Beef", "Mushrooms")).to.equal("stroganoff");
  });
  it("will run ingredient check and return risotto if ingredients are chicken and zucchini", function() {
    var testBottomShelf = new BottomShelf();
    expect(testBottomShelf.ingredientCheck("Chicken", "Zucchini")).to.equal("risotto");
  });
  it("will run ingredient check and return teriyakiChicken if ingredients are chicken and mushrooms", function() {
    var testBottomShelf = new BottomShelf();
    expect(testBottomShelf.ingredientCheck("Chicken", "Mushrooms")).to.equal("teriyakiChicken");
  });
  it("will run ingredient check and return teriyakiChicken if ingredients are chicken and mushroom", function() {
    var testBottomShelf = new BottomShelf();
    expect(testBottomShelf.ingredientCheck("Chicken", "Mushrooms")).to.equal("teriyakiChicken");
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
