function searchIngr() {
    const searchBarIngredient = document.getElementById("lpp-ingredient-searchbar");
    searchBarIngredient.addEventListener("keyup", e => {
        const searchString = e.target.value.toLowerCase();
        let ingr = document.querySelectorAll("#lpp-ul-ingredient>li");
        if (searchString.length >= 1) {
            ingr.forEach(i => {
                console.log(i)
                i.style.display= i.dataset.ingr.includes(searchString) ? 'block' : 'none';
            })
        } else {
            ingr.forEach(i => {
                i.style.display= 'block';
            })
        }
    })
}

function searchAppareil() {
    const searchBarAppareil = document.getElementById("lpp-appareil-searchbar");
    searchBarAppareil.addEventListener("keyup", e => {
        const searchString = e.target.value.toLowerCase();
        let appareil = document.querySelectorAll("#lpp-ul-appareil>li");
        if (searchString.length >= 1) {
            appareil.forEach(i => {
                console.log(i)
                i.style.display= i.dataset.appareil.includes(searchString) ? 'block' : 'none';
            })
        } else {
            appareil.forEach(i => {
                i.style.display= 'block';
            })
        }
    })
}

function searchUstensile() {
    const searchBarUstensile = document.getElementById("lpp-ustensile-searchbar");
    searchBarUstensile.addEventListener("keyup", e => {
        const searchString = e.target.value.toLowerCase();
        let ustensile = document.querySelectorAll("#lpp-ul-ustensile>li");
        if (searchString.length >= 1) {
            ustensile.forEach(i => {
                console.log(i)
                i.style.display= i.dataset.ustensile.includes(searchString) ? 'block' : 'none';
            })
        } else {
            ustensile.forEach(i => {
                i.style.display= 'block';
            })
        }
    })
}