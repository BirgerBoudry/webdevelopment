const geboorteDatum = new Date(2007, 4, 1);
// 0 = januari, 1 = feb, 2 = maart, 3 = april dus 4 = mei

const vandaag = new Date();


const verschilMiliseconden = vandaag - geboorteDatum;


const dagen = Math.floor(verschilMiliseconden / (1000 * 60 * 60 * 24));


console.log("Aantal dagen sinds je geboorte:", dagen);