const setup = () => {
    document.getElementById("herbereken")
        .addEventListener("click", herbereken);
};

const herbereken = () => {

    let prijzen = document.getElementsByClassName("prijs");
    let aantallen = document.getElementsByClassName("aantal");
    let btw = document.getElementsByClassName("btw");
    let subtotalen = document.getElementsByClassName("subtotaal");

    let totaal = 0;

    for (let i = 0; i < prijzen.length; i++) {

        let prijs = parseFloat(prijzen[i].textContent);
        let aantal = parseInt(aantallen[i].value, 10);
        let btwPercentage = parseFloat(btw[i].textContent);

        let subtotaal = prijs * aantal * (1 + btwPercentage / 100);

        subtotalen[i].textContent = subtotaal.toFixed(2) + " Eur";

        totaal += subtotaal;
    }

    document.getElementById("totaal").textContent =
        totaal.toFixed(2) + " Eur";
};

window.addEventListener("load", setup);