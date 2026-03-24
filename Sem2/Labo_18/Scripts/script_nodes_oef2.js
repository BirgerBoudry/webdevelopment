// 1. Vul de gegevens in
document.getElementById("nickname").textContent = "Burger";
document.getElementById("favorites").textContent = "Games, muziek";
document.getElementById("hometown").textContent = "Waregem";

// 2. Alle li elementen rood maken
let items = document.querySelectorAll("li");

items.forEach(function(item) {
    item.className = "listitem";
});

// 3. Afbeelding toevoegen
let img = document.createElement("img");
img.setAttribute("src", "Images/img.png");

document.body.appendChild(img);