
async function mImageAudioDropper(d) {
  let fileInput = mDom(d, {}, { tag: 'input', type: 'file', accept: 'image/*,audio/*' }); //,{onchange:onchangeFileInput});
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
    if (file) {
			await displayImagedata(URL.createObjectURL(file));
		} else {
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
        uploadImage(dataUrl, `zdata/images/${name}.${stringAfter(file.name, '.')}`);
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

async function mImageMusicDropper(d) {
	d=toElem(d);
	mFlexWrap(d); //let d1=mDom(d);
  let fileInput = mDom(d, {bg:'blue',h:50}, { tag: 'input', type: 'file', accept: 'image/*,audio/*' }); 
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
        uploadImage(dataUrl, `zdata/images/${name}.${stringAfter(file.name, '.')}`);
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

