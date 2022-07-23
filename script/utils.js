function displayAsideIngredient() {
    const form = document.getElementById("lpp-form-ingredient")
    const aside = document.getElementById("lpp-aside-ingredient");
    const chevron = document.getElementById("lpp-ingredient-chevron")
    
    if (aside.classList.contains("dp-none")) {
        aside.classList.remove("dp-none");
        aside.classList.add("dp-block");
        form.classList.add("lpp-input-onclick")
        chevron.classList.add("lpp-chevron-up")
    } else {
        aside.classList.remove("dp-block");
        aside.classList.add("dp-none");
        form.classList.remove("lpp-input-onclick")
        chevron.classList.remove("lpp-chevron-up")
    }
}

function displayAsideAppareil() {
    const form = document.getElementById("lpp-form-appareil")
    const aside = document.getElementById("lpp-aside-appareil");
    const chevron = document.getElementById("lpp-appareil-chevron")

    if (aside.classList.contains("dp-none")) {
        aside.classList.remove("dp-none");
        aside.classList.add("dp-block");
        form.classList.add("lpp-input-onclick")
        chevron.classList.add("lpp-chevron-up")
    } else {
        aside.classList.remove("dp-block");
        aside.classList.add("dp-none");
        form.classList.remove("lpp-input-onclick")
        chevron.classList.remove("lpp-chevron-up")
    }
}

function displayAsideUstensile() {
    const form = document.getElementById("lpp-form-ustensile")
    const aside = document.getElementById("lpp-aside-ustensile");
    const chevron = document.getElementById("lpp-ustensile-chevron")

    if (aside.classList.contains("dp-none")) {
        aside.classList.remove("dp-none");
        aside.classList.add("dp-block");
        form.classList.add("lpp-input-onclick")
        chevron.classList.add("lpp-chevron-up")
    } else {
        aside.classList.remove("dp-block");
        aside.classList.add("dp-none");
        form.classList.remove("lpp-input-onclick")
        chevron.classList.remove("lpp-chevron-up")
    }
}