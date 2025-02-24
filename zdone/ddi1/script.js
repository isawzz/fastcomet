
document.addEventListener('DOMContentLoaded', function() {
	var dropZone = document.getElementById('drop-zone');
	var droppedImage = document.getElementById('dropped-image');

	// Prevent default drag behaviors
	['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
			dropZone.addEventListener(eventName, preventDefaults, false);
			document.body.addEventListener(eventName, preventDefaults, false);
	});

	// Highlight drop zone when item is dragged over it
	['dragenter', 'dragover'].forEach(eventName => {
			dropZone.addEventListener(eventName, highlight, false);
	});

	['dragleave', 'drop'].forEach(eventName => {
			dropZone.addEventListener(eventName, unhighlight, false);
	});

	// Handle dropped files
	dropZone.addEventListener('drop', handleDrop, false);

	function preventDefaults(e) {
			e.preventDefault();
			e.stopPropagation();
	}

	function highlight() {
			dropZone.style.borderColor = 'green';
			dropZone.style.color = 'green';
	}

	function unhighlight() {
			dropZone.style.borderColor = '#ccc';
			dropZone.style.color = '#aaa';
	}

	function handleDrop(e) {
			var dt = e.dataTransfer;
			var files = dt.files;

			if (files.length) {
					handleFiles(files);
			} else {
					// Handle external image URLs
					var imageUrl = dt.getData('text/uri-list');
					if (imageUrl) {
							displayImage(imageUrl);
					} else {
							alert('Please drop an image file or a valid image URL.');
					}
			}
	}

	function handleFiles(files) {
			var file = files[0];
			if (file.type.startsWith('image/')) {
					var reader = new FileReader();
					reader.readAsDataURL(file);
					reader.onloadend = function() {
							displayImage(reader.result);
					}
			} else {
					alert('Please drop an image file.');
			}
	}

	function displayImage(src) {
			droppedImage.src = src;
			droppedImage.style.display = 'block';
			dropZone.textContent = '';
			dropZone.appendChild(droppedImage);
	}
});
