const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get('/', (req, res) => {
    res.end("hi");
});
server.listen(4000, () => {
    console.log('listening on *:3000');
});
io.on('connection', socket => {
    console.log("hihi");
    socket.on('message', (ar) => {
        console.log("done");
    })
});
