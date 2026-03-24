let zin = "Gisteren zat de jongen op de stoep en at de helft van de appel";
let woord = "";

for (let i = 0; i <= zin.length; i++) {

    if (zin[i] === " " || i === zin.length) {

        if (woord === "de") {
            console.log("het");
        } else {
            console.log(woord);
        }

        woord = "";

    } else {
        woord += zin[i];
    }
}