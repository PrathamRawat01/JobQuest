// server.ts
import { Server } from "socket.io";
import http from "http";

const port = 3001; // The port for the WebSocket server
const httpServer = http.createServer(); // Create an HTTP server

// Initialize the Socket.IO server
const io = new Server(httpServer, {
    cors: {
        origin: "*", // Allow all origins (useful for local development)
    },
});

io.on("connection", (socket) => {
    console.log("A user connected", socket.id);

    // Emit a welcome message to the connected client
    socket.emit("chat message", "Welcome to the chat!");

    // Listen for "chat message" events from the client
    socket.on("chat message", (msg) => {
        console.log("Message received:", msg);

        // Broadcast the message to all clients (including the sender)
        io.emit("chat message", msg);
    });

    // Handle user disconnect event
    socket.on("disconnect", () => {
        console.log("A user disconnected", socket.id);
    });
});

// Start the server on the specified port
httpServer.listen(port, () => {
    console.log(`WebSocket server is running on http://localhost:${port}`);
});
