let message = document.getElementById('lpp-message');
const searchBarIngredient = document.getElementById("lpp-ingredient-searchbar");
const searchBarAppareil = document.getElementById("lpp-appareil-searchbar");
const searchBarUstensile = document.getElementById("lpp-ustensile-searchbar");

// Recuperer les information des asides
const selectedVignette = {
    ingredient : [],
    appareil : [],
    ustensile : []
}

let articleDisplays = {
    ingredients : [],
    appareils : [],
    ustensiles : []
}

let testArray = []

function updateArticles() {
    let hasArticles = false;
    message.style.display = 'none';
    articleDisplays.ingredients = [];
    articleDisplays.appareils = [];
    articleDisplays.ustensiles = [];
    const recipeContainer = document.getElementById("lpp-recipes-section");
    Array.from(recipeContainer.children).forEach(recipe => {
        let afficher = true;
        Object.keys(selectedVignette).forEach(type => {
            let attributes = recipe.dataset[type].split(';');
            let triAttributes = attributes.map(attribute => attribute.toLowerCase());
            let attributesOk = selectedVignette[type].filter(i => triAttributes.indexOf(i) != -1)
            afficher = afficher && (attributesOk.length == selectedVignette[type].length);
        })
        recipe.style.display = afficher ? 'block' : 'none';
        hasArticles = hasArticles || afficher;
        const listRecipe = [];
        if(articleDisplays.ingredients.length < 1) {
        }
        listRecipe.push(recipe);
        listRecipe.forEach(recipe => {
            if(recipe.style.display === 'block') {
                let dataIngredient = recipe.dataset.ingredient.toLowerCase().split(';');
                let dataAppareil = recipe.dataset.appareil.toLowerCase().split(';');
                let dataUstensile = recipe.dataset.ustensile.toLowerCase().split(';');
                articleDisplays.ingredients.push(dataIngredient)
                articleDisplays.appareils.push(dataAppareil)
                articleDisplays.ustensiles.push(dataUstensile)
            }
        })
    })
    articleDisplays.ingredients = articleDisplays.ingredients.flat()
    articleDisplays.appareils = articleDisplays.appareils.flat()
    articleDisplays.ustensiles = articleDisplays.ustensiles.flat()
    articleDisplays.ingredients = [...new Set(articleDisplays.ingredients)]
    articleDisplays.appareils = [...new Set(articleDisplays.appareils)]
    articleDisplays.ustensiles = [...new Set(articleDisplays.ustensiles)]
    displayInformation();
    if (!hasArticles) {
        message.style.display = 'block';
    }
}

function updateVignettes() {
    const vignetteContainer = document.getElementById("lpp-vignette-container");
    vignetteContainer.innerHTML = ``;
    Object.keys(selectedVignette).forEach(type => {
        const vignettes = selectedVignette[type];
        vignettes.forEach(vignetteId => {
            const vignetteIdWithoutSpace = vignetteId.replace(/ /g, "-");
            const vignetteIngredient = `<div id="testRm lpp-${type}-${vignetteIdWithoutSpace}" class="lpp-vignette lpp-vignette-${type}" onclick="removeVignette('${vignetteId}', '${type}')"><p>${vignetteId}</p><img tabindex="0" id="test-remove" src="./src/cross.svg" alt=""></div>`
            vignetteContainer.innerHTML += (vignetteIngredient);
        })
    })
    updateArticles();
}

function addVignette(vignetteId, type) {
    if(selectedVignette[type].indexOf(vignetteId) == -1) {
        selectedVignette[type].push(vignetteId);
        updateVignettes();
        searchBarIngredient.value = ""
        searchBarAppareil.value = ""
        searchBarUstensile.value = ""
    }
}

function removeVignette(vignetteId, type) {
    const indexVignette = selectedVignette[type].indexOf(vignetteId);
    if(indexVignette != -1) {
        selectedVignette[type].splice(indexVignette, 1);
        updateVignettes();
        
    }
    articleDisplays = {
        ingredients : [],
        appareils : [],
        ustensiles : []
    }
}