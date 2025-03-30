
//#region games: orig vs alternative
async function onclickGameMenuItem(ev) {
  let gamename = evToAttr(ev, 'gamename');
  await showGameMenu(gamename);
}
async function showTables(from) {
	await updateTestButtonsLogin();
	let me = getUname();
	let tables = Serverdata.tables = await mGetRoute('tables');
	tables.map(x => x.prior = x.status == 'open' ? 0 : x.turn.includes(me) ? 1 : x.playerNames.includes(me) ? 2 : 3);
	sortBy(tables, 'prior');
	let dParent = mBy('dTableList');
	if (isdef(dParent)) { mClear(dParent); }
	else dParent = mDom('dMain', {}, { className: 'section', id: 'dTableList' });
	if (isEmpty(tables)) { mText('no active game tables', dParent); return []; }
	tables.map(x => x.game_friendly = capitalize(getGameFriendly(x.game)));
	mText(`<h2>game tables</h2>`, dParent, { maleft: 12 })
	let t = UI.tables = mDataTable(tables, dParent, null, ['friendly', 'game_friendly', 'playerNames'], 'tables', false);
	mTableCommandify(t.rowitems.filter(ri => ri.o.status != 'open'), {
		0: (item, val) => hFunc(val, 'onclickTable', item.o.id, item.id),
	});
	mTableStylify(t.rowitems.filter(ri => ri.o.status == 'open'), { 0: { fg: 'blue' }, });
	let d = iDiv(t);
	for (const ri of t.rowitems) {
		let r = iDiv(ri);
		let id = ri.o.id;
		if (ri.o.prior == 1) mDom(r, {}, { tag: 'td', html: getWaitingHtml(24) });
		if (ri.o.status == 'open') {
			let playerNames = ri.o.playerNames;
			if (playerNames.includes(me)) {
				if (ri.o.owner != me) {
					let h1 = hFunc('leave', 'onclickLeaveTable', ri.o.id); let c = mAppend(r, mCreate('td')); c.innerHTML = h1;
				}
			} else {
				let h1 = hFunc('join', 'onclickJoinTable', ri.o.id); let c = mAppend(r, mCreate('td')); c.innerHTML = h1;
			}
		}
		if (ri.o.owner != me) continue;
		let h = hFunc('delete', 'onclickDeleteTable', id); let c = mAppend(r, mCreate('td')); c.innerHTML = h;
		if (ri.o.status == 'open') { let h1 = hFunc('start', 'onclickStartTable', id); let c1 = mAppend(r, mCreate('td')); c1.innerHTML = h1; }
	}
}
function showYaml(o, title, dParent, styles = {}, opts = {}) {
	o = toFlatObject(o);
	let d = mDom(dParent, styles, opts);
	mDom(d, {}, { tag: 'h2', html: title });
	let keys = Object.keys(o);
	let grid = mGrid(keys.length, 2, d, { rounding: 8, padding: 4, bg: '#eee', wmax: 500 }, { wcols: 'auto' });
	let cellStyles = { hpadding: 4 };
	if (isList(o)) {
		arrSort(o);
		o.map((x, i) => { mDom(grid, { fg: 'red', align: 'right' }, { html: i }); mDom(grid, { maleft: 10 }, { html: x }); });
	} else if (isDict(o)) {
		keys.sort();
		for (const k of keys) {
			mDom(grid, { fg: 'red', align: 'right' }, { html: k })
			mDom(grid, { maleft: 10 }, { html: o[k] });
		}
	}
	return d;
}



