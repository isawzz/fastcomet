function calculateGoodColors(bg, fg) {
  let fgIsLight = isdef(fg) ? colorIdealText(fg) == 'black' : colorIdealText(bg) == 'white';
  let bgIsDark = colorIdealText(bg) == 'white';
  if (nundef(fg)) fg = colorIdealText(bg);
  let bgNav = bg;
  fg = colorToHex79(fg);
  if (fgIsLight) {
    if (isEmpty(U.texture)) { bgNav = '#00000040'; }
    else if (bgIsDark) { bgNav = colorTrans(bg, .8); }
    else { bgNav = colorTrans(colorDark(bg, 50), .8); }
  } else {
    if (isEmpty(U.texture)) { bgNav = '#ffffff40'; }
    else if (!bgIsDark) { bgNav = colorTrans(bg, .8); }
    else { bgNav = colorTrans(colorLight(bg, 50), .8); }
  }
  let realBg = bg;
  if (bgNav == realBg) bgNav = fgIsLight ? colorDark(bgNav, .2) : colorLight(bgNav, .2);
  let bgContrast = fgIsLight ? colorDark(bgNav, .2) : colorLight(bgNav, .2);
  let fgContrast = fgIsLight ? '#ffffff80' : '#00000080';
  return [realBg, bgContrast, bgNav, fg, fgContrast];
}
function setCssVar(varname, val) { document.body.style.setProperty(varname, val); }
function setColors(bg, fg) {
  let [realBg, bgContrast, bgNav, fgNew, fgContrast] = calculateGoodColors(bg, fg);

	mStyle('dPage',{bg:realBg});
	return;

  setCssVar('--bgBody', realBg);
  setCssVar('--bgButton', 'transparent')
  setCssVar('--bgButtonActive', bgContrast)
  setCssVar('--bgNav', bgNav)
  setCssVar('--fgButton', fgNew)
  setCssVar('--fgButtonActive', fgNew)
  setCssVar('--fgButtonDisabled', 'silver')
  setCssVar('--fgButtonHover', fgContrast)
  setCssVar('--fgTitle', fgNew)
  setCssVar('--fgSubtitle', fgContrast);
}
async function switchToUser(username) {
	if (!isEmpty(username)) username = normalizeString(username);
	if (isEmpty(username)) username = 'guest';
	console.log('username', username); //return;
	let res = await mPostPhp('game_user', { username, action: 'login' });
	//wenn das config mitgeschickt wird soll ich es updaten!
	// es muss immer mit M zusammenspielen!
	//ich sollte ein users.yaml file haben!
	//console.log('res', res);

	//return;

	mStyle('dTopRight',{maright:10},{html:`${username}`});
	localStorage.setItem('username', username);
	// iDiv(UI.nav.commands.user).innerHTML = username;
	// setUserTheme();
	// menu = valf(menu, getMenu(), localStorage.getItem('menu'), 'home');
	// await switchToMainMenu(menu);

}
async function login(username) {
	console.log("login");
	//let username = document.getElementById("username").value;
	let res = await mPostPhp('game_user', { username, action: 'login' });
	if (res.token) {
		playerToken = DA.playerToken = res.token;
		document.getElementById("playerInfo").innerText = `Logged in as: ${res.username}`;
		document.getElementById("loginDiv").style.display = "none";
		document.getElementById("gameControls").style.display = "block";
	} else {
		console.log("Login failed");
	}
}
async function loadAssetsStatic() {
	if (nundef(M)) M = {};
	M = await loadStaticYaml('y/m.yaml');
	M.superdi = await loadStaticYaml('y/superdi.yaml');
	M.details = await loadStaticYaml('y/details.yaml');
	M.config = await loadStaticYaml('y/config.yaml');
	loadColors();
	M.users = M.config.users;
	// for (const uname of M.config.users) {
	// 	M.users[uname] = await loadStaticYaml(`y/users/${uname}.yaml`);
	// }
	let [di, byColl, byFriendly, byCat, allImages] = [M.superdi, {}, {}, {}, {}];
	for (const k in di) {
		let o = di[k];
		for (const cat of o.cats) lookupAddIfToList(byCat, [cat], k);
		for (const coll of o.colls) lookupAddIfToList(byColl, [coll], k);
		lookupAddIfToList(byFriendly, [o.friendly], k)
		if (isdef(o.img)) {
			let fname = stringAfterLast(o.img, '/')
			allImages[k] = { fname, path: o.img, key: k };
		}
		if (isdef(o.photo)) {
			let fname = stringAfterLast(o.photo, '/')
			allImages[k + '_photo'] = { fname, path: o.photo, key: k };
		}
	}
	M.allImages = allImages;
	M.byCat = byCat;
	M.byCollection = byColl;
	M.byFriendly = byFriendly;
	M.categories = Object.keys(byCat); M.categories.sort();
	M.collections = Object.keys(byColl); M.collections.sort();
	M.names = Object.keys(byFriendly); M.names.sort();
	[M.colorList, M.colorByHex, M.colorByName] = getListAndDictsForDicolors();
}

//#region iai_yaml

