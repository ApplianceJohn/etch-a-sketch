const grid = document.getElementById("grid");

var gridSize = 32;
var rndm = false;

function draw(e) {
	if (pressed) {
		this.style.zIndex = "10";
		this.style.position = "relative";

		if (!rndm) {
			this.style.backgroundColor = "#EEEEEE";
			this.style.boxShadow = "0 0 7px 5px rgba(238, 238, 238, 0.3)";
		} else {
			this.style.backgroundColor = "#F00A0A";
			this.style.boxShadow = "0 0 7px 5px rgba(240, 10, 10, 0.3)";
		}
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

function recolor(e) {
	if (this.value === "White") {
		this.value = "Red";
		rndm = true;
	} else {
		this.value = "White";
		rndm = false;
	}
}

function redo(e) {
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
		var br = document.createElement("br");
		grid.appendChild(br);
	}
}

var pressed = 0;
document.body.onmousedown = function() {
	++pressed;
};
document.body.onmouseup = function() {
	--pressed;
};

var button = [
	document.getElementById("butt"),
	document.getElementById("pegType"),
	document.getElementById("clear")
];
button[0].addEventListener("click", redraw);
button[1].addEventListener("click", recolor);
button[2].addEventListener("click", redo);

generator();