//mediaDropper v0:
async function mMediaDropper(d) {
  let fileInput = mDom(d, {}, { tag: 'input', type: 'file', accept: 'image/*,video/*,audio/*,.txt' });
  let dropZone = mDom(d, { w: 500, hmin: 300, border: 'white 1px dashed', align: 'center' }, { html: 'Drop media here' });

  function checkIfFromOwnServer(url) {
    const ownOrigin = window.location.origin;
    if (url.startsWith(ownOrigin)) {
      console.log('Dropped from inside the project (server):', url);
      return true;
    } else {
      console.log('Dropped from external website:', url);
      return false;
    }
  }

  async function ondropMedia(ev) {
    ev.preventDefault();
    let item = ev.dataTransfer.items[0];
    let file = item.getAsFile();

    if (file) {
      await displayMediaData(URL.createObjectURL(file), file.type);
    } else {
      file = ev.dataTransfer.files[0];
      const url = await new Promise(resolve => item.getAsString(resolve));
      let isOwnServer = checkIfFromOwnServer(url);
      if (isOwnServer) {
        await displayMediaData(url, 'unknown');
      } else {
        await displayMediaData(url, 'unknown');
      }
    }
  }

  async function onchangeFileinput(ev) {
    let file = ev.target.files[0];
    if (file) {
      await displayMediaData(URL.createObjectURL(file), file.type);
    }
  }

  async function displayMediaData(src, type) {
    mClear(dropZone);

    if (type.startsWith('image')) {
      mLoadImgAsync(dropZone, { wmax: 500 }, { tag: 'img', src: src });
    } else if (type.startsWith('video')) {
      mDom(dropZone, { w: 500 }, { tag: 'video', src: src, controls: true });
    } else if (type.startsWith('audio')) {
      mDom(dropZone, {}, { tag: 'audio', src: src, controls: true });
    } else if (type === 'text/plain') {
      let response = await fetch(src);
      let text = await response.text();
      mDom(dropZone, {}, { tag: 'pre', html: text });
    } else {
      mDom(dropZone, {}, { html: 'Unsupported file type' });
    }
  }

  function preventDefaults(ev) { ev.preventDefault(); ev.stopPropagation(); }
  function highlight(ev) { mClass(ev.target, 'framedPicture'); }
  function unhighlight(ev) { mClassRemove(ev.target, 'framedPicture'); }

  ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(evname => {
    dropZone.addEventListener(evname, preventDefaults, false);
    document.body.addEventListener(evname, preventDefaults, false);
  });
  ['dragenter', 'dragover'].forEach(evname => { dropZone.addEventListener(evname, highlight, false); });
  ['dragleave', 'drop'].forEach(evname => { dropZone.addEventListener(evname, unhighlight, false); });

  dropZone.addEventListener('drop', ondropMedia, false);
  fileInput.addEventListener('change', onchangeFileinput, false);
}


//mKey v1: oppinionated
async function mKeyO(imgKey, d, styles = {}, opts = {}) {
	styles = jsCopy(styles);
	let type = opts.prefer;
	let o = type != 'plain' ? lookup(M.superdi, [imgKey]) : null;
	let src;
	if (nundef(o) && imgKey.includes('.')) src = imgKey;
	else if (isdef(o) && (type == 'img' || type == 'photo') && isdef(o[type])) src = o[type];
	else if (isdef(o) && isdef(o.img)) src = o.img;
	if (isdef(src)) {
		let [w, h] = mSizeSuccession(styles, 40);
		addKeys({ w, h }, styles);
		addKeys({ tag: 'img', src }, opts);
		let d0 = mDom(d, styles, opts);
		mCenterCenterFlex(d0);
		let img = await mImgAsync(d0, styles, opts, roundIfTransparentCorner);
		return d0;
	} else if (isdef(o)) {
		let [w, h] = mSizeSuccession(styles, 40);
		let sz = h;
		addKeys({ h }, styles);
		if (nundef(type)) type = isdef(o.text) ? 'text' : isdef(o.fa6) ? 'fa6' : isdef(o.fa) ? 'fa' : isdef(o.ga) ? 'ga' : null;
		let family = type == 'text' ? 'emoNoto' : type == 'fa6' ? 'fa6' : type == 'fa' ? 'pictoFa' : 'pictoGame';
		let html = type == 'text' ? o.text : String.fromCharCode('0x' + o[type]);
		addKeys({ family }, styles);
		let d0 = mDom(d, styles, opts);
		mCenterCenterFlex(d0);
		let d1 = mDom(d0, {}, { html });
		let r = getRect(d1);
		[w, h] = [r.w, r.h];
		let scale = Math.min(sz / w, sz / h);
		d1.style.transformOrigin = 'center center';
		d1.style.transform = `scale(${scale})`;
		d1.style.transform = `scale(${scale})`;
		return d0;
	} else {
		addKeys({ html: imgKey }, opts)
		let img = mDom(d, styles, opts);
		return img;
	}
	console.log('type', type)
}

