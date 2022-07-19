const recipesSection = document.querySelector("#lpp-recipes-section");
let recipes = [];
let infos = {
    titre: [],
    description: [],
    ingredient: []
};
let ingrAfterSearch = [];
let applianceAfterSearch = [];
let ustensilsAfterSearch = [];
let filteredIngredients = undefined;
let filteredAppareils = undefined;
let filteredUstensiles = undefined;
let filteredRecipes = undefined;

async function getRecipes() {
    // Penser à remplacer par les données récupérées dans le json
    let listRecipe = await fetch('./data/recipes.json')
        .then((res) => res.json())
        .catch((err) => console.log("There was an error", err));
    // et bien retourner le tableau photographers seulement une fois
    return (listRecipe);
};

async function init() {
    let listRecipes = await getRecipes();

    listRecipes.recipes.forEach(recipeJson => {
        const recipe = new Recipe(recipeJson)
        recipes.push(recipe);
    });

    displayRecipe(recipes);
    displayInformation(recipes);
    sortingRecipes();
}

init();

function displayRecipe(recetteAffiche) {
    recipesSection.innerHTML = ""
    recetteAffiche.forEach(recipeJson => {
        const recipe = new Recipe(recipeJson)
        const recipeCardDOM = recipe.getRecipeCardDOM();
        recipesSection.innerHTML += recipeCardDOM;
    });
}

function displayInformation() {
    triIngredient(recipes);
    triInfo(recipes);
    triAppareil(recipes);
    triUstensile(recipes);
    triIngrAfterSearch();
    triAppareilAfterSearch();
    triUstensileAfterSearch();
    displayIngredient();
    displayAppareil();
    displayUstensile();
    if(searchStringMain == "") {
        searchInformation();
        searchInformationAppareil();
        searchInformationUstensile();
    } else {
        secondarySearchInformation();
        secondarySearchInformationAppareil();
        secondarySearchInformationUstensile();
    }
    
}