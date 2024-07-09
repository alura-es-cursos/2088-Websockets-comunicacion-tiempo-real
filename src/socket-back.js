import { actualizarDatosDocumento, obtenerDatosDocumento } from "./documentosBD.js";
import io from "./servidor.js";

io.on('connection', (socket) => {
    console.log('Se conectó un cliente con id:', socket.id);

    socket.on('cambiosEditor', async ({ textoEditor, nombreDocumento }) => {
        //const documentoActual = await obtenerDatosDocumento(nombreDocumento);
        const actualizacion = await actualizarDatosDocumento(nombreDocumento, textoEditor);

        console.log(actualizacion);

        if (actualizacion.modifiedCount) {
            socket.to(nombreDocumento).emit('actualizarEditor', textoEditor);
        }

    });

    socket.on('nombreDocumento', async (nombreDocumento, devolverDocumento) => {
        socket.join(nombreDocumento);

        const documentoActual = await obtenerDatosDocumento(nombreDocumento);

        if (documentoActual) {
            devolverDocumento(documentoActual.texto);
        }
    })

});