//imageDD v3
function checkIfFromOwnServer(url) {
	const ownOrigin = window.location.origin; // e.g., http://127.0.0.1:51012
	if (url.startsWith(ownOrigin)) {
		console.log('Dropped from inside the project (server):', url); return true;
	} else {
		console.log('Dropped from external website:', url); return false;
	}
}
async function handleDropOneZone(ev) {
	console.log(arguments, ev.target, ev.target.files, ev.dataTransfer); 
	let dropZone = DA.dropZone; //ev.target;
	console.log('dropZone', dropZone);
	let dropImage = dropZone.getElementsByTagName('img')[0];
	let items = isdef(ev.target.files)?ev.target.files:ev.dataTransfer.items;
	console.log('items', items); //return;
	for (const item of items) {
		if (nundef(item.kind) || item.kind === 'file') {
			// Dropped from computer (local file)
			const file = item.getAsFile();
			console.log('Dropped from computer:', file);
		} else if (item.kind === 'string' && item.type === 'text/uri-list') {
			// Dropped from a website (URL)
			const url = await new Promise(resolve => item.getAsString(resolve));
			console.log('Dropped from website:', url);
			let isOwnServer = checkIfFromOwnServer(url);
			if (!isOwnServer) {
				let { dataUrl, width, height } = await resizeImage(url, 500, 1000);
				let name = `img${getNow()}`; //await mGather(mInput, 'dTop', { bg: 'pink', padding: 4 }); console.log('you entered', name);
				uploadImage(dataUrl, `zdata/downloads/${name}.${stringAfter(file.name, '.')}`);
				mStyle(dropImage, { w: Math.min(500, width), display: 'block', margin: 'auto' }, { src: dataUrl });

				dropImage.src = url; return;
			}
			dropImage.src = url;
		}
	}
}
function mImageDropper(d,dropHandler) {
  d = toElem(d);

  function preventDefaults(ev) { ev.preventDefault(); ev.stopPropagation(); }
  function highlight(ev) { mClass(ev.target, 'framedPicture'); }
  function unhighlight(ev) { mClassRemove(ev.target, 'framedPicture'); }

  let dropZone = DA.dropZone = d;
  ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(evname => {
    dropZone.addEventListener(evname, preventDefaults, false);
    document.body.addEventListener(evname, preventDefaults, false);
  });
  ['dragenter', 'dragover'].forEach(evname => { dropZone.addEventListener(evname, highlight, false); });
  ['dragleave', 'drop'].forEach(evname => { dropZone.addEventListener(evname, unhighlight, false); });

  let dropImage = DA.dropImage = mDom(dropZone, { w: 500 }, { tag: 'img' });

  dropZone.addEventListener('drop', dropHandler, false);
}


//imageDD v2
async function handleDrop(ev) {
  console.log(arguments,ev.target)
  let dropZone = ev.target;
  let dropImage = dropZone.getElementsByTagName('img')[0];
  var files = ev.dataTransfer.files;

  if (files.length) {
    var file = files[0];
    if (file.type.startsWith('image/')) {
      console.log(file)
      let {dataUrl,width,height} = await resizeImage(file, 500, 1000);
      let name = `img${getNow()}`; //await mGather(mInput, 'dTop', { bg: 'pink', padding: 4 }); console.log('you entered', name);
      uploadImage(dataUrl, `zdata/downloads/${name}.${stringAfter(file.name, '.')}`);
      mStyle(dropImage,{w:Math.min(500,width),display:'block',margin:'auto'},{src:dataUrl});
    } else {
      console.log('Please drop an image file.');
    }
  } else {
    // Handle external image URLs
    var imageUrl = ev.dataTransfer.getData('text/uri-list');
    if (imageUrl) {
      let src = imageUrl;
      dropImage.src = src;
      dropImage.style.display = 'block';
      dropZone.textContent = '';
      dropZone.appendChild(dropImage);
    } else {
      console.log('Please drop an image file or a valid image URL.');
    }
  }
}

function mImageDropper(d) {
  d = toElem(d);

  function preventDefaults(ev) { ev.preventDefault(); ev.stopPropagation(); }
  function highlight(ev) { mClass(ev.target, 'framedPicture'); }
  function unhighlight(ev) { mClassRemove(ev.target, 'framedPicture'); }

  let dropZone = d;
  ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(evname => {
    dropZone.addEventListener(evname, preventDefaults, false);
    document.body.addEventListener(evname, preventDefaults, false);
  });
  ['dragenter', 'dragover'].forEach(evname => { dropZone.addEventListener(evname, highlight, false); });
  ['dragleave', 'drop'].forEach(evname => { dropZone.addEventListener(evname, unhighlight, false); });

  let dropImage = mDom(dropZone, { w: 500 }, { tag: 'img' });

  dropZone.addEventListener('drop', handleDrop, false);
}

