document.addEventListener('DOMContentLoaded', init);

function init() {
	const keys = document.querySelectorAll('.key');

	keys.forEach(key => key.addEventListener('transitionend', removeTransition));
	window.addEventListener('keydown', onKeydown);
}

function removeTransition(e) {
	if (e.propertyName !== 'transform') return;

	this.classList.remove('playing');
}

function onKeydown(e) {
	const pressedKeycode = e.keyCode;
	const key = findKey(pressedKeycode);
	const sound = findSound(pressedKeycode);

	if (key === null || sound === null) return;

	key.classList.add('playing');
	sound.currentTime = 0; // rewind to the start. = sound.load();
	sound.play();
}

/**
 * 해당 keycode와 일치하는 키보드div를 반환
 * @param keycode
 */
function findKey(keycode) {
	return document.querySelector(`div.key[data-key='${keycode}']`);
}

/**
 * 해당 keycode와 일치하는 사운드를 반환
 * @param keycode
 */
function findSound(keycode) {
	return document.querySelector(`audio[data-key='${keycode}']`);
}