// Fetch game state
async function getGameState(gameId) {
	let response = await fetch(`http://yourserver.com/game.php?action=state&id=${gameId}`);
	let data = await response.json();
	console.log("Game State:", yaml.dump(data.state)); // Convert JSON to YAML
}

// Submit a move
async function submitMove(gameId, newState) {
	let response = await fetch("http://yourserver.com/game.php?action=move", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ game_id: gameId, state: newState })
	});
	let result = await response.json();
	console.log("Move Response:", result);
}

// Create a new game
async function createGame() {
	let response = await fetch("http://yourserver.com/game.php?action=create", { method: "POST" });
	let data = await response.json();
	console.log("New Game ID:", data.game_id);
}

//#endregion
async function mPostPhp(cmd, o, jsonResult = true) {
	let sessionType = detectSessionType();
	let server = sessionType == 'fastcomet' ? 'https://moxito.online/' : 'http://localhost:8080/fastcomet/';
	if (isdef(o.path) && (o.path.startsWith('zdata') || o.path.startsWith('y'))) o.path = '../../' + o.path;
	let res = await fetch(server + `ilms/php/${cmd}.php`,
		{
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: new URLSearchParams(o), // Send the line in POST request
		}
	);
	let text;
	try {
		text = await res.text();
		if (!jsonResult) {
			return text;
		}
		let obj = JSON.parse(text);
		return obj;
	} catch (e) {
		return isString(text) ? text : e;
	}
}

async function simpleOnDropImage(ev, elem) {
  let dt = ev.dataTransfer;
  if (dt.types.includes('itemkey')) {
    let data = ev.dataTransfer.getData('itemkey');
    await simpleOnDroppedItem(data);
  } else {
    const files = ev.dataTransfer.files;
    if (files.length > 0) {
      const reader = new FileReader();
      reader.onload = async (evReader) => {
        let data = evReader.target.result;
        await simpleOnDroppedUrl(data, UI.simple);
      };
      reader.readAsDataURL(files[0]);
    }
  }
}

function mCollapse(dilist) {
	if (isDict(dilist)) dilist = dict2list(dilist); //console.log(dilist);

	for (const b of dilist) {
		let d = iDiv(b);

		//in collapsed style, hide all children
		let dTitle = d.firstChild;
		for (const c of arrChildren(d)) {
			if (c == dTitle) continue;
			c.style.display = 'none';
		};
		// mStyle(dTitle, { cursor: 'pointer' }, { collapsed: true });
		continue;

		dTitle.onclick = ev => {
			let isCollapsed = ev.target.getAttribute('collapsed');
			if (isCollapsed) {
				for (const c of arrChildren(d)) {
					c.style.display = 'block';
				};
				dTitle.setAttribute('collapsed', false);
			} else {
				for (const c of arrChildren(d)) {
					c.style.display = 'none';
				};
				dTitle.setAttribute('collapsed', true);
			}
		}
	}
}
function toggleStyle(d, style1 = {}, style2 = {}) {

}


function addMoveUpDown(elems, dButtons) {
	let moveUpBtn = mDom(dButtons, {}, { html: 'up', onclick: moveUp });
	mLinebreak(dButtons);
	let moveDownBtn = mDom(dButtons, {}, { html: 'down', onclick: moveDown });
	let selectedDiv = null;


	// Add click event listener to each div
	container.addEventListener("click", function (event) {
		if (event.target.tagName === "DIV") {
			if (selectedDiv) {
				selectedDiv.classList.remove("highlight");
			}
			selectedDiv = event.target;
			selectedDiv.classList.add("highlight");
		}
	});

	// Move up function
	moveUpBtn.addEventListener("click", function () {
		if (selectedDiv && selectedDiv.previousElementSibling) {
			container.insertBefore(selectedDiv, selectedDiv.previousElementSibling);
		}
	});

	// Move down function
	moveDownBtn.addEventListener("click", function () {
		if (selectedDiv && selectedDiv.nextElementSibling) {
			container.insertBefore(selectedDiv.nextElementSibling, selectedDiv);
		}
	});
}

async function _mPalette(dParent, src, showPal = true, showImg = false) {
	async function getPaletteFromCanvas(canvas, n = 10) {
			if (typeof ColorThiefObject === 'undefined') ColorThiefObject = new ColorThief();
			const dataUrl = canvas.toDataURL();
			const img = new Image();
			img.src = dataUrl;

			return new Promise((resolve, reject) => {
					img.onload = () => {
							try {
									const palette = ColorThiefObject.getPalette(img, n);
									resolve(palette ? palette.map(colorFrom) : ['black', 'white']);
							} catch (error) {
									reject(new Error('Failed to extract the palette: ' + error.message));
							}
					};
					img.onerror = () => reject(new Error('Failed to load the image from canvas.'));
			});
	}

	const { cv } = await getCanvasCtx(dParent, { sz: 100, fill: 'white' }, { src });
	const palette = await getPaletteFromCanvas(cv);
	
	if (!showImg) cv.remove();
	if (showPal) showPaletteMini(dParent, palette);
	
	return palette;
}
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
