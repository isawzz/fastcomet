//imageDD v4


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
				uploadImage(dataUrl, `zdata/images/${name}.${stringAfter(file.name, '.')}`);
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
      uploadImage(dataUrl, `zdata/images/${name}.${stringAfter(file.name, '.')}`);
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
        uploadImage(resized, `zdata/images/${name}.${stringAfter(file.name, '.')}`);
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
          uploadImage(resized, `zdata/images/${name}.${stringAfter(file.name, '.')}`);
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
