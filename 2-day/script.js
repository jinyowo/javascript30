document.addEventListener('DOMContentLoaded', init);

function init() {
	setDate(); // 최초 실행
	setInterval(setDate, 1000);
}
function setDate() {
	const now = new Date();

	setHours(now.getHours());
	setMinutes(now.getMinutes());
	setSeconds(now.getSeconds());
}

function setHours(hour) {
	const hourHand = document.querySelector('.hour-hand');
	let deg = (hour / 12) * 360 + 90;

	hourHand.style.transform = `rotate(${deg}deg)`;
}

function setMinutes(min) {
	const minHand = document.querySelector('.min-hand');
	let deg = (min / 60) * 360 + 90;

	minHand.style.transform = `rotate(${deg}deg)`;
}

function setSeconds(second) {
	const secondHand = document.querySelector('.second-hand');
	let deg = (second / 60) * 360 + 90;

	secondHand.style.transform = `rotate(${deg}deg)`;
}
