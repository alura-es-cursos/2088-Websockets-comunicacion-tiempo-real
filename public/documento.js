import { emitirCambiosEditor } from "./socket-front-documento.js";

const textoEditor = document.getElementById('editor-texto');

textoEditor.addEventListener("keyup", () => {
    emitirCambiosEditor(textoEditor.value);
});

function actualizarEditor(texto) {
    textoEditor.value = texto;
}

export { actualizarEditor }