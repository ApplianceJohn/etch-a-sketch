const grid = document.getElementById("grid");

var gridSize = 32;

function draw(e) {
    if (pressed) {
        this.style.zIndex = "10";
        this.style.position = "relative";
        this.style.backgroundColor = "#EEEEEE";
        this.style.boxShadow = "0 0 7px 5px rgba(230, 230, 230, 0.4)";
    }
}

function redraw(e) {
    var input = parseInt(prompt("Enter a new grid size:"));

    if (isNaN(input)) {
        alert("Input must be a valid number!");
        return;
    }

    gridSize = input;
    generator();
}

function generator() {
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }

    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            var d = document.createElement("div");
            d.addEventListener("mouseover", draw);
            d.className = "square";
            d.style.width = `calc(100% / ${gridSize})`;
            d.style.height = `calc(100% / ${gridSize})`;
            d.style.backgroundColor = "black";
            grid.appendChild(d);
        }
        var br = document.createElement('br');
        grid.appendChild(br);
    }

}

var pressed = 0;
document.body.onmousedown = function () {
    ++pressed;
}
document.body.onmouseup = function () {
    --pressed;
}

var button = document.getElementById("butt");
button.addEventListener("click", redraw);

generator();