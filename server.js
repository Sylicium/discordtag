const config = require("./config")

const fs = require('fs');

const http = require('http');
const https = require('https');
const path = require('path');
const mysql = require('mysql');

module.exports.runHTTP = () => {
    let express = require('express');
    let appWebHTTP = express();    
    
    let httpServer = http.createServer(
		// Provide the private and public key to the server by reading each
		// file's content with the readFileSync() method.
    {
      key: fs.readFileSync("key.pem"),
      cert: fs.readFileSync("cert.pem"),
    },
    appWebHTTP
  )
    // let ioHTTP = require('socket.io')(httpServer);

    httpServer.listen(config.server.portHTTP, () => {
        console.log(`[http] Website : localhost:${config.server.portHTTP}`)
    });
    
    appWebHTTP.use(express.static('site'));
}

module.exports.runHTTPS = () => {
    let express = require('express');
    let appWebHTTPS = express();    
    
    let httpsServer = https.createServer(
		// Provide the private and public key to the server by reading each
		// file's content with the readFileSync() method.
    {
      key: fs.readFileSync("key.pem"),
      cert: fs.readFileSync("cert.pem"),
    },
    appWebHTTPS
  )
    // let ioHTTPs = require('socket.io')(httpsServer);

    httpsServer.listen(config.server.portHTTPS, () => {
        console.log(`[https] Website : localhost:${config.server.portHTTPS}`)
    });
    
    appWebHTTPS.use(express.static('site'));
}
