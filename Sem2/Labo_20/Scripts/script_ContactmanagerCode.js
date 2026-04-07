let personen = [];
let huidigeIndex = -1;

// =========================
// FORMULIER
// =========================

const leesFormulier = () => {
    return {
        voornaam: document.getElementById("txtVoornaam").value,
        familienaam: document.getElementById("txtFamilienaam").value,
        geboortedatum: document.getElementById("txtGeboorteDatum").value,
        email: document.getElementById("txtEmail").value,
        aantalKinderen: document.getElementById("txtAantalKinderen").value
    };
};

const toonPersoon = (persoon) => {
    document.getElementById("txtVoornaam").value = persoon.voornaam;
    document.getElementById("txtFamilienaam").value = persoon.familienaam;
    document.getElementById("txtGeboorteDatum").value = persoon.geboortedatum;
    document.getElementById("txtEmail").value = persoon.email;
    document.getElementById("txtAantalKinderen").value = persoon.aantalKinderen;
};

const leegFormulier = () => {
    document.getElementById("txtVoornaam").value = "";
    document.getElementById("txtFamilienaam").value = "";
    document.getElementById("txtGeboorteDatum").value = "";
    document.getElementById("txtEmail").value = "";
    document.getElementById("txtAantalKinderen").value = "";
    clearAllErrors(); // 🔥 BELANGRIJK
};

const updateLijst = () => {
    const lst = document.getElementById("lstPersonen");
    lst.innerHTML = "";

    for (let i = 0; i < personen.length; i++) {
        let option = document.createElement("option");
        option.textContent = personen[i].voornaam + " " + personen[i].familienaam;
        option.value = i;
        lst.appendChild(option);
    }
};

const bewaarBewerktePersoon = () => {
    console.log("Klik op bewaar");

    if (!valideer()) return;

    let persoon = leesFormulier();

    if (huidigeIndex === -1) {
        // Voeg de nieuwe persoon bovenaan de lijst toe
        personen.unshift(persoon); // Gebruik unshift om aan het begin toe te voegen
        huidigeIndex = 0; // Zet de huidige index op 0 omdat de nieuwe persoon bovenaan staat
    } else {
        personen[huidigeIndex] = persoon; // Bijwerken van de bestaande persoon
    }

    updateLijst(); // Update de lijst van personen

    document.getElementById("lstPersonen").value = huidigeIndex; // Selecteer de nieuwe of bewerkte persoon
};

const bewerkNieuwePersoon = () => {
    leegFormulier();
    huidigeIndex = -1;

    document.getElementById("lstPersonen").selectedIndex = -1;
};

const selecteerPersoon = () => {
    const lst = document.getElementById("lstPersonen");

    if (lst.value !== "") {
        huidigeIndex = parseInt(lst.value);
        toonPersoon(personen[huidigeIndex]);
    }
};

// =========================
// SETUP
// =========================

const setup = () => {
    document.getElementById("btnBewaar").addEventListener("click", bewaarBewerktePersoon);
    document.getElementById("btnNieuw").addEventListener("click", bewerkNieuwePersoon);
    document.getElementById("lstPersonen").addEventListener("change", selecteerPersoon);
};

window.addEventListener("load", setup);

// =========================
// VALIDATIE CODE
// =========================

const valideer = () => {
    valideerVoornaam();
    valideerFamilienaam();
    valideerGeboorteDatum();
    valideerEmail();
    valideerAantalKinderen();
};

const valideerVoornaam = () => {
    let txtVoornaam = document.getElementById("txtVoornaam");
    let voornaam = txtVoornaam.value.trim();
    if (voornaam.length > 30) {
        reportError(txtVoornaam, "max. 30 karakters");
    } else {
        clearError(txtVoornaam);
    }
};

