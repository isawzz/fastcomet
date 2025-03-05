
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
