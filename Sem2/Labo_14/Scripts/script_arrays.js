const setup = () => {
    let familie = ["Jan", "Marie", "Pieter", "Els", "Tom"];

    console.log(familie.length);
    console.log(familie[0]);
    console.log(familie[2]);
    console.log(familie[4]);

    const voegNaamToe = (array) => {
        let nieuweNaam = window.prompt("Geef een extra naam:");
        if (nieuweNaam !== null && nieuweNaam !== "") {
            array.push(nieuweNaam);
        }
    }

    voegNaamToe(familie);

    console.log(familie);

    let alsString = familie.join(", ");
    console.log(alsString);
}

window.addEventListener("load", setup);
