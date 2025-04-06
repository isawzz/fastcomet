// game-server.js
const http = require("http").createServer();
const io = require("socket.io")(http, {
	cors: {
		origin: "*", // For development, allow all origins
	},
});

io.on("connection", (socket) => {
	console.log("A player connected:", socket.id);

	socket.on("move", (data) => {
		console.log("Move received:", data);
		socket.broadcast.emit("move", data); // Send to all other players
	});

	socket.on("disconnect", () => {
		console.log("A player disconnected:", socket.id);
	});
});

http.listen(3000, () => {
	console.log("Game server listening on port 3000");
});