//imageDD v1
function mImageDropper(d) {
  d = toElem(d);

  function preventDefaults(ev) { ev.preventDefault(); ev.stopPropagation(); }
  function highlight(ev) { mClass(ev.target, 'framedPicture'); }
  function unhighlight(ev) { mClassRemove(ev.target, 'framedPicture'); }

  let dropZone = d;
  ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(evname => {
    dropZone.addEventListener(evname, preventDefaults, false);
    document.body.addEventListener(evname, preventDefaults, false);
  });
  ['dragenter', 'dragover'].forEach(evname => { dropZone.addEventListener(evname, highlight, false); });
  ['dragleave', 'drop'].forEach(evname => { dropZone.addEventListener(evname, unhighlight, false); });

  let dropImage = mDom(dropZone, { w: 500 }, { tag: 'img' });

  async function handleDrop(ev) {
    var files = ev.dataTransfer.files;

    if (files.length) {
      var file = files[0];
      if (file.type.startsWith('image/')) {
        console.log(file)
        let resized = await resizeImage(file, 500, 1000);
        let name = `img${getNow()}`; //await mGather(mInput, 'dTop', { bg: 'pink', padding: 4 }); console.log('you entered', name);
        uploadImage(resized, `zdata/downloads/${name}.${stringAfter(file.name, '.')}`);
        //console.log('res',res)
        dropImage.src = resized;
        dropImage.style.display = 'block';
        dropZone.textContent = '';
        dropZone.appendChild(dropImage);
      } else {
        console.log('Please drop an image file.');
      }
    } else {
      // Handle external image URLs
      var imageUrl = ev.dataTransfer.getData('text/uri-list');
      if (imageUrl) {
        let src = imageUrl;
        dropImage.src = src;
        dropImage.style.display = 'block';
        dropZone.textContent = '';
        dropZone.appendChild(dropImage);
      } else {
        console.log('Please drop an image file or a valid image URL.');
      }
    }



  }
  dropZone.addEventListener('drop', handleDrop, false);
}

//imageDD v0
function mImageDropper(d) {
  d = toElem(d);

  function preventDefaults(ev) { ev.preventDefault(); ev.stopPropagation(); }
  function highlight(ev) { mClass(ev.target, 'framedPicture'); }
  function unhighlight(ev) { mClassRemove(ev.target, 'framedPicture'); }

  let dropZone = d;
  ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(evname => {
    dropZone.addEventListener(evname, preventDefaults, false);
    document.body.addEventListener(evname, preventDefaults, false);
  });
  ['dragenter', 'dragover'].forEach(evname => { dropZone.addEventListener(evname, highlight, false); });
  ['dragleave', 'drop'].forEach(evname => { dropZone.addEventListener(evname, unhighlight, false); });

  let dropImage = mDom(dropZone, { w: 500 }, { tag: 'img' });

  function handleDrop(ev) {
    var files = ev.dataTransfer.files;

    if (files.length) {
      var file = files[0];
      if (file.type.startsWith('image/')) {
        console.log(file)
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = async function () {
          let src = reader.result;
          let resized = await resizeImage(file, 500, 1000);
          let name = `img${getNow()}`; //await mGather(mInput, 'dTop', { bg: 'pink', padding: 4 }); console.log('you entered', name);
          uploadImage(resized, `zdata/downloads/${name}.${stringAfter(file.name, '.')}`);
          //console.log('res',res)
          dropImage.src = resized;
          dropImage.style.display = 'block';
          dropZone.textContent = '';
          dropZone.appendChild(dropImage);
        }
      } else {
        console.log('Please drop an image file.');
      }
    } else {
      // Handle external image URLs
      var imageUrl = ev.dataTransfer.getData('text/uri-list');
      if (imageUrl) {
        let src = imageUrl;
        dropImage.src = src;
        dropImage.style.display = 'block';
        dropZone.textContent = '';
        dropZone.appendChild(dropImage);
      } else {
        console.log('Please drop an image file or a valid image URL.');
      }
    }
  }

  dropZone.addEventListener('drop', handleDrop, false);

}

//blog v5
function mSortable(divs) {
	let draggedElement = null;
	let lastHighlighted = null;

	divs.forEach(container => {
		container.querySelectorAll('img,div').forEach(el => {
			el.draggable = true;

			el.addEventListener('dragstart', e => {
				draggedElement = el;
				e.dataTransfer.effectAllowed = 'move';
			});

			el.addEventListener('dragover', e => {
				e.preventDefault();
				if (el !== draggedElement) {
					if (lastHighlighted) lastHighlighted.style.outline = '';
					el.style.outline = '2px solid yellow';
					lastHighlighted = el;
				}
			});

			el.addEventListener('dragleave', () => {
				if (el === lastHighlighted) {
					el.style.outline = '';
					lastHighlighted = null;
				}
			});

			el.addEventListener('drop', e => {
				e.preventDefault();
				if (draggedElement !== lastHighlighted) {
					console.log('dropped',draggedElement,'on', lastHighlighted, draggedElement.parentNode);
					lastHighlighted.style.outline = '';
					draggedElement.style.outline = '';
					lastHighlighted.parentNode.insertBefore(draggedElement, lastHighlighted); 
				}
				draggedElement = null;
				lastHighlighted = null;
			});
		});
	})
}


