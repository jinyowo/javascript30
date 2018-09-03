document.addEventListener('DOMContentLoaded', init);

function init() {
	setDate(); // 최초 실행
	setInterval(setDate, 1000);
}

function setDate() {
	const now = new Date();

	setHours(now.getHours(), now.getMinutes());
	setMinutes(now.getMinutes());
	setSeconds(now.getSeconds());
}

function setHours(hour, min) {
	const hourHand = document.querySelector('.hour-hand');
	let deg = (hour / 12) * 360 + 90 + (min / 60) * 30;

	resetTransitionEffect(deg, 90, hourHand); // 23:59 ~ 00:00 이 되는 시점
	hourHand.style.transform = `rotate(${deg}deg)`;
}

function setMinutes(min) {
	const minHand = document.querySelector('.min-hand');
	let deg = (min / 60) * 360 + 90;

	resetTransitionEffect(min, 0, minHand); // **:59 ~ **:00 이 되는 시점
	minHand.style.transform = `rotate(${deg}deg)`;
}

function setSeconds(second) {
	const secondHand = document.querySelector('.second-hand');
	let deg = (second / 60) * 360 + 90;

	resetTransitionEffect(second, 0, secondHand); // **:**:59 ~ **:**:00 이 되는 시점
	secondHand.style.transform = `rotate(${deg}deg)`;
}

function resetTransitionEffect(value, compare, hand) {
	if (value === compare) {
		hand.classList.remove('transition-ing');
	} else if (!hand.classList.contains('transition-ing') && value > compare) {
		hand.classList.add('transition-ing');
	}
}