const config = require("./config")

const fs = require('fs');

const http = require('http');
const https = require('https');
const path = require('path');
const mysql = require('mysql');

module.exports.run = () => {
    let express = require('express');
    let appWebHTTPS = express();    
    
    let httpServer = https.createServer(
		// Provide the private and public key to the server by reading each
		// file's content with the readFileSync() method.
    {
      key: fs.readFileSync("key.pem"),
      cert: fs.readFileSync("cert.pem"),
    },
    appWebHTTPS
  )
    // let ioHTTP = require('socket.io')(httpServer);

    httpServer.listen(config.server.portHTTPS, () => {
        console.log(`[http] Website : localhost:${config.server.portHTTPS}`)
    });
    
    appWebHTTPS.use(express.static('site'));
}
