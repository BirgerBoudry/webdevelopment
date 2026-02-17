const setup = () => {
    let btn = document.getElementById("btnToon");
    btn.addEventListener("click", toonSubstring);
}

const toonSubstring = () => {
    let woord = document.getElementById("txtWoord").value;
    let start = parseInt(document.getElementById("txtStart").value);
    let einde = parseInt(document.getElementById("txtEinde").value);

    let resultaat = woord.substring(start, einde);

    document.getElementById("txtOutput").innerHTML = resultaat;
}

window.addEventListener("load", setup);
