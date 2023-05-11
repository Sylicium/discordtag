const config = require("./config")

const fs = require('fs');

const http = require('http');
const https = require('https');
const path = require('path');
const mysql = require('mysql');

module.exports.run = () => {
    let express = require('express');
    let appWebHTTP = express();    
    
    let httpServer = http.createServer(appWebHTTP);
    // let ioHTTP = require('socket.io')(httpServer);

    httpServer.listen(config.server.port, () => {
        console.log(`[http] Website : localhost:${config.server.port}`)
    });
    
    appWebHTTP.use(express.static('site'));
}
