import { actualizarEditor } from "./documento.js";

const socket = io();

function emitirCambiosEditor(texto) {
    socket.emit('cambiosEditor', texto);
}

socket.on('actualizarEditor', (texto) => {
    actualizarEditor(texto);
});

export { emitirCambiosEditor }