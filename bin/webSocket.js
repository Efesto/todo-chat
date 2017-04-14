var http = require('http');
var websocketserver = new require('websocket').server;


let wsServer = http.createServer();
wsServer.listen('1337');

let daRealWebSocketServer = new websocketserver({
    // WebSocket server is tied to a HTTP server. WebSocket request is just
    // an enhanced HTTP request. For more info http://tools.ietf.org/html/rfc6455#page-6
    httpServer: wsServer
});

let clients = [];

daRealWebSocketServer.on('request', (request) => {
    let connection = request.accept(null, request.origin);
    clients.push(connection);

    connection.on('message', (request) => {
        for (var i=0; i < clients.length; i++) {
            clients[i].sendUTF('ciao');
        }
    });
});

