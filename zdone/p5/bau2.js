
function enableDragDrop(container) {
	let draggedElement = null;
	let lastHighlighted = null;

	container.querySelectorAll('div, img').forEach(el => {
			el.draggable = true;

			el.addEventListener('dragstart', e => {
					draggedElement = el;
					e.dataTransfer.effectAllowed = 'move';
			});

			el.addEventListener('dragover', e => {
					e.preventDefault();
					if (el !== draggedElement) {
							if (lastHighlighted) lastHighlighted.style.border = '';
							el.style.border = '2px solid yellow';
							lastHighlighted = el;
					}
			});

			el.addEventListener('dragleave', () => {
					if (el === lastHighlighted) {
							el.style.border = '';
							lastHighlighted = null;
					}
			});

			el.addEventListener('drop', e => {
					e.preventDefault();
					if (draggedElement && lastHighlighted && draggedElement !== lastHighlighted) {
							lastHighlighted.style.border = '';
							lastHighlighted.after(draggedElement);
					}
					draggedElement = null;
					lastHighlighted = null;
			});
	});
}

// Example usage:
// enableDragDrop(document.getElementById('listContainer'));





