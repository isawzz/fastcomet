
function crap_createNEHexagonSide(dhex, sideLength) {
	// Calculate dimensions and angles
	const hexHeight = Math.sqrt(3) * sideLength; // Height of the hexagon
	const topOffset = hexHeight / 2; // Vertical offset for NE side
	const sideWidth = sideLength / 2; // Horizontal base for the NE triangle

	// Create the NE side div
	const neSide = document.createElement('div');
	neSide.style.position = 'absolute';
	neSide.style.width = `${sideLength}px`;
	neSide.style.height = `${hexHeight}px`;
	neSide.style.clipPath = `polygon(50% 0%, 100% 50%, 50% 100%)`;
	neSide.style.backgroundColor = 'rgba(255, 0, 0, 0.5)'; // Semi-transparent red for visibility
	neSide.style.transformOrigin = 'center center';

	// Position the NE side relative to its parent
	neSide.style.top = `${topOffset - hexHeight / 4}px`; // Adjust vertical alignment
	neSide.style.left = `${sideLength}px`; // Adjust horizontal alignment
	
	// Append to the parent container
	const parent = dhex; // document.querySelector(dhex);
	if (parent) {
			parent.style.position = 'relative'; // Ensure parent is relatively positioned
			parent.appendChild(neSide);
	} else {
			console.error(`Parent element with selector '${dhex}' not found.`);
	}
}
function mDropdown(dParent, styles = {}, opts = {}) {
	let list = toNameValueList(opts.list);
	addKeys({ tag: 'select' }, opts);
	let dselect = mDom(dParent, styles, opts);
	for (const el of list) { mDom(dselect, {}, { tag: 'option', html: el.name, value: el.value }); }
	dselect.onkeydown = ev => {
		if (ev.key == 'Escape' && isdef(opts.onEscape)) { opts.onEscape(); }
	}
	dselect.onclick = evNoBubble;
	//dselect.onfocus = ()=>dselect.click()
	dselect.onchange = ev=>opts.onchange(ev.target.value)
	dselect.value = '';

  dselect.addEventListener('keydown', (event) => {
    console.log(`Key pressed: ${event.key}`);
  });

  // Create and dispatch the event
  const event = new KeyboardEvent('keydown', {
    key: 'Enter',       // The key value
    char: 'a',      // The character representation (deprecated in favor of `key`)
		keyCode: 13,    // The key code value
    code: 'Enter',   // The physical key on the keyboard
    bubbles: true,  // Allow the event to bubble
    cancelable: true // Allow the event to be canceled
  });

  // Dispatch the event on the input box
  dselect.dispatchEvent(event);


	return dselect;
}
function _createSelect(dParent, styles = {}, opts = {}) {
	let html =
		`<div class="custom-select">
			<div class="selected" tabindex="0">Select an option</div>
			<ul class="options">
				<li data-value="1">Option 1</li>
				<li data-value="2">Option 2</li>
				<li data-value="3">Option 3</li>
			</ul>
		</div>`;

	let d = mCreateFrom(html);
	mAppend(dParent, d);
	mStyle(d, styles, opts);

	const customSelect = document.querySelector('.custom-select');
	const selected = customSelect.querySelector('.selected');
	const options = customSelect.querySelector('.options');

	// Toggle dropdown visibility
	selected.addEventListener('click', () => {
		options.style.display = options.style.display === 'block' ? 'none' : 'block';
	});

	// Close dropdown when clicking outside
	document.addEventListener('click', (e) => {
		if (!customSelect.contains(e.target)) {
			options.style.display = 'none';
		}
	});

	// Handle option selection
	options.addEventListener('click', (e) => {
		if (e.target.tagName === 'LI') {
			selected.textContent = e.target.textContent;
			selected.dataset.value = e.target.dataset.value; // Store value
			options.style.display = 'none';
		}
	});

	// Handle keyboard navigation
	selected.addEventListener('keydown', (e) => {
		if (e.key === 'Enter' || e.key === ' ') {
			options.style.display = options.style.display === 'block' ? 'none' : 'block';
			e.preventDefault();
		}
	});

}
function calculatePolygonPointsFromClipPath(center, width, height, clipPath) {
	// const [cx, cy] = center;
	const [cx, cy] = [center.cx, center.cy]; //console.log('center',center)

	// Parse the clip-path percentages into an array of points
	const percentagePoints = clipPath
		.match(/polygon\((.*?)\)/)[1] // Extract the points inside `polygon()`
		.split(',')                  // Split into individual points
		.map(point => point.trim())  // Remove extra spaces
		.map(point => point.split(' ').map(value => parseFloat(value))); // Convert to [x, y]

	// Convert percentage points to actual pixel coordinates
	const pixelPoints = percentagePoints.map(([xPercent, yPercent]) => {
		const x = cx + (xPercent - 50) * (width / 100);
		const y = cy + (yPercent - 50) * (height / 100);
		return [x, y];
	});

	return pixelPoints;
}


//#region key handling
function hotkeyHandler(ev) {
	let k = ev.key;
	console.log('pressed',ev.key);
	if (nundef(DA.hotkeys)) DA.hotkeys = {};
	let handler = DA.hotkeys[k];
	//let handler = lookup(DA,['hotkeys',ev.key]);
	console.log(DA.hotkeys)
	console.log('handler for',ev.key, handler);
	if (handler) { handler(ev); }
}
function hotkeyActivate(key, handler) {	
	console.log('activating' , key);
	if (nundef(DA.hotkeys)) DA.hotkeys = {};
	DA.hotkeys[key] =  handler;
	//lookupSetOverride(DA,['hotkeys',key],handler);
}
function hotkeyDeactivate(key) {	
	console.log('deactivating' , key);
	if (nundef(DA.hotkeys)) DA.hotkeys = {};
	DA.hotkeys[key] = null;
}

//#endregion

//#region toggle
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
//#endregion

//#region timer Timer
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

//#endregion
