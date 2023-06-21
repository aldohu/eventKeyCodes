const eventKey = document.getElementById('event-key');
const eventKeycode = document.getElementById('event-keycode');
const eventCode = document.getElementById('event-code');

document.addEventListener('keydown', (e) => {
	eventKey.textContent = e.key;
	eventKeycode.textContent = e.keyCode;
	eventCode.textContent = e.code;
});
