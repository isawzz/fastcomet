
document.addEventListener('DOMContentLoaded', function () {
	const dragImage = document.getElementById('dragImage');
	const dropZone = document.getElementById('dropZone');

	// Handle the dragstart event
	dragImage.addEventListener('dragstart', function (e) {
		e.dataTransfer.setData('text/plain', e.target.id);
	});

	// Handle the dragover event
	dropZone.addEventListener('dragover', function (e) {
		e.preventDefault();
		dropZone.classList.add('hover');
	});

	// Handle the dragleave event
	dropZone.addEventListener('dragleave', function () {
		dropZone.classList.remove('hover');
	});

	// Handle the drop event
	dropZone.addEventListener('drop', function (e) {
		e.preventDefault();
		dropZone.classList.remove('hover');
		const imageId = e.dataTransfer.getData('text/plain');
		const draggedImage = document.getElementById(imageId);
		dropZone.innerHTML = '';
		dropZone.appendChild(draggedImage);
	});
});
