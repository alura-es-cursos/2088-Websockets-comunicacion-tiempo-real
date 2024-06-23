import { emitirCambiosEditor, emitirNombreDocumento } from "./socket-front-documento.js";

const textoEditor = document.getElementById('editor-texto');
const tituloDocumento = document.getElementById('titulo-documento');
const parametros = new URLSearchParams(window.location.search);

const nombreDocumento = parametros.get('nombre');

tituloDocumento.textContent = nombreDocumento || 'Documento sin titulo';

emitirNombreDocumento(nombreDocumento);

textoEditor.addEventListener("keyup", () => {
    emitirCambiosEditor({ textoEditor: textoEditor.value, nombreDocumento });
});

function actualizarEditor(texto) {
    textoEditor.value = texto;
}

export { actualizarEditor }