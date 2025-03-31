

function getGameValues() {
  let user = U.id;
  let game = G.id;
  let level = G.level;
  let settings = { numColors: 1, numRepeat: 1, numPics: 1, numSteps: 1, colors: ColorList };
  settings = mergeOverride(settings, DB.settings);
  if (isdef(U.settings)) settings = mergeOverride(settings, U.settings);
  if (isdef(DB.games[game])) settings = mergeOverride(settings, DB.games[game]);
  let next = lookup(DB.games, [game, 'levels', level]); if (next) settings = mergeOverride(settings, next);
  next = lookup(U, ['games', game]); if (next) settings = mergeOverride(settings, next);
  next = lookup(U, ['games', game, 'levels', level]); if (next) settings = mergeOverride(settings, next);
  delete settings.levels;
  Speech.setLanguage(settings.language);
  return settings;
}

//cryptid
function cryBoard(dParent, cols, rows, sz) {
	dParent = toElem(dParent);
	let [w, h] = [sz * cols + sz + 20, (sz * .75) * cols + 40];
	//let [cols, rows, sz] = [9, 10, 80];
	// let w=sz*cols+sz+20;
	// let h=(sz*.75)*cols+40;
	let dBoard = mDom(dParent, { w,h});//(sz/.7)*rows+sz+20});//,acontent:'center',jcontent:'center' });

	let d = mDom(dBoard, { gap: 10, margin: 10, position: 'relative' });
	
	let clip = 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)';

	let dihab={mountain:'gray', desert:'yellow', forest:'green', water:'blue', swamp:'brown'};
	let diterr={all:null,bear:'black',puma:'red'};

	let items=[];
	for (let r = 0; r < rows; r++) {
		let x = r % 2;
		let thiscols = x>0?cols:cols+1;
		for (let c = 0; c < cols; c++) {
			//let db=mDom(d,{bg:'white',clip,w:sz-1, h:sz-1, position:'absolute', left:x*sz*.5, top:r*sz*.75}); //, bg:rChoose(Object.keys(dihab))})
			//let db=mDom(d,{className:'hex1',clip,w:sz-1, h:sz-1, position:'absolute', left:x*sz*.5, top:r*sz*.75}); //, bg:rChoose(Object.keys(dihab))})
			let gap=1;
			let db=mDom(d,{clip,w:sz-gap, h:sz-gap, position:'absolute', left:x*sz*.5, top:r*sz*.75}); //, bg:rChoose(Object.keys(dihab))})
			
			let shrink=0;
			let habitat=rChoose(Object.keys(dihab));
			let territory = rChoose(Object.keys(diterr));

			if (territory=='puma') {shrink=4;mStyle(db,getDashedHexBorder('red')); }
			else if (territory=='bear') {shrink=4;mStyle(db,getDashedHexBorder('silver')); }
			let d1 = mDom(db, { left:2, top: 2, clip, position: 'absolute', w: sz-(gap+shrink), h: sz-(gap+shrink), bg: dihab[habitat] });
			//return;
			//let d1 = mDom(d, { left: x * sz *.5, top: r * sz*.75, clip, position: 'absolute', w: sz-4, h: sz-4, bg: rChoose(Object.values(dihab)) });
			//mStyle(d1,{className:'hex'})
			x+=2;
			mCenterCenterFlex(d1);
			items.push({r,c,div:d1,habitat,territory})
		}
	}
	return items;	
}
function getDashedHexBorder(color) {
  //return {border:'20 solid white'}
  return {
    background: `repeating-linear-gradient(-60deg, ${color}, ${color} 4px, transparent 4px, transparent 10px),
    repeating-linear-gradient(60deg, ${color}, ${color} 4px, transparent 4px, transparent 10px),
    repeating-linear-gradient(0deg, ${color}, ${color} 4px, transparent 4px, transparent 10px)`,
    bgSize: '100% 100%'

  }
  return {
    background: `repeating-linear-gradient(-60deg, ${color}, ${color} 4px, transparent 4px, transparent 10px)`,
    // repeating - linear - gradient(
    //   60deg, red, red 4px, transparent 4px, transparent 10px
    // ),
    // repeating - linear - gradient(
    //   0deg, red, red 4px, transparent 4px, transparent 10px
    // );
    bgSize: '100% 100%'
  };
}