const valideerFamilienaam = () => {
    let txtFamilienaam = document.getElementById("txtFamilienaam");
    let familienaam = txtFamilienaam.value.trim();
    if (familienaam.length == 0) {
        reportError(txtFamilienaam, "verplicht veld");
    } else if (familienaam.length > 50) {
        reportError(txtFamilienaam, "max. 50 karakters");
    } else {
        clearError(txtFamilienaam);
    }
};

const valideerGeboorteDatum = () => {
    let txtGeboorteDatum = document.getElementById("txtGeboorteDatum");
    let geboorteDatum = txtGeboorteDatum.value.trim();
    if (geboorteDatum.length != 10) {
        reportError(txtGeboorteDatum, "verplicht veld");
    } else {
        let formatCorrect = true;
        if (formatCorrect && !(geboorteDatum.charAt(4) == '-' && geboorteDatum.charAt(7) == '-')) {
            formatCorrect = false;
        }
        if (formatCorrect) {
            let yearText = geboorteDatum.substring(0, 4);
            if (!isPositiveNonZeroNumber(yearText)) {
                formatCorrect = false;
            }
        }
        if (formatCorrect) {
            let monthText = geboorteDatum.substring(5, 7);
            if (!isPositiveNonZeroNumber(monthText)) {
                formatCorrect = false;
            }
        }
        if (formatCorrect) {
            let dayText = geboorteDatum.substring(8, 10);
            if (!isPositiveNonZeroNumber(dayText)) {
                formatCorrect = false;
            }
        }

        if (formatCorrect) {
            clearError(txtGeboorteDatum);
        } else {
            reportError(txtGeboorteDatum, "formaat is niet jjjj-mm-dd");
        }
    }
};

const valideerEmail = () => {
    let txtEmail = document.getElementById("txtEmail");
    let email = txtEmail.value.trim();
    if (email.length == 0) {
        reportError(txtEmail, "verplicht veld");
    } else {
        let formatCorrect = true;
        let idx = email.indexOf("@");
        if (idx < 1 || idx == email.length - 1) {
            formatCorrect = false;
        }
        idx = email.indexOf("@", idx + 1);
        if (formatCorrect && idx != -1) {
            formatCorrect = false;
        }
        if (formatCorrect) {
            clearError(txtEmail);
        } else {
            reportError(txtEmail, "geen geldig email adres");
        }
    }
};

const valideerAantalKinderen = () => {
    let txtAantalKinderen = document.getElementById("txtAantalKinderen");
    let aantalKinderenText = txtAantalKinderen.value.trim();
    if (aantalKinderenText.length == 0) {
        reportError(txtAantalKinderen, "verplicht veld");
    } else if (!isPositiveNumber(aantalKinderenText)) {
        reportError(txtAantalKinderen, "is geen positief getal");
    } else {
        let aantal = parseInt(aantalKinderenText);
        if (aantal >= 99) {
            reportError(txtAantalKinderen, "te vruchtbaar");
        } else {
            clearError(txtAantalKinderen);
        }
    }
};

const isPositiveNumber = (text) => {
    let number = parseInt(text, 10);
    return !isNaN(number) && number >= 0;
};

const isPositiveNonZeroNumber = (text) => {
    let number = parseInt(text, 10);
    return !isNaN(number) && number > 0;
};

const reportError = (element, message) => {
    let elementId = element.getAttribute("id");
    let errElementId = "err" + elementId.substring(3, elementId.length);
    let errElement = document.getElementById(errElementId);
    element.className = "invalid";
    errElement.innerHTML = message;
};

const clearError = (element) => {
    let elementId = element.getAttribute("id");
    let errElementId = "err" + elementId.substring(3, elementId.length);
    let errElement = document.getElementById(errElementId);
    element.className = "";
    errElement.innerHTML = "";
};

const clearAllErrors = () => {
    let fieldIds = ["txtVoornaam", "txtFamilienaam", "txtGeboorteDatum", "txtEmail", "txtAantalKinderen"];
    for (let i = 0; i < fieldIds.length; i++) {
        clearError(document.getElementById(fieldIds[i]));
    }
};