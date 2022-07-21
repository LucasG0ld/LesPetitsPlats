let triIngredients = [];
let triAppareils = [];
let triUstensiles = [];

// Tri liste titre, desc, ingr
function triInfo(infoAffiche) {
    infoAffiche.forEach(information => {
        const info = new Recipe(information)
        infos.titre.push(info.name)
        infos.description.push(info.description)
    });
    infos.ingredient.push(...triIngredients)
}

// Tri liste ingredient
function triIngredient(ingredientAffiche) {
    let ingredients = [];
    ingredientAffiche.forEach(recette => {
        const info = new Recipe(recette)
        ingredients.push(info.ingredients)
    });
    // Enlever les doublons array ingredients
    uniqueIngredients = [];
    ingredients.forEach(ingredientArray => {
        ingredientArray.forEach(ingredient => {
            uniqueIngredients.push(ingredient.ingredient)
        })
    });
    triIngredients = [...new Set(uniqueIngredients)];
    triIngredients = triIngredients.map(ingredient => ingredient.toLowerCase());
}
// Tri liste appareil
function triAppareil(appareilAffiche) {
    let appareils = [];
    appareilAffiche.forEach(recette => {
        const info = new Recipe(recette)
        appareils.push(info.appliance)
    });
    // Enlever les doublons array appareils
    triAppareils = [...new Set(appareils)];
    triAppareils = triAppareils.map(appareil => appareil.toLowerCase());
}
// Tri liste unstensile
function triUstensile(ustensileAffiche) {
    let ustensiles = [];

    ustensileAffiche.forEach(recette => {
        const info = new Recipe(recette)
        ustensiles.push(info.ustensils)
    });

    // Enlever les doublons array ustensiles
    uniqueUstensiles = [];
    ustensiles.forEach(ustensileArray => {
        ustensileArray.forEach(ustensile => {
            uniqueUstensiles.push(ustensile)
        })
    });

    triUstensiles = [...new Set(uniqueUstensiles)];
    triUstensiles = triUstensiles.map(ustensile => ustensile.toLowerCase());
}

//

function triIngrAfterSearch() {
    recipesSearchBar.forEach(recipeArray => {
        recipeArray.ingredients.forEach(ingredientArray => {
            ingrAfterSearch.push(ingredientArray.ingredient);
        })
    })
    ingrAfterSearch = ingrAfterSearch.map(ingredient => ingredient.toLowerCase());
    ingrAfterSearch = [...new Set(ingrAfterSearch)];
}

function triAppareilAfterSearch() {
    recipesSearchBar.forEach(recipeArray => {
        applianceAfterSearch.push(recipeArray.appliance);
    })
    applianceAfterSearch = applianceAfterSearch.map(appliance => appliance.toLowerCase());
    applianceAfterSearch = [...new Set(applianceAfterSearch)];
}

function triUstensileAfterSearch() {
    recipesSearchBar.forEach(recipeArray => {
        recipeArray.ustensils.forEach(ustensilsArray => {
            ustensilsAfterSearch.push(ustensilsArray);
        })
    })
    ustensilsAfterSearch = ustensilsAfterSearch.map(ustensil => ustensil.toLowerCase());
    ustensilsAfterSearch = [...new Set(ustensilsAfterSearch)];
}