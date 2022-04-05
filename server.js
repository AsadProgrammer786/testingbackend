const express = require('express');
const app = express();
const http = require('http');
const port = process.env.PORT || 80;
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get('/', (req, res) => {
    res.end("hi");
});
server.listen(port, () => {
    console.log('listening on *:3000');
});
io.on('connection', socket => {
    console.log("hihi");
    socket.on('message', (ar) => {
        console.log("done");
    })
});
