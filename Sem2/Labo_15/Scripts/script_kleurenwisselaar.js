const setup = () => {
    let knoppen = document.getElementsByClassName("kleurKnop");

    for (let i = 0; i < knoppen.length; i++) {
        knoppen[i].addEventListener("click", toggleKleur);
    }
};

const toggleKleur = (event) => {
    event.target.classList.toggle("actief");
};

window.addEventListener("load", setup);