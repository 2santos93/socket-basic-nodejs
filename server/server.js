const express = require('express');
const path = require('path');
const app = express();
const server = require('http').createServer(app);
module.exports.io = require('socket.io')(server); // esta es la comunicacion del backend

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath)); // middleware para habilitar la carpeta public y que todos puedan acceder a ella
require('./socket/socket');

server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

}); 