//blog v4
function enableDragDrop(container) {
	let draggedElement = null;
	let lastHighlighted = null;
	container.querySelectorAll('div, img').forEach(el => {
		el.draggable = true;
		el.addEventListener('dragstart', e => {
			draggedElement = el;
			e.dataTransfer.effectAllowed = 'move';
		});
		el.addEventListener('dragover', e => {
			e.preventDefault();
			if (el !== draggedElement) {
				if (lastHighlighted) lastHighlighted.style.border = '';
				el.style.border = '2px solid yellow';
				lastHighlighted = el;
			}
		});
		el.addEventListener('dragleave', () => {
			if (el === lastHighlighted) {
				el.style.border = '';
				lastHighlighted = null;
			}
		});
		el.addEventListener('drop', e => {
			e.preventDefault();
			if (draggedElement && lastHighlighted && draggedElement !== lastHighlighted) {
				lastHighlighted.style.border = '';
				lastHighlighted.after(draggedElement);
			}
			draggedElement = null;
			lastHighlighted = null;
		});
	});
}
function mCollapse(divs) {
	//assumes that divs have first element a title, next to which a + or - is added
	function collapseOne(div) {
		let b = div.firstChild.firstChild;
		b.textContent = '+ ';
		let chi = arrChildren(div).slice(1);
		chi.map(x => mStyle(x, { display: 'none' }));
	}
	function expandOne(div) {
		let b = div.firstChild.firstChild;
		b.textContent = '- ';
		let chi = arrChildren(div).slice(1);
		chi.map(x => mStyle(x, { display: 'block' }));
	}
	function isCollapsedOne(div) {
		let chi = arrChildren(div).slice(1);
		return chi[0].style.display === 'none';
	}
	function toggleOne(div) {
		if (isCollapsedOne(div)) expandOne(div); else collapseOne(div);
	}

	divs.forEach(div => {
		let d1 = div.firstChild;
		let b = mDom(d1, { margin: 5, cursor: 'pointer' }, { tag: 'span', html: '- ' }); mInsert(d1, b, 0);
		b.onclick = () => { toggleOne(div); }
	});
	return {
		divs, toggleOne, collapseOne, expandOne, isCollapsedOne,
		collapseAll: () => { divs.map(collapseOne); }, expandAll: () => { divs.map(expandOne); },
	};
}

//blog v3
function addCollapseExpand(divs) {
	divs.forEach(div => {
			const btn = document.createElement('span');
			btn.textContent = '+ ';
			btn.style.cursor = 'pointer';
			btn.style.marginRight = '5px';
			btn.onclick = () => {
					if (div.style.display === 'none') {
							div.style.display = '';
							btn.textContent = '- ';
					} else {
							div.style.display = 'none';
							btn.textContent = '+ ';
					}
			};
			div.before(btn);
			div.style.display = 'none'; // Start collapsed
	});
}
function blogShowAll(d, blog) {
	let dates = Object.keys(blog);
	dates.sort((a, b) => new Date(b) - new Date(a));
	let di = {};
	for (const date of dates) {
		di[date] = blogShow(d, date, blog[date]);
	}
	return di;
}
function blogCollapse(items) { 
	let isCollapsed = false;
	function collapseOne(item) {
		mStyle(item.dRep,{display:'block'});
		mStyle(item.dContent,{display:'none'});
	}
	function expandOne(item) {
		mStyle(item.dRep,{display:'none'});
		mStyle(item.dContent,{display:'block'});
	}
	function isCollapsedOne(item) {
		return mGetStyle(item.dContent,'display') == 'none';
	}
	function toggleOne(item) {
		if (isCollapsedOne(item)) expandOne(item); else collapseOne(item);
	}
	function prepOne(item) {

		// let d = iDiv(item);
		// let dTitle = d.firstChild;
		// dTitle.style.cursor = 'pointer';
		// dTitle.onclick = () => toggleOne(item);
	}
	// items.map(prepOne);
	return {
		items,
		collapseAll: () => { items.map(collapseOne); isCollapsed = true; },
		expandAll: () => { items.map(expandOne); isCollapsed = false; },
		toggleAll: () => items.map(toggleOne),
		collapseOne,
		expandOne,
		toggleOne,
		isCollapsedOne,
		isCollapsedAll: () => isCollapsed, //items.every(isCollapsedOne),
	}
}

