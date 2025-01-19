
function centerAtPos(elem, x, y) {
  const rect = elem.getBoundingClientRect();
  const offsetX = x - rect.width / 2;
  const offsetY = y - rect.height / 2;
  elem.style.position = 'absolute';
  elem.style.left = `${offsetX}px`;
  elem.style.top = `${offsetY}px`;
}
function getCenterRelativeToParent(div) {
  const rect = div.getBoundingClientRect();
  const parentRect = div.parentNode.getBoundingClientRect();
  return {
    x: rect.left + rect.width / 2 - parentRect.left,
    y: rect.top + rect.height / 2 - parentRect.top
  };
}






