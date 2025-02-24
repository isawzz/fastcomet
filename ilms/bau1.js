

async function handleDrop(ev) {
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
    }
  }


  // if (files.length) {
  //   var file = files[0];
  //   if (file.type.startsWith('image/')) {
  //     console.log(file)
  //     let {dataUrl,width,height} = await resizeImage(file, 500, 1000);
  //     let name = `img${getNow()}`; //await mGather(mInput, 'dTop', { bg: 'pink', padding: 4 }); console.log('you entered', name);
  //     uploadImage(dataUrl, `zdata/images/${name}.${stringAfter(file.name, '.')}`);
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

