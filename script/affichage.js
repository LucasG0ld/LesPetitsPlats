// Affichage ingredient
function displayIngredient(filteredIngredients) {
    const ingredientUl = document.getElementById("lpp-ul-ingredient");
    // Afficher ingredients
    ingredientUl.innerHTML = "";
    triIngredients.forEach(ingredientArray => {
        let ingredientAside = `<li id="${ingredientArray}" onClick="addVignette(this.id, 'ingredient')">${ingredientArray}</li>`
        ingredientUl.innerHTML += ingredientAside;
    });

    if (filteredIngredients != undefined) {
        ingredientUl.innerHTML = "";
        filteredIngredients.forEach(ingredientArray => {
            let ingredientTriAside = `<li id="${ingredientArray}" onClick="addVignette(this.id, 'ingredient')">${ingredientArray}</li>`
            ingredientUl.innerHTML += ingredientTriAside;
        });
    }

    if (recipesSearchBar.length > 1 && filteredIngredients == undefined) {
        ingredientUl.innerHTML = "";
        ingrAfterSearch.forEach(ingredientArray => {
            let ingredientTriAside = `<li id="${ingredientArray}" onClick="addVignette(this.id, 'ingredient')">${ingredientArray}</li>`
            ingredientUl.innerHTML += ingredientTriAside;
        })
    }

    if (articleDisplays.ingredient.length > 1 && filteredIngredients == undefined) {
        ingredientUl.innerHTML = "";
        articleDisplays.ingredient.forEach(ingredientArray => {
            let ingredientTriAside = `<li id="${ingredientArray}" onClick="addVignette(this.id, 'ingredient')">${ingredientArray}</li>`
            ingredientUl.innerHTML += ingredientTriAside;
        })
    }
}

// Affichage appareil
function displayAppareil(filteredAppareils) {
    const appareilUl = document.getElementById("lpp-ul-appareil");
    // Afficher appareils
    appareilUl.innerHTML = "";
    triAppareils.forEach(appareilArray => {
        let appareils = appareilArray
        let appareilAside = `<li id="${appareils}" onClick="addVignette(this.id, 'appareil')">${appareils}</li>`;
        appareilUl.innerHTML += appareilAside;
    });

    if (filteredAppareils != undefined) {
        appareilUl.innerHTML = "";
        filteredAppareils.forEach(appareilArray => {
            let appareilTriAside = `<li id="${appareilArray}" onClick="addVignette(this.id, 'appareil')">${appareilArray}</li>`;
            appareilUl.innerHTML += appareilTriAside;
        });
    }

    if (recipesSearchBar.length > 1 && filteredAppareils == undefined) {
        appareilUl.innerHTML = "";
        applianceAfterSearch.forEach(applianceArray => {
            let applianceTriAside = `<li id="${applianceArray}" onClick="addVignette(this.id, 'appareil')">${applianceArray}</li>`;
            appareilUl.innerHTML += applianceTriAside;
        })
    }

    if (articleDisplays.appareil.length > 1 && filteredIngredients == undefined) {
        appareilUl.innerHTML = "";
        articleDisplays.appareil.forEach(applianceArray => {
            let applianceTriAside = `<li id="${applianceArray}" onClick="addVignette(this.id, 'appareil')">${applianceArray}</li>`;
            appareilUl.innerHTML += applianceTriAside;
        })
    }
}

// Affichage ustensile
function displayUstensile(filteredUstensiles) {
    const ustensileUl = document.getElementById("lpp-ul-ustensile");

    // Afficher ustensiles
    ustensileUl.innerHTML = "";
    triUstensiles.forEach(ustensileArray => {
        let ustensileAside = `<li id="${ustensileArray}" onClick="addVignette(this.id, 'ustensile')">${ustensileArray}</li>`
        ustensileUl.innerHTML += ustensileAside;
    })

    if (filteredUstensiles != undefined) {
        ustensileUl.innerHTML = "";
        filteredUstensiles.forEach(ustensileArray => {
            let ustensileTriAside = `<li id="${ustensileArray}" onClick="addVignette(this.id, 'ustensile')">${ustensileArray}</li>`
            ustensileUl.innerHTML += ustensileTriAside;
        });
    }

    if (recipesSearchBar.length > 1 && filteredUstensiles == undefined) {
        ustensileUl.innerHTML = "";
        ustensilsAfterSearch.forEach(ustensilArray => {
            let ustensilsTriAside = `<li id="${ustensilArray}" onClick="addVignette(this.id, 'appareil')">${ustensilArray}</li>`;
            ustensileUl.innerHTML += ustensilsTriAside;
        })
    }

    if (articleDisplays.ustensile.length > 1 && filteredIngredients == undefined) {
        ustensileUl.innerHTML = "";
        articleDisplays.ustensile.forEach(ustensilArray => {
            let ustensilsTriAside = `<li id="${ustensilArray}" onClick="addVignette(this.id, 'appareil')">${ustensilArray}</li>`;
            ustensileUl.innerHTML += ustensilsTriAside;
        })
    }
}