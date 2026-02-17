const setup = () => {
    window.alert("Dit is een mededeling");

    let bevestiging = window.confirm("Weet u het zeker?");
    console.log(bevestiging);

    let naam = window.prompt("Wat is uw naam?", "onbekend");
    console.log(naam);
}

window.addEventListener("load", setup);
