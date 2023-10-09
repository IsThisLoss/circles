console.log('Start')


var X = 50;
var Y = 50;
var radius = 25;
var score_value = 0;

const canvas = document.getElementById("main");
canvas.onclick = onClick;

const score = document.getElementById("score");

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getColor() {
	var colors = ["green", "red", "blue", "orange"];
	return colors[getRandomInt(0, colors.length-1)]
}

function onClick(e) {
	var rect = this.getBoundingClientRect();
	var x = e.clientX - rect.left;
	var y = e.clientY - rect.top;
	
	var dx = x - X;
    var dy = y - Y;

    dist = Math.abs(Math.sqrt(dx*dx + dy*dy));

	if (dist <= radius) {
		X = getRandomInt(radius, 360 - radius);
		Y = getRandomInt(radius, 640 - radius);
		incScore();
		draw();
	} else {
		resetScore();
	}
};

function incScore() {
	score_value = score_value + 1;
	score.innerHTML = `Score ${score_value}`;
}

function resetScore() {
	score_value = 0;
	score.innerHTML = `Score ${score_value}`;
}

function draw() {
	const ctx = canvas.getContext("2d");
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.fillStyle = "black";
	ctx.fillRect(0, 0, canvas.width, canvas.height);

	ctx.beginPath();
	ctx.arc(X, Y, radius, 0, 2 * Math.PI);
	ctx.fillStyle = getColor();
	ctx.fill();
	ctx.closePath();
}

draw()