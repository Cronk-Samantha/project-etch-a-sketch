const flexContainer = document.querySelector("#container");

document.getElementById("generate").onclick = userPrompt;

function userPrompt() {
    let userInput = prompt("Please enter the number of desired squares per side (Example: Entering the number 3 would result in 9 total squares in your grid because 3 * 3 = 9)");
    if (userInput !== null && !isNaN(userInput) && userInput >= 1 && userInput <= 100) {
        let gridSize = parseInt(userInput);
        generateGrid(gridSize);
    } else {
        alert("Invalid input. Please try again.");
        return userPrompt();
    }
}


function generateGrid(gridSize) {
    flexContainer.innerHTML = "";
        for (let i = 0; i < gridSize * gridSize; i++) {
            const div = document.createElement("div");
            div.classList.add("grid-item");
            flexContainer.appendChild(div);
        }
}

const gridItems = document.querySelectorAll(".grid-item");

gridItems.forEach(item => {
    item.onmouseenter = mouseEnter;
    item.onmouseleave = mouseLeave;
})

function mouseEnter() {
    this.style.backgroundColor = "black";
}

function mouseLeave() {
    this.style.backgroundColor = "";
}
