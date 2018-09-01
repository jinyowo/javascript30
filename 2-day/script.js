function setDate() {
	const startDate = new Date();
	setHours(startDate.getHours());
	setMinutes(startDate.getMinutes());
	setSeconds(startDate.getSeconds());
}

function setHours(hour) {
	let deg = 90;

	if (hour > 12) {
		hour -= 12;
	}

	deg += hour * 30;
	document.querySelector('.hour-hand').style.transform = 'rotate('+ deg +'deg)';
}

function setMinutes(min) {
	let deg = 90;

	deg += min * 6;
	document.querySelector('.min-hand').style.transform = 'rotate('+ deg +'deg)';
}

function setSeconds(second) {
	let deg = 90;

	deg += second * 6;
	document.querySelector('.second-hand').style.transform = 'rotate('+ deg +'deg)';
}

function startClock() {
}
setDate();
startClock();