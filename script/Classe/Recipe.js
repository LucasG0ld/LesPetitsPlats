class Recipe {
    constructor(data) {
        this.id = data.id;
        this.name = data.name;
        this.servings = data.servings;
        this.ingredients = data.ingredients;
        this.time = data.time;
        this.description = data.description;
        this.appliance = data.appliance;
        this.ustensils = data.ustensils;
    }

    // Création DOM
    getRecipeCardDOM() {
        let homePageTemplate = `
        <article data-appareil="${this.appliance}" data-ustensile="${this.ustensils.join(';')}" data-ingredient="${this.ingredients.map(i => i.ingredient).join(';')}">
                <img class="lpp-recette-image" src="src/recette.jpg" alt="Image recette">
                <main class="lpp-recette-container">
                    <header class="lpp-recette-header">
                        <h2>${this.name}</h2>
                        <h2 class="lpp-recette-header-time"><img class="lpp-recette-time" src="src/time.svg" alt=""> ${this.time} min</h2>
                    </header>
                    <div class="lpp-recette-text">
                        <ul>`
        this.ingredients.forEach(ingredient => {
            let separator = ingredient.hasOwnProperty("quantity") || ingredient.hasOwnProperty("unit") ? ": " : "";

            // ?? = si pas existant ecrire ce qu'il y a a droite
            homePageTemplate += `<li>${ingredient.ingredient}${separator}${ingredient.quantity ?? ""}${ingredient.unit ?? ""}</li>`
        })
        homePageTemplate += `</ul>
                        <span class="lpp-recette-description">${this.description}</span>
                    </div>

                </main>

            </article>`;
        return homePageTemplate;

    }

    getAttributes(type) {
        switch (type) {
            case "ingredient":
                return this.ingredients.map(ingredient => ingredient.ingredient);
            case "appareil":
                return [this.appliance];
            case "ustensile":
                return this.ustensils;
            default:
                return [];
        }
    }

    /*// Aside ingredient
    getIngredientAsideDOM() {
        let ingredientAside = ``;
        this.ingredients.forEach(ingredient => {
            ingredientAside+=`<li id="${ingredient.ingredient}" onClick="addVignette(this.id, 'ingredient')">${ingredient.ingredient}</li>`
        })
        ingredientAside+=``;

        return ingredientAside;
    }

    // Aside appareil
    getAppareilAsideDOM() {
        let appareilAside = `<li id="${this.appliance}" onClick="addVignette(this.id, 'appareil')">${this.appliance}</li>`;

        return appareilAside;
    }

    // Aside ustensile
    getUstensileAsideDOM() {
        let ustensileAside = ``;
        this.ustensils.forEach(ustensile => {
            ustensileAside+=`<li id="${ustensile}" onClick="addVignette(this.id, 'ustensile')">${ustensile}</li>`
        });
        ustensileAside+=``;

        return ustensileAside;
    }*/


}