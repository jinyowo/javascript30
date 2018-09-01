function init() {
	attachEvent();
}

function attachEvent() {
	window.addEventListener("keydown", onKeydown);
	window.addEventListener("keyup", onKeyup);
}

function onKeydown(e) {
	const pressedKeycode = e.keyCode;
	const key = findKey(pressedKeycode);
	const sound = findSound(pressedKeycode);

	if (key === null || sound === null) return;

	key.classList.add("playing");
	sound.load();
	sound.play();
}

function onKeyup(e) {
	const pressedKeycode = e.keyCode;
	const key = findKey(pressedKeycode);
	const sound = findSound(pressedKeycode);

	if (key === null || sound === null) return;

	key.classList.remove("playing");
}

/**
 * 해당 keycode와 일치하는 키보드div를 반환
 * @param keycode
 */
function findKey(keycode) {
	return document.querySelector(`div.key[data-key="${keycode}"]`);
}

/**
 * 해당 keycode와 일치하는 사운드를 반환
 * @param keycode
 */
function findSound(keycode) {
	return document.querySelector(`audio[data-key="${keycode}"]`);
}

document.addEventListener("DOMContentLoaded", init);
