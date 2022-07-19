function displayAsideIngredient() {
    const form = document.getElementById("lpp-form-ingredient")
    const aside = document.getElementById("lpp-aside-ingredient");

    if (aside.classList.contains("dp-none")) {
        aside.classList.remove("dp-none");
        aside.classList.add("dp-block");
        form.classList.add("lpp-input-onclick")
    } else {
        aside.classList.remove("dp-block");
        aside.classList.add("dp-none");
        form.classList.remove("lpp-input-onclick")
    }
}

function displayAsideAppareil() {
    const form = document.getElementById("lpp-form-appareil")
    const aside = document.getElementById("lpp-aside-appareil");

    if (aside.classList.contains("dp-none")) {
        aside.classList.remove("dp-none");
        aside.classList.add("dp-block");
        form.classList.add("lpp-input-onclick")
    } else {
        aside.classList.remove("dp-block");
        aside.classList.add("dp-none");
        form.classList.remove("lpp-input-onclick")
    }
}

function displayAsideUstensile() {
    const form = document.getElementById("lpp-form-ustensile")
    const aside = document.getElementById("lpp-aside-ustensile");

    if (aside.classList.contains("dp-none")) {
        aside.classList.remove("dp-none");
        aside.classList.add("dp-block");
        form.classList.add("lpp-input-onclick")
    } else {
        aside.classList.remove("dp-block");
        aside.classList.add("dp-none");
        form.classList.remove("lpp-input-onclick")
    }
}