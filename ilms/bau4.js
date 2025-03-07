
function removeAllEvents(elem) {
	const newElement = elem.cloneNode(true); // Clone the element while keeping child elements
	elem.parentNode.replaceChild(newElement, elem);
	return newElement; // Return the new element reference
}
function removeEvent(elem, evname) {
	const dragEnterListeners = elem.listeners(evname);
	dragEnterListeners.forEach(listener => { elem.removeEventListener(evname, listener); });
}
function replaceElement(elem,newElem) {
	elem.parentNode.replaceChild(newElem, elem);
	return newElem;
}


