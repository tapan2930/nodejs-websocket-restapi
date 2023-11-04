const WebSocket = require("ws");

// initialize new Websocket server instance  at port 8080
const wss = new WebSocket.Server({ port: 8080 });

// Store connected clients
const clients = new Set();

wss.on("connection", (ws) => {
  console.log("A client connected");
  clients.add(ws);

  ws.on("message", (message) => {
    console.log(`Received: ${message}`);
    // Broadcast the message to all connected clients
    clients.forEach((client) => {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  });

  ws.on("close", () => {
    console.log("A client disconnected");
    clients.delete(ws);
  });
});

// Handle errors
wss.on("error", (error) => {
  console.error(`WebSocket Server Error: ${error.message}`);
});
