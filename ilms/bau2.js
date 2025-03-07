
async function mImageAudioDropper(d) {
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
    let file = item.getAsFile(); console.log('file', file);
    if (file) {
      let type = file.type;
      let src = URL.createObjectURL(file); console.log('src', src);
      let o = DA.droppedElement = { type, file, src };
      if (type.startsWith('image')) {
        o.elem = await displayImagedata(src);
      } else if (type.startsWith('video')) {
        o.elem = mDom(dropZone, { w: 500, h: 300 }, { tag: 'video', src, controls: true });
      } else if (type.startsWith('audio')) {
        let audioPlayer = o.elem = mDom(dropZone, {}, { tag: 'audio', src, controls: true });
        audioPlayer.play();
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

