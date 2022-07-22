let mainSearchbar = document.getElementById('lpp-main-searchbar');
let recipesSearchBar = [];
let searchStringMain = "";

// Reset du tableau suite à une suppression de lettre dans la searchbar
function resetSearchbarValue() {
    mainSearchbar.addEventListener("keydown", e => {
        if (e.key == "Backspace" || e.key == 46) {
            recipesSearchBar = [];
        }
    });
}

// Tri des recettes en fonction de la saisie dans la searchbar
function sortingRecipes() {
    //console.time();
    //for (let i = 0; i < 5000; i++) {
        resetSearchbarValue();
        mainSearchbar.addEventListener("keyup", e => {
            searchStringMain = e.target.value.toLowerCase();
            if (searchStringMain.length >= 3) {
                for (let i = 0; i < recipes.length; i++) {
                    const recipe = recipes[i];
                    if (recipe.name.toLowerCase().includes(searchStringMain)) {
                        recipesSearchBar.push(recipe);
                    } else if (recipe.description.toLowerCase().includes(searchStringMain)) {
                        
                        recipesSearchBar.push(recipe);
                    } else {
                        for (let x = 0; x < recipe.ingredients.length; x++) {
                            const ingredient = recipe.ingredients[x];
                            if (ingredient.ingredient.toLowerCase().includes(searchStringMain)) {
                                recipesSearchBar.push(recipe);
                            }
                        }
                    }
                }
                recipesSearchBar = [...new Set(recipesSearchBar)];
                displayRecipe(recipesSearchBar);
                displayInformation();

                if (recipesSearchBar.length == 0) {
                    recipesSection.innerHTML = `<p>Aucune recette ne correspond à votre recherche !</p>`
                }
            } else {
                displayRecipe(recipes)
                displayInformation();
            }
        })
    //}
    //console.timeEnd();
}
