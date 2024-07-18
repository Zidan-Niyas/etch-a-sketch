// grids = number of rows and columns we need
// gridContainer = the container where the rows need to be added
// gridSize = the grid size everytime the input field is changed

const gridContainer = document.querySelector("#grid-container");
const gridSize = document.querySelector("#gridSize");

const color = document.querySelector("#chooseColor");
console.log(color);

let grids = 1;
console.log(grids);

const addRows = (grids) => {
    for(let i=1; i<=grids; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        console.log(`row ${i} added`);
        for(let j=1; j<=grids; j++) {
            const col = document.createElement("div");
            col.classList.add("col");
            row.appendChild(col);
            console.log(`col ${j} of row ${i} added`);
        }
        gridContainer.appendChild(row);
    }
}


gridSize.addEventListener('input', (event) => {
    grids = event.target.value;
    console.log(grids);
    while(gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
    addRows(grids);
});

color.addEventListener('input', (event) => {
    color = event.target.value;
})

col.addEventListener("mouseover", () => {
    col.style.backgroundColor = color;
})



