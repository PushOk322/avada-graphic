const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "black";
ctx.fillRect(0, 0, canvas.width, canvas.height);

ctx.globalCompositeOperation = "destination-out";

ctx.font = "bold 100px Arial";
ctx.textAlign = "center";
ctx.fillText("COSMO", 845, 220);

const orbits = [160, 210, 260];
ctx.lineWidth = 2;
orbits.forEach((radius) => {
	ctx.beginPath();
	ctx.arc(320, 350, radius, 0, Math.PI * 2);
	ctx.stroke();
});

orbits.forEach((radius, i) => {
	const angle = (Math.PI / 1.5) * (i + 1);
	const x = 320 + radius * Math.cos(angle);
	const y = 350 + radius * Math.sin(angle);

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
