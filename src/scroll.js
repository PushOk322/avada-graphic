import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

gsap.timeline({
	scrollTrigger: {
		trigger: ".scene-1",
		scrub: true,
		pin: true,
		markers: true,
	},
})
	.to(".phone-1", {
		rotate: 15,
		x: 700,
		duration: 0.875,
	})
	.to(".phone-1", {
		rotate: 0,
		x: 800,
		duration: 0.125,
	});

gsap.timeline({
	scrollTrigger: {
		trigger: ".scene-2",
		scrub: true,
		pin: true,
		markers: true,
	},
}).to(".phone-2", {
	scale: 0.5,
	opacity: 0,
	y: 200,
});

gsap.timeline({
	scrollTrigger: {
		trigger: ".scene-3",
		scrub: true,
		pin: true,
		markers: true,
	},
}).fromTo(
	".phone-3",
	{
		opacity: 0,
		rotate: -45,
	},
	{
		opacity: 1,
		rotate: 0,
	}
);
