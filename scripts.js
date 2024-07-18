// grids = number of rows and columns we need
// gridContainer = the container where the rows need to be added
// gridSize = the grid size everytime the input field is changed

const gridContainer = document.querySelector("#grid-container");
const gridSize = document.querySelector("#gridSize");
const rainbow = document.querySelector("#rainbow");
const normal = document.querySelector("#normal");
const reset = document.querySelector("#reset");
const color = document.querySelector("#chooseColor");

console.log(color);

let grids = 1;

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

const addRows = (grids) => {
    for(let i=1; i<=grids; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        for(let j=1; j<=grids; j++) {
            const col = document.createElement("div");
            col.classList.add("col");
            row.appendChild(col);
            col.addEventListener('mouseover', (e) => {
                e.target.style.backgroundColor = color.value;
            });
            // Normal Mode
            normal.addEventListener("click", () => {
                col.addEventListener('mouseover', (e) => {
                    e.target.style.backgroundColor = color.value;
                });
            });
            // Rainbow Mode
            rainbow.addEventListener("click", () => {
                col.addEventListener('mouseover', (e) => {
                    const randomColor = getRandomColor();
                    e.target.style.backgroundColor = randomColor;
                })
            });
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
});





