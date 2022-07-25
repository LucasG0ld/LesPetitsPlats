let mainSearchbar = document.getElementById('lpp-main-searchbar');
let recipesSearchBar = [];
let searchStringMain = "";

// Reset du tableau suite à une suppression de lettre dans la searchbar
function resetSearchbarValue() {
    mainSearchbar.addEventListener("keydown", e => {
        recipesSearchBar = [];
    });
}

// Tri des recettes en fonction de la saisie dans la searchbar
function sortingRecipes() {
    //console.time();
    //for (let i = 0; i < 5000; i++) {
    resetSearchbarValue();
    mainSearchbar.addEventListener("keyup", e => {
        searchStringMain = e.target.value.toLowerCase();
        recipes.forEach(recipe => {
            let recipeOk = false;
            if (searchStringMain.length >= 3) {
                if (recipe.name.toLowerCase().includes(searchStringMain)) {
                    recipeOk = true;
                } else if (recipe.description.toLowerCase().includes(searchStringMain)) {
                    recipeOk = true;
                } else {
                    recipe.ingredients.forEach(ingredient => {
                        if (ingredient.ingredient.toLowerCase().includes(searchStringMain)) {
                            recipeOk = true;
                        }
                    })
                }
            } else {
                recipeOk = true;
            }
            if (recipeOk) {
                console.log(recipe)
                recipesSearchBar.push(recipe);
            }
        })
        recipesSearchBar = [...new Set(recipesSearchBar)];
        displayRecipe(recipesSearchBar);
        displayInformation();
        resetSearchbarValue();
        updateArticles();
    });
    //}
    //console.timeEnd();
}