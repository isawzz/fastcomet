
function globalKeyHandling(){
	document.addEventListener('keydown', hotkeyHandler);
}

function hotkeyHandler(ev) {
	let k = ev.key;
	console.log('pressed',ev.key);
	if (nundef(DA.hotkeys)) DA.hotkeys = {};
	let handler = DA.hotkeys[k];
	//let handler = lookup(DA['hotkeys',ev.key]);
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





