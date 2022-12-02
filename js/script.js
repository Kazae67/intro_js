const title = document.querySelector("h1");
console.log(title)

const divBoxes = document.querySelector("#boxes");
console.log(divBoxes)

const boxes = document.querySelectorAll(".box")
console.log(boxes)

// Lorque je clique sur mon titre
title.addEventListener("click", () => {
    title.style.color = "yellow"
})

/*
    click > simple clic
    dblclick > double clic
    mouseover > survole de la souris
*/

boxes.forEach((box, index) => {
    box.addEventListener("click", () => {
        console.log("Boite n°" + (index + 1) + "cliquée !")
        box.classList.toggle("active")
    })
})
