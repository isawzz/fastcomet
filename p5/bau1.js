
function hotkeyHandler(ev) {
	let handler = DA.hotkeys[ev.key];
	if (handler) { handler(ev); }
}
function hotkeyActivate(key, handler) {
	lookupSetOverride(DA,['hotkeys',key],handler);
}
function hotkeyDeactivate(key, handler) {
	DA.hotkeys[key] = null;
	document.removeEventListener('keydown', (event) => {
		if (event.key === key) {
			handler(event);
		}
	});
}
function createSelect(dParent, styles = {}, opts = {}) {
	//addKeys({fg:'black',bg:'white'},styles)
	let d0 = mDom(dParent, styles, opts);
	mCenterCenterFlex(d0);
	//let d1=mDom(d0,{},{html:'ewew'});
	//let d2=mDom(d0, {}, {});
	function onclick(ev) {
		let html = ev.target.innerHTML;
		//mStyle(d1,{},{html});
		evNoBubble(ev);
		opts.onchange(html);
	}
	for (const html of opts.list) {
		mDom(d0, { margin: 6 }, { tag: 'button', html, onclick });

	}
	//let dDefault = arrChildren(d0)[0];
	hotkeyActivate('Escape', ev => {
		if (isdef(opts.onEscape)) { opts.onEscape(); }
	});
	// document.onkeydown = ev => {
	// 	if (ev.key == 'Escape' && isdef(opts.onEscape)) { opts.onEscape(); }
	// }
	return d0;
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





