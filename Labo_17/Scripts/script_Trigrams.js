let woord = "onoorbaar";

for (let i = 0; i < woord.length - 2; i++) {
    let trigram = woord.substring(i, i + 3);
    console.log(trigram);
}