// blog v2
function blogShow(d, date, o) {
	let dBlog = mDom(d, {fz:20, }, { key: date });
	let dRep = mDom(dBlog, {className:'title_collapsed',display:'none'}, { html: `${date}: ${o.title}` });
	let dContent = mDom(dBlog);
	mDom(dContent, {className:'title'}, { html: `${date}: ${o.title}` });
	let dParts = mDom(dContent);
	let blogItem = { o, key: date, div: dBlog, dRep, dContent, dParts, items: [] }
	for (let textPart of o.text) {
		let d2 = mDom(dParts, { caret: 'white' });
		let item = { key: date, text: textPart, div: d2, type: textPart.includes('blogimages/') ? 'img' : 'text' };
		blogItem.items.push(item);
		if (textPart.includes('blogimages/')) {
			mDom(d2, { w100: true }, { tag: 'img', src: textPart });
		} else {
			mStyle(d2, { mabottom: 10 }, { contenteditable: true, html: textPart });
			d2.onblur = saveBlogList;
		}
	}
	let d3 = mDom(dContent, {}, { tag: 'hr' });
	return blogItem;
}
function blogCollapse(items) { 
	let isCollapsed = false;
	function collapseOne(item) {
		mStyle(item.dRep,{display:'block'});
		mStyle(item.dContent,{display:'none'});
	}
	function expandOne(item) {
		mStyle(item.dRep,{display:'none'});
		mStyle(item.dContent,{display:'block'});
	}
	function isCollapsedOne(item) {
		return mGetStyle(item.dContent,'display') == 'none';
	}
	function toggleOne(item) {
		if (isCollapsedOne(item)) expandOne(item); else collapseOne(item);
	}
	function prepOne(item) {
		// let d = iDiv(item);
		// let dTitle = d.firstChild;
		// dTitle.style.cursor = 'pointer';
		// dTitle.onclick = () => toggleOne(item);
	}
	// items.map(prepOne);
	return {
		items,
		collapseAll: () => { items.map(collapseOne); isCollapsed = true; },
		expandAll: () => { items.map(expandOne); isCollapsed = false; },
		toggleAll: () => items.map(toggleOne),
		collapseOne,
		expandOne,
		toggleOne,
		isCollapsedOne,
		isCollapsedAll: () => isCollapsed, //items.every(isCollapsedOne),
	}
}

//blog v1
function blogShow(d, date, o) {
	let dBlog = mDom(d, {fz:20, }, { key: date });
	// let dRep = mDom(dBlog, {className:'title_collapsed',display:'none'}, { html: `${date}: ${o.title}` });
	// let dContent = mDom(dBlog);
	mDom(dBlog, {className:'title'}, { html: `${date}: ${o.title}` });
	let d1 = mDom(dBlog);
	let blogItem = { o, key: date, div: dBlog, dParts: d1, items: [] }
	for (let textPart of o.text) {
		let d2 = mDom(d1, { caret: 'white' });
		let item = { key: date, text: textPart, div: d2, type: textPart.includes('blogimages/') ? 'img' : 'text' };
		blogItem.items.push(item);
		if (textPart.includes('blogimages/')) {
			mDom(d2, { w100: true }, { tag: 'img', src: textPart });
		} else {
			mStyle(d2, { mabottom: 10 }, { contenteditable: true, html: textPart });
			d2.onblur = saveBlogList;
		}
	}
	let d3 = mDom(dBlog, {}, { tag: 'hr' });
	return blogItem;
}
function blogCollapse(items, classCollapsed='title_collapsed') { 
	let isCollapsed = false;
	function collapseOne(item) {
		let d = iDiv(item);
		let dTitle = d.firstChild;
		mClass(dTitle, classCollapsed);
		for (const c of arrChildren(d)) {
			if (c == dTitle) continue;
			c.style.display = 'none';
		};
	}
	function expandOne(item) {
		let d = iDiv(item);
		let dTitle = d.firstChild;
		mClassRemove(dTitle, classCollapsed);
		for (const c of arrChildren(d)) {
			c.style.display = 'block';
		};
	}
	function isCollapsedOne(item) {
		let d = iDiv(item);
		let second = arrChildren(d)[1];
		return second.style.display == 'none';
	}
	function toggleOne(item) {
		if (isCollapsedOne(item)) expandOne(item); else collapseOne(item);
	}
	function prepOne(item) {
		let d = iDiv(item);
		let dTitle = d.firstChild;
		dTitle.style.cursor = 'pointer';
		dTitle.onclick = () => toggleOne(item);
	}
	items.map(prepOne);
	return {
		items,
		collapseAll: () => { items.map(collapseOne); isCollapsed = true; },
		expandAll: () => { items.map(expandOne); isCollapsed = false; },
		toggleAll: () => items.map(toggleOne),
		collapseOne,
		expandOne,
		toggleOne,
		isCollapsedOne,
		isCollapsedAll: () => isCollapsed, //items.every(isCollapsedOne),
	}
}

