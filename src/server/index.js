const express = require('express');
const path = require('path');
const socketIO = require('socket.io');
const http = require('http');
const pool = require('./db');  // Aquí está la conexión a la base de datos

// Crear la aplicación Express
const app = express();

// Crear el servidor HTTP usando el objeto Express
const server = http.createServer(app);

// Configurar Socket.io en el servidor
const io = socketIO(server);

// Establecer el puerto que usará el servidor
app.set('port', process.env.PORT || 3000);

// Servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, '../public')));

// Middleware para manejar JSON en las solicitudes
app.use(express.json());

// Ruta raíz para verificar que el servidor esté funcionando
app.get('/', (req, res) => {
    res.send('Servidor conectado');
});

// Configurar WebSockets con Socket.io
io.on('connection', (socket) => {
    console.log('Usuario conectado');

    // Evento de desconexión
    socket.on('disconnect', () => {
        console.log('Usuario desconectado');
    });
});

// Iniciar el servidor y escuchar en el puerto especificado
server.listen(app.get('port'), () => {
    console.log(`Servidor en el puerto ${app.get('port')}`);
});
