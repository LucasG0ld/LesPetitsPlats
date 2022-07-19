// Recuperer les information des asides
const selectedVignette = {
    ingredient : [],
    appareil : [],
    ustensile : []
}

function updateArticles() {
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
    })
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
    }
}

function removeVignette(vignetteId, type) {
    const indexVignette = selectedVignette[type].indexOf(vignetteId);
    if(indexVignette != -1) {
        selectedVignette[type].splice(indexVignette, 1);
        updateVignettes();
    }
}