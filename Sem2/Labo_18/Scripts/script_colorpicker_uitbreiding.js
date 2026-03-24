const setup = () => {
    const red = document.getElementById("red");
    const green = document.getElementById("green");
    const blue = document.getElementById("blue");
    const colorBox = document.getElementById("colorBox");

    const updateColor = () => {
        let r = red.value;
        let g = green.value;
        let b = blue.value;
        colorBox.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    }

    red.addEventListener("input", updateColor);
    green.addEventListener("input", updateColor);
    blue.addEventListener("input", updateColor);

    updateColor();

    const showColorNumber = () => {
        let txtOutputRed = document.getElementById("txtOutput1");
        let txtOutputGreen = document.getElementById("txtOutput2");
        let txtOutputBlue = document.getElementById("txtOutput3");

        txtOutputRed.innerHTML ="Rood " + red.value.toString();
        txtOutputGreen.innerHTML = "Groen " +green.value.toString();
        txtOutputBlue.innerHTML = "Blauw " + blue.value.toString();
    }

    red.addEventListener("input", showColorNumber);
    green.addEventListener("input", showColorNumber);
    blue.addEventListener("input", showColorNumber);

    showColorNumber();

    const saveBtn = document.getElementById("saveBtn");
    const savedColors = document.getElementById("savedColors");

    const saveColor = () => {
        let r = red.value;
        let g = green.value;
        let b = blue.value;
        let rgb = `rgb(${r}, ${g}, ${b})`;

        // swatch container
        const swatch = document.createElement("div");
        swatch.className = "saved-swatch";
        swatch.style.backgroundColor = rgb;

        // delete knop
        const del = document.createElement("button");
        del.className = "delete-btn";
        del.textContent = "X";

        // delete functionaliteit
        del.addEventListener("click", (event) => {
            event.stopPropagation(); // voorkomt dat swatch wordt aangeklikt
            swatch.remove();
        });

        // klik op swatch → colorpicker instellen
        swatch.addEventListener("click", () => {
            red.value = r;
            green.value = g;
            blue.value = b;
            updateColor();
            showColorNumber();
        });

        swatch.appendChild(del);
        savedColors.appendChild(swatch);
    };

    saveBtn.addEventListener("click", saveColor);
}
window.addEventListener("load", setup);