async function _onchangeFileInput(ev) {
	console.log('CHANGE', ev.target.files); 
	let files = ev.target.files;
	let file = files[0]; console.log(file)
	let reader = new FileReader();
	reader.onload = function (ev) {
		let data = ev.target.result;
		let image = new Image();
		image.src = data;
		image.onload = function () {
			let canvas = document.createElement('canvas');
			canvas.width = image.width;
			canvas.height = image.height;
			let ctx = canvas.getContext('2d');
			ctx.drawImage(image, 0, 0);
			let dataURL = canvas.toDataURL('image/png');
			let img = document.createElement('img');
			img.src = dataURL;
			img.style.maxWidth = '500px';
			console.log('HALLO!!!!!!')
			DA.dropZone.appendChild(img);
		};
	};
	reader.readAsDataURL(file);		
}
async function _ondropImage(ev, elem) {
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
async function _handleDrop(ev) {
  console.log(arguments, ev.target)
  let dropZone = ev.target;
  let dropImage = dropZone.getElementsByTagName('img')[0];
  let items = ev.dataTransfer.items;

  for (const item of items) {
    if (item.kind === 'file') {
      // Dropped from computer (local file)
      const file = item.getAsFile();
      console.log('Dropped from computer:', file.name);
    } else if (item.kind === 'string' && item.type === 'text/uri-list') {
      // Dropped from a website (URL)
      const url = await new Promise(resolve => item.getAsString(resolve));
      console.log('Dropped from website:', url);
      checkIfFromOwnServer(url);
      dropImage.src = url;
    }
  }


  // if (files.length) {
  //   var file = files[0];
  //   if (file.type.startsWith('image/')) {
  //     console.log(file)
  //     let {dataUrl,width,height} = await resizeImage(file, 500, 1000);
  //     let name = `img${getNow()}`; //await mGather(mInput, 'dTop', { bg: 'pink', padding: 4 }); console.log('you entered', name);
  //     uploadImage(dataUrl, `zdata/downloads/${name}.${stringAfter(file.name, '.')}`);
  //     mStyle(dropImage,{w:Math.min(500,width),display:'block',margin:'auto'},{src:dataUrl});
  //   } else {
  //     console.log('Please drop an image file.');
  //   }
  // } else {
  //   // Handle external image URLs
  //   var imageUrl = ev.dataTransfer.getData('text/uri-list');
  //   if (imageUrl) {
  //     let src = imageUrl;
  //     dropImage.src = src;
  //     dropImage.style.display = 'block';
  //     dropZone.textContent = '';
  //     dropZone.appendChild(dropImage);
  //   } else {
  //     console.log('Please drop an image file or a valid image URL.');
  //   }
  // }
}
function handleDrop(ev) {
  console.log('HAAAAAAAAAAAAALO')
  const files = ev.dataTransfer.files;
  handleFiles(files);
}

function handleFiles(files) {
  [...files].forEach(previewFile);
}
function handleFiles(files) {
	[...files].forEach(file => {
			if (file.type.startsWith('image/')) {
					const reader = new FileReader();
					reader.readAsDataURL(file);
					reader.onloadend = () => {
							displayImage(reader.result);
					};
			}
	});
}
function previewFile(file) {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onloadend = () => {
    const img = document.createElement('img');
    img.src = reader.result;
    img.style.maxWidth = '500px';
    DA.dropZone.appendChild(img);
  };
}
function garnix() {
	document.addEventListener('drop', async (event) => {
		event.preventDefault(); // Prevent default behavior
		const items = event.dataTransfer.items;

		if (items.length > 0) {
			for (const item of items) {
				if (item.kind === 'file') {
					// Dropped from computer (local file)
					const file = item.getAsFile();
					console.log('Dropped from computer:', file.name);
				} else if (item.kind === 'string' && item.type === 'text/uri-list') {
					// Dropped from a website (URL)
					const url = await new Promise(resolve => item.getAsString(resolve));
					console.log('Dropped from website:', url);
					checkIfFromOwnServer(url);
				}
			}
		}
	});

}
async function handleImageDrop(ev) {
	return new Promise((resolve, reject) => {
		ev.preventDefault();
		const files = ev.dataTransfer.files;
		let fileNameDisplay = ev.target;
		if (files.length > 0) {
			const file = files[0];
			const fileName = file.name;
			const fileType = file.type;
			console.log(fileName, fileType);
			if (fileType.startsWith('image/')) {
				fileNameDisplay.textContent = `Dropped image: ${stringBefore(fileName, '.')}.${stringAfter(fileName, '.')}`;
				const reader = new FileReader();
				reader.onload = async (evReader) => {
					let data = evReader.target.result;
					let resized = await resizeImage(file, 420, 300);
					console.log(DA.droppedImage)
					DA.droppedImage.src = data;
					resolve(data);
				};
				reader.readAsDataURL(files[0]);
			} else {
				fileNameDisplay.textContent = 'Please drop a valid image file.';
			}
		}
	});
}
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

async function handleImageDrop(ev) {
	return new Promise((resolve, reject) => {
		ev.preventDefault();
		const files = ev.dataTransfer.files;
		let fileNameDisplay = ev.target;
		if (files.length > 0) {
			const file = files[0];
			const fileName = file.name;
			const fileType = file.type;
			console.log(fileName, fileType);
			if (fileType.startsWith('image/')) {
				fileNameDisplay.textContent = `Dropped image: ${stringBefore(fileName, '.')}.${stringAfter(fileName, '.')}`;
				const reader = new FileReader();
				reader.onload = async (evReader) => {
					let data = evReader.target.result;
					let resized = await resizeImage(file, 420, 300);
					resolve(data);
				};
				reader.readAsDataURL(files[0]);
			} else {
				fileNameDisplay.textContent = 'Please drop a valid image file.';
			}
		}
	});
}
async function rest() {
	const dataTransfer = ev.dataTransfer;
	if (dataTransfer.items) {
		for (const item of dataTransfer.items) {
			if (item.kind === "file" && item.type.startsWith("image/")) {
				console.log('item', item);
				const file = item.getAsFile();
				let resizedDataUrl = await resizeImage(file, 420, 300);
				if (resizedDataUrl) {
					console.log('resizedDataUrl', resizedDataUrl);
				}
			}
		}
	}
}
function onchangeFileInput(ev) {
	console.log('CHANGE',ev.target.files);return;
	let files = ev.target.files;
	let file = files[0]; console.log(file)
	let reader = new FileReader();
	reader.onload = function (ev) {
		let data = ev.target.result;
		let image = new Image();
		image.src = data;
		image.onload = function () {
			let canvas = document.createElement('canvas');
			canvas.width = image.width;
			canvas.height = image.height;
			let ctx = canvas.getContext('2d');
			ctx.drawImage(image, 0, 0);
			let dataURL = canvas.toDataURL('image/png');
			let img = document.createElement('img');
			img.src = dataURL;
			img.style.maxWidth = '500px';
			console.log('HALLO!!!!!!')
			DA.dropZone.appendChild(img);
		};
	};
	reader.readAsDataURL(file);
}
async function mPhpPostImage(image, path) {
	return await mPostPhp('upload_image', { image, path }, false);
}
function mGather(dAnchor, styles = {}, opts = {}) {
	return new Promise((resolve, _) => {
		let [content, type] = [valf(opts.content, 'name'), valf(opts.type, 'text')]; //defaults
		let dbody = document.body;
		let dDialog = mDom(dbody, { bg: '#00000040', border: 'none', box: true, w: '100vw', h: '100vh' }, { tag: 'dialog', id: 'dDialog' });
		let d = mDom(dDialog);
		let funcName = `uiGadgetType${capitalize(type)}`; //console.log(funcName)
		let uiFunc = window[funcName];
		let dx = uiFunc(d, content, x => { dDialog.remove(); resolve(x) }, styles, opts);
		if (isdef(opts.title)) mInsert(dx, mCreateFrom(`<h2>Details for ${opts.title}</h2>`))
		dDialog.addEventListener('mouseup', ev => {
			if (opts.type != 'select' && isPointOutsideOf(dx, ev.clientX, ev.clientY)) {
				resolve(null);
				dDialog.remove();
			}
		});
		dDialog.addEventListener('keydown', ev => {
			if (ev.key === 'Escape') {
				dDialog.remove();
				console.log('RESOLVE NULL ESCAPE');
				resolve(null);
			}
		});
		dDialog.showModal();
		if (isdef(dAnchor)) mAnchorTo(dx, toElem(dAnchor), opts.align);
		else { mStyle(d, { h: '100vh' }); mCenterCenterFlex(d); }
	});
}

