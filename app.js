const slider = document.querySelector(".slider");
const hero = document.querySelector(".horizontal");

const tl = new TimelineMax();

tl.fromTo(hero, 1, {height: "0"}, {height: "100%", ease: Power2.easeInOut})
.fromTo(hero,1.2, {widh: "100%"}, {widh: "100%", ease: Power2.easeInOut})

.fromTo(slider,1.2, {x: "-100%"}, {x: "0%", ease: Power2.easeInOut})