import { coleccion } from "./conexionBD.js";

async function obtenerDatosDocumento(nombreDocumento) {
    // return listaDocumentos.find((documento) => {
    //     return documento.nombre === nombreDocumento;
    // })
    const documento = await coleccion.findOne({
        nombre: nombreDocumento
    });
    console.log(documento)

    return documento;
}

async function actualizarDatosDocumento(nombreDocumento, texto) {
    const actualizacion = await coleccion.updateOne({
        nombre: nombreDocumento
    }, {
        $set: {
            texto
        }
    });

    return actualizacion;
}

export { obtenerDatosDocumento, actualizarDatosDocumento }