# TCP Client-Server in Node.js

This project demonstrates a simple TCP server built using Node.js. It uses the built-in `net` module to accept client connections, exchange messages, and log received data.

## 📁 Project Structure


## 🚀 How It Works

- The server listens on `127.0.0.1:8800`.
- When a client connects, it sends a greeting message.
- It logs any data sent by the client.

## 🛠 Requirements

- Node.js (v14+)
- ECMAScript module support (`.mjs` extension or `type: "module"` in `package.json`)

## ▶️ Running the Server

1. Save the code to a file called `tcp_server.mjs`.
2. In your terminal:

```bash
node tcp_server.mjs
