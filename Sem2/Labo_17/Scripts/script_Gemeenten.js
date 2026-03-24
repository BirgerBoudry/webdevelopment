let gemeenten = [];
let invoer;

while (true) {

    invoer = prompt("Geef een gemeente in");

    if (invoer === null || invoer === "stop") {
        break;
    }

    gemeenten.push(invoer);
}

gemeenten.sort();

let lijst = document.getElementById("gemeentenLijst");

for (let i = 0; i < gemeenten.length; i++) {

    let option = document.createElement("option");
    option.text = gemeenten[i];

    lijst.appendChild(option);
}