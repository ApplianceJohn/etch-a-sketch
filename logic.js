const grid = document.getElementById("grid");

var gridSize = 64;

function draw(e) {
    this.style.backgroundColor = "black";
}

function redraw(e) {
    var input = parseInt(document.getElementById("insert").value);
    
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
            grid.appendChild(d);
        }
        var br = document.createElement('br');
        grid.appendChild(br);
    }

}

var button = document.getElementById("butt");
button.addEventListener("click", redraw);

generator();