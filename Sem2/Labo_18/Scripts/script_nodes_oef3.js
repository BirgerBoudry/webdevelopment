let knop = document.getElementById("btn");

knop.addEventListener("click", function() {
    let nieuwP = document.createElement("p");
    nieuwP.textContent = "Nieuw element toegevoegd!";

    let div = document.getElementById("myDIV");
    div.appendChild(nieuwP);
});