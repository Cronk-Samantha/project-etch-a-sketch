const flexContainer = document.querySelector("#container");

const gridSize = 16;

// For loop to create 16 X 16 div elements
for (let i = 0; i < gridSize * gridSize; i++) {
    const div = document.createElement("div");
    div.classList.add("grid-item");
    flexContainer.appendChild(div);
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