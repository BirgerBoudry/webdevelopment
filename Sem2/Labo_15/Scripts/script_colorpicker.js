const setup = () => {
    let sliders = document.getElementsByClassName("slider");

    for (let i = 0; i < sliders.length; i++) {
        sliders[i].addEventListener("input", update);
    }
};

const update = () => {
    let sliders = document.getElementsByClassName("slider");

    let r = sliders[0].value;
    let g = sliders[1].value;
    let b = sliders[2].value;

    let kleur = "rgb(" + r + "," + g + "," + b + ")";
    document.getElementById("kleurVak").style.backgroundColor = kleur;
};

window.addEventListener("load", setup);