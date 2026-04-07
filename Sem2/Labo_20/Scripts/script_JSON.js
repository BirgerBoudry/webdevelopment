let student = {
    voornaam : "Birger",
    familienaam : "Boudry",
    geboorteDatum : new Date("2007-04-01"),
    adres : { // een object
        straat : "Gentsesteenweg 20",
        postcode : "8530",
        gemeente : "Harelbeke"
    },
    isIngeschreven : true,
    namenVanExen :
        ["Romy"], // een array
    aantalAutos : 1
}

let jsonString1 = JSON.stringify(student);


console.log("JSON string:");
console.log(jsonString1);


let jsonString2 = '{"voornaam":"Jan","familienaam":"Janssens","geboorteDatum":"1993-12-31T00:00:00.000Z","adres":{"straat":"Kerkstraat 13","postcode":"8500","gemeente":"Kortrijk"},"isIngeschreven":true,"namenVanExen":["Sofie","Berta","Philip","Albertoooo"],"aantalAutos":2}';


let student2 = JSON.parse(jsonString2);


console.log("Voornaam:", student2.voornaam);


console.log("Volledig object:", student2);