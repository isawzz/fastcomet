function isToggle1State(key, n) {
	let toggle = DA.toggle[key];
	return toggle.state == n;
}
function mToggle1(ev) {
	let key = ev.target.getAttribute('data-toggle');
	let toggle = DA.toggle[key];
	toggle.state = (toggle.state + 1) % toggle.states.length;
	mStyle(toggle.elem, toggle.states[toggle.state]);
}
function mToggle1Elem(elem, key, nInitialState) {
	let states = [...arguments].slice(3);

	if (nundef(DA.toggle)) DA.toggle = {};

	let t = DA.toggle[key] = { key, elem, state: nInitialState, states };

	elem.setAttribute('data-toggle', key);
	mStyle(elem, { cursor: 'pointer' });
	mStyle(elem, states[nInitialState]);
	elem.onclick = mToggle;
}
function createTimer(element, mode = 'stopwatch', duration = 0) {
	let isRunning = false;
	let elapsed = 0;
	let interval = null;

	// Update the timer display
	function updateDisplay() {
		const time = mode === 'countdown' ? elapsed : elapsed;
		element.textContent = formatTime(Math.abs(time));
	}

	// Format time as hh:mm:ss
	function formatTime(seconds) {
		const h = Math.floor(seconds / 3600).toString().padStart(2, '0');
		const m = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
		const s = (seconds % 60).toString().padStart(2, '0');
		return `${h}:${m}:${s}`;
	}

	// Start the timer
	function start() {
		if (isRunning) return;

		isRunning = true;
		const startTime = Date.now();

		interval = setInterval(() => {
			const now = Date.now();
			const delta = Math.floor((now - startTime) / 1000);

			if (mode === 'countdown') {
				elapsed = duration - delta;
				if (elapsed <= 0) {
					elapsed = 0;
					stop();
				}
			} else if (mode === 'stopwatch') {
				elapsed = delta;
			}

			updateDisplay();
		}, 1000);
	}

	// Stop the timer
	function stop() {
		isRunning = false;
		clearInterval(interval);
	}

	// Toggle between pause and resume
	function toggle() {
		if (isRunning) {
			stop();
		} else {
			start();
		}
	}

	// Initialize timer
	elapsed = mode === 'countdown' ? duration : 0;
	updateDisplay();
	element.addEventListener('click', toggle);
}
function registerAction(key, fromState, toState) {
	let t1 = getNow();
	let t = DA.toggle[key];
	if (nundef(t.timer)) {
		t.timer = mDom(t.elem.parentNode, { bg: 'white', fg: 'black', wmin: 200, }, { html: '&nbsp;' });
	}

}
class Timer {
	constructor(element, mode = 'stopwatch', duration = 0) {
		this.element = element;
		this.mode = mode; // 'stopwatch' or 'countdown'
		this.duration = duration; // in seconds
		this.elapsed = 0;
		this.isRunning = false;
		this.interval = null;

		this.updateDisplay();
		this.element.addEventListener('click', () => this.toggle());
	}

	start() {
		if (this.isRunning) return;

		this.isRunning = true;
		const startTime = Date.now();

		this.interval = setInterval(() => {
			const now = Date.now();
			const delta = Math.floor((now - startTime) / 1000);

			if (this.mode === 'countdown') {
				this.elapsed = this.duration - delta;
				if (this.elapsed <= 0) {
					this.elapsed = 0;
					this.stop();
				}
			} else if (this.mode === 'stopwatch') {
				this.elapsed = delta;
			}

			this.updateDisplay();
		}, 1000);
	}

	stop() {
		this.isRunning = false;
		clearInterval(this.interval);
	}

	toggle() {
		if (this.isRunning) {
			this.stop();
		} else {
			this.start();
		}
	}

	updateDisplay() {
		const time = this.mode === 'countdown' ? this.elapsed : this.elapsed;
		this.element.textContent = this.formatTime(Math.abs(time));
	}

	formatTime(seconds) {
		const h = Math.floor(seconds / 3600).toString().padStart(2, '0');
		const m = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
		const s = (seconds % 60).toString().padStart(2, '0');
		return `${h}:${m}:${s}`;
	}
}
