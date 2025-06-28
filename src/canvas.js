const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "black";
ctx.fillRect(0, 0, canvas.width, canvas.height);

ctx.globalCompositeOperation = "destination-out";

ctx.font = "bold 100px Arial";
ctx.textAlign = "center";
ctx.fillText("COSMO", 845, 220);

const planetaryCoordinatesX = 320;
const planetaryCoordinatesY = 350;

ctx.beginPath();
ctx.arc(planetaryCoordinatesX, planetaryCoordinatesY, 60, 0, 360);
ctx.fill();

const orbits = [160, 210, 260];
ctx.lineWidth = 3;
orbits.forEach((radius) => {
	ctx.beginPath();
	ctx.arc(planetaryCoordinatesX, planetaryCoordinatesY, radius, 0, 360);
	ctx.stroke();
});

orbits.forEach((radius, i) => {
	const angle = 180 * (i + 1);
	const x = planetaryCoordinatesX + radius * Math.cos(angle);
	const y = planetaryCoordinatesY + radius * Math.sin(angle);

	ctx.globalCompositeOperation = "source-over";

	ctx.beginPath();
	ctx.arc(x, y, 30, 0, 360);
	ctx.fillStyle = "black";
	ctx.fill();

	ctx.globalCompositeOperation = "destination-out";

	ctx.beginPath();
	ctx.arc(x, y, 20, 0, 360);
	ctx.fill();
});

ctx.globalCompositeOperation = "source-over";
