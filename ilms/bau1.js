
async function addGadget(ev,dParent){
  let list = ['image','text'];
  let item = await mGather(mSelect, ev.target, {}, { list }); console.log('you entered', item); 
  if (item == 'image') {
    return mImageDropper(dParent);
  }else{
    let bg=rChoose(DA.palette);
    let fg=colorIdealText(bg);
    let d2 = mDom(dParent, { align:'left',padding:10, rounding:10, matop:10,fz: 20, caret: fg,fg, bg }, { html: '', contenteditable: true });
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
function mTextbox(dParent){
  let d = mDom(dParent, {w: '100%', h: 30, bg: 'yellow', margin: '10px'});
  let dInp = mInput(d, {w: '100%', h: 30, bg: 'white', margin: '10px'});
  return d;

}