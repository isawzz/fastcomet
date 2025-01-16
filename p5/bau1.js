
function globalKeyHandling(){
	document.addEventListener('keydown', hotkeyHandler);
}

function hotkeyHandler(ev) {
	let handler = lookup(DA['hotkeys',ev.key]);
	if (handler) { handler(ev); }
}
function hotkeyActivate(key, handler) {	lookupSetOverride(DA,['hotkeys',key],handler);}
function hotkeyDeactivate(key) {	DA.hotkeys[key] = null;}

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





