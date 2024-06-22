import io from "./servidor.js";

io.on('connection', (socket) => {
    console.log('Se conectó un cliente con id:', socket.id);

    socket.on('cambiosEditor', (textoEditor) => {
        socket.broadcast.emit('actualizarEditor', textoEditor);
    });


}) 