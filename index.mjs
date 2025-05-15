// Import the 'net' module to work with TCP connections
import net from 'net';

// Create a new TCP server
const server = net.createServer(socket => {
    // Log when a client successfully connects
    console.log("✅ TCP handshake successful with " + socket.remoteAddress + ":" + socket.remotePort);
    
    // Send a welcome message to the connected client
    socket.write("👋 Hello Client!");

    // Listen for data from the client
    socket.on("data", data => {
        console.log("📨 Received data: " + data.toString());
    });

    // Optional: Handle client disconnection
    socket.on("end", () => {
        console.log("🔌 Client disconnected.");
    });

    // Optional: Handle socket errors
    socket.on("error", (err) => {
        console.error("⚠️ Socket error:", err.message);
    });
});

// Bind the server to localhost on port 8800
server.listen(8800, "127.0.0.1", () => {
    console.log("🚀 TCP server is listening on 127.0.0.1:8800");
});
