function toonResultaat() {
    const roker = document.getElementById("roker").checked;

    const talen = document.getElementsByName("taal");
    let taal = "";
    for (let t of talen) {
        if (t.checked) {
            taal = t.value;
        }
    }

    const buurlandSelect = document.getElementById("buurland");
    const buurland = buurlandSelect.options[buurlandSelect.selectedIndex].text;

    const bestellingSelect = document.getElementById("bestelling");
    let bestelling = [];
    for (let option of bestellingSelect.options) {
        if (option.selected) {
            bestelling.push(option.text);
        }
    }

    console.log("Is roker:", roker);
    console.log("Moedertaal:", taal);
    console.log("Favoriete buurland:", buurland);
    console.log("Bestelling:", bestelling.join(", "));
}