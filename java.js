const flexContainer = document.querySelector("#container");


// USER CLICKS BUTTON & A PROMPT WINDOW APPEARS
document.getElementById("generate").onclick = userPrompt;

function userPrompt() {
    let userInput = prompt("Please enter the number of desired squares per side (Example: Entering the number 3 would result in 9 total squares in your grid because 3 * 3 = 9)");
    if (userInput !== null && !isNaN(userInput) && userInput >= 1 && userInput <= 100) {
        let gridSize = parseInt(userInput);
        generateGrid(gridSize);
    } else {
        alert("Invalid input. Please try again.");
        userPrompt();
    }
}

// USER INPUT IS PASSED INTO THIS FUNCTION TO GENERATE NEW GRID
function generateGrid(gridSize) {
    flexContainer.innerHTML = "";
    const gridItemSize = 1000 / gridSize;
        for (let i = 0; i < gridSize * gridSize; i++) {
            const div = document.createElement("div");
            div.classList.add("grid-item");
            div.style.width = `${gridItemSize}px`;
            div.style.height = `${gridItemSize}px`;
            flexContainer.appendChild(div);
        }
    divHoverEffect();
}

function divHoverEffect() {
    const gridItems = document.querySelectorAll(".grid-item");
    gridItems.forEach(div => {
       div.addEventListener("mouseenter", () => {
        div.style.backgroundColor = userColorChoice;
       });
       div.addEventListener("mouseleave", () => {
        div.style.backgroundColor = "";
       }) 
    })
}

// ASSIGN NEW VALUE FOR COLOR CHOICE BASED ON WHAT RADIO BUTTON IS CHOSEN
let colorChoices = document.querySelectorAll('input[name="color-choice"]');
let userColorChoice = "";

colorChoices.forEach(btn => {
    btn.addEventListener("change", () => {
        userColorChoice = btn.value;
        divHoverEffect();
    })
})