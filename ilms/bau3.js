
async function downloadVideo(url, filename) {
	// // Example usage:
	// downloadVideo('https://example.com/video.mp4', 'my_video.mp4');
	try {
		const response = await fetch(url,{mode:'no-cors'});
		if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

		const blob = await response.blob(); // Convert response to a binary blob
		const blobUrl = URL.createObjectURL(blob); // Create a temporary URL

		const a = document.createElement('a');
		a.href = blobUrl;
		a.download = filename || 'video.mp4'; // Set the filename
		document.body.appendChild(a);
		a.click(); // Trigger download
		document.body.removeChild(a);

		URL.revokeObjectURL(blobUrl); // Clean up URL
	} catch (error) {
		console.error('Download failed:', error);
	}
}

function playMusicFile() {

	document.getElementById('fileInput').addEventListener('change', function (event) {
		const file = event.target.files[0];
		if (file) {
			const audioURL = URL.createObjectURL(file);
			const audioPlayer = document.getElementById('audioPlayer');
			audioPlayer.src = audioURL;
			audioPlayer.play();
		}
	});
}
function playYouTubeVideo(url, containerId) {
	// <div id="videoContainer"></div>
	// <button onclick="playYouTubeVideo('https://www.youtube.com/watch?v=dQw4w9WgXcQ', 'videoContainer')">Play Video</button>

	// Extract video ID from URL
	const videoIdMatch = url.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]+)/);
	if (!videoIdMatch) {
		console.error("Invalid YouTube URL");
		return;
	}
	const videoId = videoIdMatch[1];

	// Create iframe
	const iframe = document.createElement("iframe");
	iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
	iframe.width = "560";
	iframe.height = "315";
	iframe.frameBorder = "0";
	iframe.allow = "autoplay; encrypted-media";
	iframe.allowFullscreen = true;

	// Append to container
	const container = document.getElementById(containerId);
	if (!container) {
		console.error("Container not found");
		return;
	}
	container.innerHTML = ""; // Clear previous video
	container.appendChild(iframe);
}

