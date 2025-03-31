const fs = require('fs');
// const ytdl = require('ytdl-core'); //does not work!

// async function downloadYouTubeVideo(url, filename) {
//     try {
//         const videoStream = ytdl(url, { quality: 'highestvideo' });
//         const fileStream = fs.createWriteStream(filename);

//         videoStream.pipe(fileStream);

//         fileStream.on('finish', () => {
//             console.log('Download complete:', filename);
//         });

//     } catch (error) {
//         console.error('Error downloading video:', error);
//     }
// }
const { exec } = require("child_process");

function downloadYouTubeVideo(url, outputFilename) {
    const command = `yt-dlp -f best -o "${outputFilename}" "${url}"`;
    
    exec(command, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.error(`stderr: ${stderr}`);
            return;
        }
        console.log(`Download complete: ${outputFilename}`);
    });
}

// Example usage:
downloadYouTubeVideo('https://www.youtube.com/watch?v=hILdD5N9Eos', 'zdata/downloads/video.mp4');