async function mMediaDropper(d) {
  let fileInput = mDom(d, {}, { tag: 'input', type: 'file', accept: 'image/*,video/*,audio/*,.txt' });
  let dropZone = mDom(d, { w: 500, hmin: 300, border: 'white 1px dashed', align: 'center' }, { html: 'Drop media or YouTube link here' });

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

  function extractYouTubeID(url) {
    let match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]+)/);
    return match ? match[1] : null;
  }

  async function ondropMedia(ev) {
    ev.preventDefault();
    let item = ev.dataTransfer.items[0];
    let file = item?.getAsFile();
    let url = await new Promise(resolve => item.getAsString(resolve));

    if (url) {
      let ytID = extractYouTubeID(url);
      if (ytID) {
        await displayYouTubeVideo(ytID);
      } else {
        let isOwnServer = checkIfFromOwnServer(url);
        await displayMediaData(url, 'unknown');
      }
    } else if (file) {
      await displayMediaData(URL.createObjectURL(file), file.type);
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
      mDom(dropZone, {}, { html: 'Unsupported file type or URL' });
    }
  }

  async function displayYouTubeVideo(videoID) {
    mClear(dropZone);
    let iframe = mDom(dropZone, { w: 500, h: 300 }, {
      tag: 'iframe',
      src: `https://www.youtube.com/embed/${videoID}`,
      allow: 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture',
      allowfullscreen: true
    });
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
async function mImageAudioDropper(d) {
  //videos are saved as mp3 audio!
  let fileInput = mDom(d, {}, { tag: 'input', type: 'file', accept: 'image/*,audio/*' }); //,{onchange:onchangeFileInput});
  let dropZone = mDom(d, { w: 500, hmin: 300, border: 'white 1px dashed', align: 'center' }); //, { html: 'Drop image here' });
  let bAccept = mDom(d, { margin: 10, display: 'none' }, { tag: 'button', html: 'Accept', onclick: onAccept });
  let bCancel = mDom(d, { margin: 10, display: 'none' }, { tag: 'button', html: 'Cancel', onclick: onCancel });
  //return;
  function checkIfFromOwnServer(url) {
    const ownOrigin = window.location.origin; // e.g., http://127.0.0.1:51012
    if (url.startsWith(ownOrigin)) {
      console.log('Dropped from inside the project (server):', url); return true;
    } else {
      console.log('Dropped from external website:', url); return false;
    }
  }
  async function onAccept(ev) {
    let item = DA.droppedElement;
    if (item && item.elem) {
      replaceElement(fileInput, item.elem);
      fileInput.remove();
      dropZone.remove();
      bAccept.remove();
      bCancel.remove();
    }
  }
  async function onCancel(ev) {
    delete DA.droppedElement;
    fileInput.remove();
    dropZone.remove();
    bAccept.remove();
    bCancel.remove();
  }
  async function ondropSomething(ev) {
    console.log('ondropSomething', ev);
    let item = ev.dataTransfer.items[0]; console.log('item', item);
    let file = item.getAsFile();
    if (file) {
      let type = file.type; console.log('file', file, 'type', type);
      let src = URL.createObjectURL(file); console.log('src', src);
      let o = DA.droppedElement = { type, file, src };
      if (type.startsWith('image')) {
        o.elem = await displayImagedata(src);
      } else if (type.startsWith('video')) {
        let player = o.elem = mDom(dropZone, { w: 500, h: 300 }, { tag: 'video', src, controls: true });
        player.play();
      } else if (type.startsWith('audio')) {
        let player = o.elem = mDom(dropZone, {}, { tag: 'audio', src, controls: true });
        player.play();
      } else if (type === 'text/plain') {
        let response = await fetch(URL.createObjectURL(file));
        let text = await response.text();
        o.elem = mDom(dropZone, { margin: 10, rounding: 10, align: 'left', bg: 'white', fg: 'black', padding: 10 }, { tag: 'pre', html: text });
        o.text = text;
      } else {
        mDom(dropZone, {}, { html: 'Unsupported file type or URL' });
      }
    } else {
      file = ev.dataTransfer.files[0];
      const url = await new Promise(resolve => item.getAsString(resolve));
      let type = isdef(file) ? file.type : url.includes('youtube') ? 'video' : 'string';
      console.log('Dropped from website:', url, 'file', file, 'type', type);
      return;
      let isOwnServer = checkIfFromOwnServer(url);
      if (isOwnServer) {
        if (type.startsWith('image')) {
          o.elem = await displayImagedata(src);
        } else if (type.startsWith('video')) {
          let player = o.elem = mDom(dropZone, { w: 500, h: 300 }, { tag: 'video', src, controls: true });
          player.play();
        } else if (type.startsWith('audio')) {
          let player = o.elem = mDom(dropZone, {}, { tag: 'audio', src, controls: true });
          player.play();
        } else if (type === 'text/plain') {
          let response = await fetch(URL.createObjectURL(file));
          let text = await response.text();
          o.elem = mDom(dropZone, { margin: 10, rounding: 10, align: 'left', bg: 'white', fg: 'black', padding: 10 }, { tag: 'pre', html: text });
          o.text = text;
        } else {
          mDom(dropZone, {}, { html: 'Unsupported file type or URL' });
        }
      } else {
        if (url.includes('youtube')) {
          let name = `aud${getNow()}`;
          name = await mGather(mInput, 'dTop', { bg: 'pink', padding: 4 }, { value: name }); console.log('you entered', name);
          mPhpPostAudio(src, `zdata/downloads/${name}`)
          let player = o.elem = mDom(dropZone, { w: 500, h: 300 }, { tag: 'video', src, controls: true });
          player.play();
        } else if (type.startsWith('data:image')) {
          let { dataUrl, width, height } = await resizeImage(file, 500, 1000);
          o.elem = await displayImagedata(dataUrl);
          let name = `img${getNow()}`;
          name = await mGather(mInput, 'dTop', { bg: 'pink', padding: 4 }, { value: name }); console.log('you entered', name);
          console.log(width, height, name);
          uploadImage(dataUrl, `zdata/downloads/${name}.${stringAfter(file.name, '.')}`);
        } else if (type.startsWith('audio')) {
          let name = `aud${getNow()}`;
          name = await mGather(mInput, 'dTop', { bg: 'pink', padding: 4 }, { value: name }); console.log('you entered', name);
          mPhpPostAudio(src, `zdata/downloads/${name}`)
          let player = o.elem = mDom(dropZone, {}, { tag: 'audio', src, controls: true });
          player.play();
        } else if (type === 'text/plain') {
          let response = await fetch(URL.createObjectURL(file));
          let text = await response.text();
          o.elem = mDom(dropZone, { margin: 10, rounding: 10, align: 'left', bg: 'white', fg: 'black', padding: 10 }, { tag: 'pre', html: text });
          o.text = text;
        } else {
          mDom(dropZone, {}, { html: 'Unsupported file type or URL' });
        }
      }
    }
    mStyle(bAccept, { display: 'inline-block' });
    mStyle(bCancel, { display: 'inline-block' });
  }
  async function onchangeFileinput(ev) {
    let files = ev.target.files; //console.log(files);
    let file = files[0]; console.log(file);
    let src = URL.createObjectURL(file); console.log(src);
    //return;
    await displayImagedata(src);
  }
  async function displayImagedata(src) {
    mClear(dropZone);
    let img = await mLoadImgAsync(dropZone, { wmax: 500 }, { tag: 'img', src: src });
    console.log('img dims', img.width, img.height);
    return img;
  }

  //let x = mImageDropper(d3,ondropImage);
  function preventDefaults(ev) { ev.preventDefault(); ev.stopPropagation(); }
  function highlight(ev) { mClass(ev.target, 'framedPicture'); }
  function unhighlight(ev) { mClassRemove(ev.target, 'framedPicture'); }
  ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(evname => {
    dropZone.addEventListener(evname, preventDefaults, false);
    document.body.addEventListener(evname, preventDefaults, false);
  });
  ['dragenter', 'dragover'].forEach(evname => { dropZone.addEventListener(evname, highlight, false); });
  ['dragleave', 'drop'].forEach(evname => { dropZone.addEventListener(evname, unhighlight, false); });
  dropZone.addEventListener('drop', ondropSomething, false);
  fileInput.addEventListener('change', onchangeFileinput, false);

}
async function mImageMusicDropper(d) {
  d = toElem(d);
  mFlexWrap(d); //let d1=mDom(d);
  let fileInput = mDom(d, { bg: 'blue', h: 50 }, { tag: 'input', type: 'file', accept: 'image/*,audio/*' });
  //return;
  mLinebreak(d);
  let dropZone = mDom(d, { w: 500, hmin: 300, border: 'white 1px dashed', align: 'center' }, { html: 'Drop image here' });
  //return;
  function checkIfFromOwnServer(url) {
    const ownOrigin = window.location.origin; // e.g., http://127.0.0.1:51012
    if (url.startsWith(ownOrigin)) {
      console.log('Dropped from inside the project (server):', url); return true;
    } else {
      console.log('Dropped from external website:', url); return false;
    }
  }
  async function ondropImage(ev) {
    console.log('ondropImage', ev);
    let item = ev.dataTransfer.items[0]; console.log(item);
    let file = item.getAsFile(); console.log(file);
    if (file) await displayImagedata(URL.createObjectURL(file));
    else {
      file = ev.dataTransfer.files[0];
      const url = await new Promise(resolve => item.getAsString(resolve));
      console.log('Dropped from website:', url);
      let isOwnServer = checkIfFromOwnServer(url);
      if (isOwnServer) {
        await displayImagedata(url);
      } else {
        let { dataUrl, width, height } = await resizeImage(file, 500, 1000);
        await displayImagedata(dataUrl);
        let name = `img${getNow()}`;
        name = await mGather(mInput, 'dTop', { bg: 'pink', padding: 4 }, { value: name }); console.log('you entered', name);
        console.log(width, height, name);
        uploadImage(dataUrl, `zdata/downloads/${name}.${stringAfter(file.name, '.')}`);
      }
    }

  }
  async function onchangeFileinput(ev) {
    let files = ev.target.files; //console.log(files);
    let file = files[0]; //console.log(file);
    let src = URL.createObjectURL(file); //console.log(src);
    await displayImagedata(src);
  }
  async function displayImagedata(src) {
    mClear(dropZone);
    let img = await mLoadImgAsync(dropZone, { wmax: 500 }, { tag: 'img', src: src });
    console.log('img dims', img.width, img.height);
  }

  //let x = mImageDropper(d3,ondropImage);
  function preventDefaults(ev) { ev.preventDefault(); ev.stopPropagation(); }
  function highlight(ev) { mClass(ev.target, 'framedPicture'); }
  function unhighlight(ev) { mClassRemove(ev.target, 'framedPicture'); }
  ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(evname => {
    dropZone.addEventListener(evname, preventDefaults, false);
    document.body.addEventListener(evname, preventDefaults, false);
  });
  ['dragenter', 'dragover'].forEach(evname => { dropZone.addEventListener(evname, highlight, false); });
  ['dragleave', 'drop'].forEach(evname => { dropZone.addEventListener(evname, unhighlight, false); });
  dropZone.addEventListener('drop', ondropImage, false);
  fileInput.addEventListener('change', onchangeFileinput, false);

}

async function downloadVideo(url, filename) {
	// // Example usage:
	// downloadVideo('https://example.com/video.mp4', 'my_video.mp4');
	try {
		const response = await fetch(url,{mode:'no-cors'});
		if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

		const blob = await response.blob(); // Convert response to a binary blob
		const blobUrl = URL.createObjectURL(blob); // Create a temporary URL

		const a = document.createElement('a');
		a.href = blobUrl;
		a.download = filename || 'video.mp4'; // Set the filename
		document.body.appendChild(a);
		a.click(); // Trigger download
		document.body.removeChild(a);

		URL.revokeObjectURL(blobUrl); // Clean up URL
	} catch (error) {
		console.error('Download failed:', error);
	}
}

function playMusicFile() {

	document.getElementById('fileInput').addEventListener('change', function (event) {
		const file = event.target.files[0];
		if (file) {
			const audioURL = URL.createObjectURL(file);
			const audioPlayer = document.getElementById('audioPlayer');
			audioPlayer.src = audioURL;
			audioPlayer.play();
		}
	});
}
function playYouTubeVideo(url, containerId) {
	// <div id="videoContainer"></div>
	// <button onclick="playYouTubeVideo('https://www.youtube.com/watch?v=dQw4w9WgXcQ', 'videoContainer')">Play Video</button>

	// Extract video ID from URL
	const videoIdMatch = url.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]+)/);
	if (!videoIdMatch) {
		console.error("Invalid YouTube URL");
		return;
	}
	const videoId = videoIdMatch[1];

	// Create iframe
	const iframe = document.createElement("iframe");
	iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
	iframe.width = "560";
	iframe.height = "315";
	iframe.frameBorder = "0";
	iframe.allow = "autoplay; encrypted-media";
	iframe.allowFullscreen = true;

	// Append to container
	const container = document.getElementById(containerId);
	if (!container) {
		console.error("Container not found");
		return;
	}
	container.innerHTML = ""; // Clear previous video
	container.appendChild(iframe);
}

