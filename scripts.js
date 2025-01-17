// grids = number of rows and columns we need
// gridContainer = the container where the rows need to be added
// gridSize = the grid size everytime the input field is changed

const gridContainer = document.querySelector("#grid-container");
const gridSize = document.querySelector("#gridSize");
const rainbow = document.querySelector("#rainbow");
const normal = document.querySelector("#normal");
const reset = document.querySelector("#reset");
const color = document.querySelector("#chooseColor");
const shade = document.querySelector("#shading");

let grids = 16;
let mode = '';
let after = false;

const getRandomColor = () => {
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

            let normalListener = (e) => {
                e.target.style.backgroundColor = color.value;
                e.target.style.opacity = 1;
            }
            let rainbowListener;
            let shadeListener;

            // Default
            col.addEventListener('mouseover', normalListener);

            // Normal Mode
            normal.addEventListener("click", function normalMode() {
                mode = "normal";
                if (shadeListener) col.removeEventListener('mouseover',shadeListener);
                if (rainbowListener) col.removeEventListener('mouseover',rainbowListener);
                col.addEventListener('mouseover', normalListener);
            });
            // Rainbow Mode
            rainbow.addEventListener("click", function rainbowMode() {
                mode = "rainbow";
                if(shadeListener) col.removeEventListener('mouseover',shadeListener);
                rainbowListener = (e) => {
                    e.target.style.backgroundColor = getRandomColor();
                }
                col.addEventListener('mouseover', rainbowListener);
            });
            // Shading mode
            shade.addEventListener("click", function shadeMode() {
                let opacity = 0.2;
                if(mode === "normal" || mode === '') {
                    col.removeEventListener('mouseover', normalListener);
                    shadeListener = (e) => {
                        e.target.style.backgroundColor = color.value;
                        e.target.style.opacity = opacity;
                        opacity += 0.1;
                    } 
                }   
                else if(mode === "rainbow") {
                    col.removeEventListener('mouseover', rainbowListener);
                    shadeListener = (e) => {
                        const randomColor = getRandomColor();
                        e.target.style.backgroundColor = randomColor;
                        e.target.style.opacity = opacity;
                        opacity += 0.1;
                    }
                }
                col.addEventListener('mouseover', shadeListener);
            })
        }
        gridContainer.appendChild(row);
    }
}

addRows(grids);

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

const resetColor = () => {
    const cells = document.querySelectorAll(".col");
    cells.forEach(cell => {
        cell.style.backgroundColor = ""; // Reset to default background color
        cell.style.opacity = ""; // Reset to default opacity
    });
}

reset.addEventListener("click", resetColor);




