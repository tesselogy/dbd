const http = require("http");
const path = require("path");
const express = require("express");
const app = express();
var port = process.env.PORT || "3000";

var server = http.createServer(app);
var io = require("socket.io").listen(server);

server.listen(port);
console.log("listen on " + port);
app.disable("x-powered-by");

var favicon = require('serve-favicon');
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/dist/index.html')
})

app.use("/static", express.static(__dirname + '/dist/static'));






io.on("connection", function(socket) {
    console.log('socket ID '+ socket.id);
    socket.on("request", function (data) {
        console.log("socket request DATA " + data);

    })
})
