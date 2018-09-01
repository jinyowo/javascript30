function setDate() {
	const startDate = new Date();
	setHours(startDate.getHours());
	setMinutes(startDate.getMinutes());
	setSeconds(startDate.getSeconds());
}

function setHours(hour) {
	let deg = 90;

	deg += (hour / 12) * 360;
	document.querySelector('.hour-hand').style.transform = 'rotate('+ deg +'deg)';
}

function setMinutes(min) {
	let deg = 90;

	deg += (min / 60) * 360;
	document.querySelector('.min-hand').style.transform = `rotate(${deg}deg)`;
}

function setSeconds(second) {
	let deg = 90;

	deg += (second / 60) * 360;
	document.querySelector('.second-hand').style.transform = `rotate(${deg}deg)`;
}

function startClock() {
 	setInterval(setDate, 1000)
}
setDate();
startClock();