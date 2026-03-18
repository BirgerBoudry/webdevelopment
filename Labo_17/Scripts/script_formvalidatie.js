const isGetal = (tekst) => {
    return !isNaN(tekst);
};

function resetFouten() {
    document.querySelectorAll("input").forEach(i => i.classList.remove("invalid"));
    document.querySelectorAll("span").forEach(e => e.textContent = "");
}

function valideer() {
    resetFouten();
    let geldig = true;

    const voornaam = document.getElementById("voornaam");
    const familienaam = document.getElementById("familienaam");
    const geboorte = document.getElementById("geboorte");
    const email = document.getElementById("email");
    const kinderen = document.getElementById("kinderen");

    if (voornaam.value.length > 30) {
        fout(voornaam, "errVoornaam", "max. 30 karakters");
        geldig = false;
    }

    if (familienaam.value.trim() === "") {
        fout(familienaam, "errFamilienaam", "verplicht veld");
        geldig = false;
    } else if (familienaam.value.length > 50) {
        fout(familienaam, "errFamilienaam", "max 50 karakters");
        geldig = false;
    }

    if (geboorte.value.trim() === "") {
        fout(geboorte, "errGeboorte", "verplicht veld");
        geldig = false;
    } else if (!valideerDatum(geboorte.value)) {
        fout(geboorte, "errGeboorte", "formaat is niet jjjj-mm-dd");
        geldig = false;
    }

    if (email.value.trim() === "") {
        fout(email, "errEmail", "verplicht veld");
        geldig = false;
    } else if (!valideerEmail(email.value)) {
        fout(email, "errEmail", "geen geldig email adres");
        geldig = false;
    }

    if (!isGetal(kinderen.value) || kinderen.value < 0) {
        fout(kinderen, "errKinderen", "is geen positief getal");
        geldig = false;
    } else if (kinderen.value > 99) {
        fout(kinderen, "errKinderen", "is te vruchtbaar");
        geldig = false;
    }

    if (geldig) {
        alert("proficiat!");
    }
}

function fout(input, errorId, message) {
    input.classList.add("invalid");
    document.getElementById(errorId).textContent = message;
}

function valideerDatum(d) {
    if (d.length !== 10) return false;
    if (d[4] !== '-' || d[7] !== '-') return false;

    const jaar = d.slice(0, 4);
    const maand = d.slice(5, 7);
    const dag = d.slice(8, 10);

    return !isNaN(jaar) && !isNaN(maand) && !isNaN(dag);
}

function valideerEmail(e) {
    const delen = e.split("@");
    return delen.length === 2 && delen[0].length > 0 && delen[1].length > 0;
}