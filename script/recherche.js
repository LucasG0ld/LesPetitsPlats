// Recherche ingredients
function searchInformation() {
    if (recipesSearchBar.length == 0) {
        const searchBarIngredient = document.getElementById("lpp-ingredient-searchbar");
        searchBarIngredient.addEventListener("keyup", e => {
            const searchString = e.target.value.toLowerCase();
            const filteredIngredients = triIngredients.filter(ingredient => {
                return (
                    ingredient.includes(searchString)
                );
            });
            displayIngredient(filteredIngredients);
        });
    }
}

// Recherche appareils
function searchInformationAppareil() {
    const searchBarAppareil = document.getElementById("lpp-appareil-searchbar");
    searchBarAppareil.addEventListener("keyup", e => {
        const searchStringAppareil = e.target.value.toLowerCase();
        const filteredAppareils = triAppareils.filter(appareil => {
            return (
                appareil.includes(searchStringAppareil)
            );
        });
        displayAppareil(filteredAppareils);
    });
}

// Recherche ustensiles
function searchInformationUstensile() {
    const searchBarUstensile = document.getElementById("lpp-ustensile-searchbar");
    searchBarUstensile.addEventListener("keyup", e => {
        const searchStringUstensile = e.target.value.toLowerCase();
        const filteredUstensiles = triUstensiles.filter(ustensile => {
            return (
                ustensile.includes(searchStringUstensile)
            );
        });
        displayUstensile(filteredUstensiles);
    });
}

//
function secondarySearchInformation() {
    const searchBarIngredient = document.getElementById("lpp-ingredient-searchbar");
        searchBarIngredient.addEventListener("keyup", e => {
            const searchString = e.target.value.toLowerCase();
            const filteredIngredients = ingrAfterSearch.filter(ingredient => {
                return (
                    ingredient.includes(searchString)
                );
            });
            displayIngredient(filteredIngredients);
        });
}

function secondarySearchInformationAppareil() {
    const searchBarAppareil = document.getElementById("lpp-appareil-searchbar");
    searchBarAppareil.addEventListener("keyup", e => {
        const searchStringAppareil = e.target.value.toLowerCase();
        const filteredAppareils = applianceAfterSearch.filter(appareil => {
            return (
                appareil.includes(searchStringAppareil)
            );
        });
        displayAppareil(filteredAppareils);
    });
}

// Recherche ustensiles
function secondarySearchInformationUstensile() {
    const searchBarUstensile = document.getElementById("lpp-ustensile-searchbar");
    searchBarUstensile.addEventListener("keyup", e => {
        const searchStringUstensile = e.target.value.toLowerCase();
        const filteredUstensiles = ustensilsAfterSearch.filter(ustensile => {
            return (
                ustensile.includes(searchStringUstensile)
            );
        });
        displayUstensile(filteredUstensiles);
    });
}

//
function tagSearchInformation() {
    const searchBarIngredient = document.getElementById("lpp-ingredient-searchbar");
        searchBarIngredient.addEventListener("keyup", e => {
            const searchString = e.target.value.toLowerCase();
            const filteredIngredients = articleDisplays.ingredients.filter(ingredient => {
                return (
                    ingredient.includes(searchString)
                );
            });
            displayIngredient(filteredIngredients);
        });
}

function tagSearchInformationAppareil() {
    const searchBarAppareil = document.getElementById("lpp-appareil-searchbar");
    searchBarAppareil.addEventListener("keyup", e => {
        const searchStringAppareil = e.target.value.toLowerCase();
        const filteredAppareils = articleDisplays.appareils.filter(appareil => {
            return (
                appareil.includes(searchStringAppareil)
            );
        });
        displayAppareil(filteredAppareils);
    });
}

// Recherche ustensiles
function tagSearchInformationUstensile() {
    const searchBarUstensile = document.getElementById("lpp-ustensile-searchbar");
    searchBarUstensile.addEventListener("keyup", e => {
        const searchStringUstensile = e.target.value.toLowerCase();
        const filteredUstensiles = articleDisplays.ustensiles.filter(ustensile => {
            return (
                ustensile.includes(searchStringUstensile)
            );
        });
        displayUstensile(filteredUstensiles);
    });
}