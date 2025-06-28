const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "black";
ctx.fillRect(0, 0, canvas.width, canvas.height);

ctx.font = "bold 100px Arial";
ctx.textAlign = "center";
ctx.fillStyle = "white";
ctx.fillText("COSMO", 843, 218);

ctx.globalCompositeOperation = "destination-out";
ctx.font = "bold 100px Arial";
ctx.textAlign = "center";
ctx.fillText("COSMO", 845, 220);

const planetaryCoordinatesX = 320;
const planetaryCoordinatesY = 350;

ctx.beginPath();
ctx.arc(planetaryCoordinatesX, planetaryCoordinatesY, 60, 0, Math.PI * 2);
ctx.fill();

const orbits = [160, 210, 260];
ctx.lineWidth = 3;
orbits.forEach((radius) => {
	ctx.beginPath();
	ctx.arc(
		planetaryCoordinatesX,
		planetaryCoordinatesY,
		radius,
		0,
		Math.PI * 2
	);
	ctx.stroke();
});

orbits.forEach((radius, i) => {
	const angle = 180 * (i + 1);
	const x = planetaryCoordinatesX + radius * Math.cos(angle);
	const y = planetaryCoordinatesY + radius * Math.sin(angle);

	ctx.globalCompositeOperation = "source-over";

	ctx.beginPath();
	ctx.arc(x, y, 30, 0, Math.PI * 2);
	ctx.fillStyle = "black";
	ctx.fill();

	ctx.globalCompositeOperation = "destination-out";

	ctx.beginPath();
	ctx.arc(x, y, 20, 0, Math.PI * 2);
	ctx.fill();
});

ctx.globalCompositeOperation = "source-over";

ctx.beginPath();
ctx.arc(
	planetaryCoordinatesX, // center x
	planetaryCoordinatesY, // center y
	350, // radius
	Math.PI, // start angle (180°, left)
	2 * Math.PI // end angle (360°, right)
);
ctx.strokeStyle = "red";
ctx.lineWidth = 5;
ctx.stroke();

// Draw a quadratic Bezier curve
ctx.beginPath();
ctx.moveTo(200, 700); // Start point
ctx.quadraticCurveTo(
	600,
	200, // Control point (pulls the curve)
	1000,
	700 // End point
);
ctx.strokeStyle = "green";
ctx.lineWidth = 5;
ctx.stroke();

// Draw a cubic Bezier curve
ctx.beginPath();
ctx.moveTo(200, 800); // Start point
ctx.bezierCurveTo(
	400,
	400, // First control point
	800,
	1200, // Second control point
	1000,
	800 // End point
);
ctx.strokeStyle = "blue";
ctx.lineWidth = 5;
ctx.stroke();
