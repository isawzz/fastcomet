
async function loadAssets(sessionType) {
  if (nundef(M)) M = {};
  if (nundef(sessionType)) sessionType = detectSessionType(); 
  console.log('in loadAssets:',sessionType)
  if (sessionType == 'telecave') {
    let res = await postPHP({}, 'assets'); //console.log(res);
    let jsonObject = JSON.parse(res); 
    let di = {};
    for (const k in jsonObject) {
      di[k] = jsyaml.load(jsonObject[k]); 
    }
    for (const k in di.m) M[k] = di.m[k];
    for (const k in di) if (k != 'm') M[k] = di[k];
  } else {
    let m = await mGetYaml('../y/m.yaml');
    for (const k in m) M[k] = m[k];
    M.superdi = await mGetYaml('../y/superdi.yaml');
    M.details = await mGetYaml('../y/details.yaml');
    M.dicolor = await mGetYaml(`../assets/dicolor.yaml`);
  }
  let [di, byColl, byFriendly, byCat, allImages] = [M.superdi, {}, {}, {}, {}];
  for (const k in di) {
    let o = di[k];
    for (const cat of o.cats) lookupAddIfToList(byCat, [cat], k);
    for (const coll of o.colls) lookupAddIfToList(byColl, [coll], k);
    lookupAddIfToList(byFriendly, [o.friendly], k)
    if (isdef(o.img)) {
      let fname = stringAfterLast(o.img, '/')
      allImages[fname] = { fname, path: o.img, k };
    }
  }
  M.allImages = allImages;
  M.byCat = byCat;
  M.byCollection = byColl;
  M.byFriendly = byFriendly;
  M.categories = Object.keys(byCat); M.categories.sort();
  M.collections = Object.keys(byColl); M.collections.sort();
  M.names = Object.keys(byFriendly); M.names.sort();
  [M.colorList, M.colorByHex, M.colorByName] = getListAndDictsForDicolors();
}












