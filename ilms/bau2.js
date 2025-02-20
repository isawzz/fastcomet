
function mSortable(divs) {
	let draggedElement = null;
	let lastHighlighted = null;

	divs.forEach(container => {
		container.querySelectorAll('img').forEach(el => {
			el.draggable = true;

			el.addEventListener('dragstart', e => {
				draggedElement = el;
				e.dataTransfer.effectAllowed = 'move';
			});

		});

		container.querySelectorAll('img,div').forEach(el => {
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
					console.log('dropped', draggedElement, 'on', lastHighlighted, draggedElement.parentNode);
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

