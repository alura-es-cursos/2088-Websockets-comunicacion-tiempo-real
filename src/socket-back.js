import io from "./servidor.js";

const listaDocumentos = [
    {
        nombre: 'JavaScript',
        texto: 'Este es el texto de JavaScript'
    },
    {
        nombre: 'Node',
        texto: 'Este es el texto de Node'
    },
    {
        nombre: 'Socket.io',
        texto: 'Este es el texto de Socket.io'
    },

]

io.on('connection', (socket) => {
    console.log('Se conectó un cliente con id:', socket.id);

    socket.on('cambiosEditor', ({ textoEditor, nombreDocumento }) => {
        //socket.broadcast.emit('actualizarEditor', textoEditor);
        const documentoActual = obtenerDatosDocumento(nombreDocumento);

        if (documentoActual) {
            documentoActual.texto = textoEditor;
        }
        socket.to(nombreDocumento).emit('actualizarEditor', textoEditor);
    });

    socket.on('nombreDocumento', (nombreDocumento, devolverDocumento) => {
        socket.join(nombreDocumento);

        const documentoActual = obtenerDatosDocumento(nombreDocumento);

        if (documentoActual) {
            devolverDocumento(documentoActual.texto);
        }
    })

});

function obtenerDatosDocumento(nombreDocumento) {
    return listaDocumentos.find((documento) => {
        return documento.nombre === nombreDocumento;
    })
}