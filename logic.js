const grid = document.getElementById("grid");

var gridSize = 8;

function draw(e) {
    this.style.backgroundColor("black");
}

//function generator(size) =>
while (grid.firstChild) {
    grid.removeChild(grid.firstChild);
}

for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
        var d = document.createElement("div");
        d.className = "square";
        d.addEventListener('onmouseover', draw);
        d.style.width = `calc(100% / ${gridSize})`;
        d.style.height = `calc(100% / ${gridSize})`;
        grid.appendChild(d);
    }
    var br = document.createElement('br');
    grid.appendChild(br);
}
//=> end generator