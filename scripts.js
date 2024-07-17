// grids = number of rows and columns we need
// gridSize = the grid size everytime the input field is changed

const gridContainer = document.querySelector("#grid-container");

let grids = 1;
console.log(grids);
const gridSize = document.querySelector("#gridSize");
gridSize.addEventListener('input', (event) => {
    grids = event.target.value;
    console.log(grids);
});

const addRows = (grids) => {
    for(let i=1; i<=grids; i++) {
        addCols(grids);
    }
}

const addCols = (grids) => {
    for(let i=1; i<=grids; i++) {
        const col = document.createElement("div");
        col.classList.add("col");
    }
}