async function ilNewPage(){
  mClear('dMain');
  let bg = rChoose(DA.palette);
  let fg = colorIdealText(bg);
  let d = DA.currentPage = mDom('dMain', { padding: 10, w: 500, align: 'center' });
}
async function ilAddGadget(ev) {
  let dParent = DA.currentPage;
  let list = ['image', 'page', 'text'];
  let item = await mGather(mSelect, ev.target, {}, { list }); console.log('you entered', item);
  if (item == 'image') {
    return mImageDropper(dParent);
  } else if (item == 'text') {
    let bg = rChoose(DA.palette);
    let fg = colorIdealText(bg);
    let d2 = mDom(dParent, { align: 'left', padding: 10, rounding: 10, matop: 10, fz: 20, caret: fg, fg, bg }, { html: '', contenteditable: true });
    d2.focus();
    d2.addEventListener('keydown', (ev) => {
      if (ev.key === 'Escape') {
        ev.preventDefault();
        d2.blur();
      }
    });
    return d2;
  }else if (item == 'page') {

    let d2 = mDom(dParent, { align: 'left', padding: 10, rounding: 10, matop: 10, fz: 20, caret: fg, fg, bg }, { html: '', contenteditable: true });
    d2.focus();
    d2.addEventListener('keydown', (ev) => {
      if (ev.key === 'Escape') {
        ev.preventDefault();
        d2.blur();
      }
    });
    return d2; //mTextbox(dParent);
  }
}
function mSortable(divs) {
	let draggedElement = null;
	let lastHighlighted = null;

	divs.forEach(container => {
		container.querySelectorAll('img').forEach(el => {
			el.draggable = true;

			el.addEventListener('dragstart', ev => {
				draggedElement = el;
				ev.dataTransfer.effectAllowed = 'move';
			});

			enableAutoScrollOnDrag(el)

		});

		container.querySelectorAll('img,div').forEach(el => {
			el.addEventListener('dragover', ev => {
				ev.preventDefault();
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

			el.addEventListener('drop', ev => {
				ev.preventDefault();
				lastHighlighted.style.outline = '';
				let newParent = lastHighlighted.parentNode;
				if (draggedElement && draggedElement !== lastHighlighted) {
					console.log('dropped', draggedElement);
					//console.log('dropped', draggedElement, 'on', lastHighlighted, draggedElement.parentNode);
					draggedElement.style.outline = '';
					console.log(lastHighlighted, draggedElement)
					newParent.insertBefore(draggedElement, lastHighlighted);
				} else {
					const files = ev.dataTransfer.files;
					if (files.length > 0) {
						const file = files[0];
						if (file.type.startsWith('image/')) { // Check if the dropped file is an image
							const reader = new FileReader();
							reader.onload = async (evReader) => {
								let data = evReader.target.result;
								
								ondropUrl(newParent,data);

							};
							reader.readAsDataURL(file);
						}
					}

				}
				draggedElement = null;
				lastHighlighted = null;
			});
		});
	})
}

async function blogSaveAll() {
	// let dpart = ev.target;
	// let dparent = findAncestorWith(dpart, { attribute: 'key' });

	//check if content has changed
	//only save if content has changed!

	function replaceDivs(str) {
		return str.replaceAll('<div>', '<br>').replaceAll('</div>', '');
	}

	let blog = DA.blogs;
	//console.log(blog);

	let list = dict2list(blog); //console.log(list)
	for (const bl of list) {
		//console.log(bl);
		let d = bl.dParts;
		let chi = arrChildren(d); //chi.map(console.log);return;
		let parts = [];
		let prevType = null;
		let prevText = null;
		for (const ch of chi) {
			let type = ch.getAttribute('type'); //console.log(type,ch)
			if (type == 'text') {
				let txt = ch.innerHTML;
				txt = replaceDivs(txt);
				if (isdef(prevText)) txt = prevText + '<br>' + txt;
				prevType = 'text';
				prevText = txt;
			} else {
				if (isdef(prevText)) { parts.push(prevText); prevText = null; }
				prevType = type;
				if (type == 'image') {
					//console.log('src',ch.src);
					parts.push(ch.src);
					//=>later! if this image does not exist yet need to also upload the image!
				} else if (!type) {
					console.log('need to save image data', ch)

					saveBase64Image(ch, 'img1.jpg');
					// await mPhpPostFile(ch.src, 'zdata/img1.jpg');
				}
			}
		}
		//console.log(parts)
		bl.parts = parts;
	}

	let di = {};
	for (const el of list) {
		di[el.key] = { title: el.o.title, text: el.parts };
	}
	let text = jsyaml.dump(di);
	let res = await mPhpPostFile(text, 'zdata/blog1.yaml');
	return res;
}

function onclickPart(ev){
	let elem = ev.target;
	mStyle(elem,{outline:'solid white 3px'})
}
function ondropUrl(elem,url) {
	let w = 500;
	let parent=elem;
	mDom(parent,{w},{tag:'img',src:url});
}
function saveBase64Image(imgElement, filename) {
	// Check if the imgElement has a valid base64 src
	if (!imgElement || !imgElement.src.startsWith('data:image/jpeg;base64,')) {
			console.error('Invalid image element or source.');
			return;
	}

	// Extract base64 data from the image src
	const base64Data = imgElement.src.split(',')[1];

	// Decode base64 to binary data
	const byteCharacters = atob(base64Data);
	const byteNumbers = new Array(byteCharacters.length);
	for (let i = 0; i < byteCharacters.length; i++) {
			byteNumbers[i] = byteCharacters.charCodeAt(i);
	}
	const byteArray = new Uint8Array(byteNumbers);

	// Create a Blob from the binary data
	const blob = new Blob([byteArray], { type: 'image/jpeg' });

	// Create a link element to trigger the download
	const link = document.createElement('a');
	link.href = URL.createObjectURL(blob);
	link.download = filename;

	// Append the link to the document, trigger the download, and remove the link
	document.body.appendChild(link);
	link.click();
	document.body.removeChild(link);
}
function uploadImage(dataUrl, path) {
	// Example: Call this function with your `dataUrl`
	// uploadImage('data:image/png;base64,iVBORw0KGgoAAAANS...');
	if (isdef(path) && (path.startsWith('zdata') || path.startsWith('y'))) path = '../../' + path;
	let sessionType = detectSessionType();
	let server = sessionType == 'fastcomet' ? 'https://moxito.online/' : 'http://localhost:8080/fastcomet/';
	fetch(server + 'ilms/php/upload_image.php', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ image: dataUrl, path })
	})
		.then(response => response.text())
		.then(data => console.log(data))
		.catch(error => console.error('Error:', error));
}

