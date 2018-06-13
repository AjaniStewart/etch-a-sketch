const container = document.querySelector(".container");

let createGrid = length => {
    container.setAttribute("style", `grid-template: repeat(${length},1fr)/repeat(${length},1fr)`);
    for (let i = 0; i < length ** 2; ++i) {
        let div = document.createElement("div");
        div.classList.add("box");
        container.appendChild(div);
    }
};

//from mdn website
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

let colorMode = false;

let createEventListeners = container => {
    container.forEach(bx => {
        if (!colorMode)
        {
            let color = 255;
            bx.addEventListener("mouseover",e => {
                 color -= 50;
                 e.target.setAttribute("style", `background: rgb(${color},${color},${color})`);
            });
        } else {
            bx.addEventListener("mouseover", e => {
                let color1 = getRandomInt(0,256);
                let color2 = getRandomInt(0,256);
                let color3 = getRandomInt(0,256);
                e.target.setAttribute("style", `background: rgb(${color1},${color2},${color3})`);
            });
        }
    });
}

let clearGrid = () => {
    boxes.forEach(bx => {
        bx.setAttribute("style", "background: rgb(255,255,255)");
    });
}

createGrid(16);
let boxes = document.querySelectorAll(".box");
createEventListeners(boxes);


const reset = document.querySelector(".clear");
reset.addEventListener("click", clearGrid);

const newGrid = document.querySelector(".new-grid");
newGrid.addEventListener("click", () => {
    let length = parseInt(prompt("enter a length", 16));
    createGrid(length);
    clearGrid();
    boxes = document.querySelectorAll(".box");
    createEventListeners(boxes);
});

const toggleColor = document.querySelector(".color");
toggleColor.addEventListener("click", () => { colorMode = !colorMode;
                            createEventListeners(boxes); });