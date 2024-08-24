// Función para generar una semilla aleatoria
function generarSeed() {
    return Math.floor(Math.random() * 10000);
}

// Función de encriptado
function encriptarTexto(texto, seed) {
    let encriptado = '';
    for (let i = 0; i < texto.length; i++) {
        let codigo = texto.charCodeAt(i) + seed;
        encriptado += String.fromCharCode(codigo);
    }
    return encriptado;
}

// Función de desencriptado
function desencriptarTexto(texto, seed) {
    let desencriptado = '';
    for (let i = 0; i < texto.length; i++) {
        let codigo = texto.charCodeAt(i) - seed;
        desencriptado += String.fromCharCode(codigo);
    }
    return desencriptado;
}

// Obtener elementos del DOM
const inputText = document.getElementById('input-text');
const outputText = document.getElementById('output-text');
const outputContainer = document.getElementById('output-container');
const outputImage = document.getElementById('output-image');
const copyBtn = document.getElementById('copy-btn');
const copySeedContainer = document.getElementById('copy-seed-container');
const copySeedText = document.getElementById('copy-seed');
const copySeedBtn = document.getElementById('copy-seed-btn');

// Botones
const encryptBtn = document.getElementById('encrypt-btn');
const decryptBtn = document.getElementById('decrypt-btn');

// Función para validar el texto
function validarTexto(texto) {
    const regex = /^[a-z\s]+$/;  // Solo minúsculas y espacios
    return regex.test(texto);
}

// Evento para encriptar el texto
encryptBtn.addEventListener('click', () => {
    const texto = inputText.value;

    if (!validarTexto(texto)) {
        alert('Solo se permiten letras minúsculas y sin acentos.');
        return;
    }

    const seed = generarSeed();
    const textoEncriptado = encriptarTexto(texto, seed);

    outputText.textContent = textoEncriptado;
    outputText.style.display = 'block';
    outputImage.style.display = 'none';
    copyBtn.style.display = 'block';
    copySeedContainer.style.display = 'block';
    copySeedText.textContent = seed;
});

// Evento para desencriptar el texto
decryptBtn.addEventListener('click', () => {
    const texto = inputText.value;
    const seed = parseInt(copySeedText.textContent, 10);

    if (!validarTexto(texto)) {
        alert('Solo se permiten letras minúsculas y sin acentos.');
        return;
    }

    const textoDesencriptado = desencriptarTexto(texto, seed);

    outputText.textContent = textoDesencriptado;
    outputText.style.display = 'block';
    outputImage.style.display = 'none';
    copyBtn.style.display = 'block';
    copySeedContainer.style.display = 'block';
});

// Evento para copiar el texto encriptado/desencriptado
copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(outputText.textContent).then(() => {
        alert('Texto copiado al portapapeles.');
    });
});

// Evento para copiar la semilla
copySeedBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(copySeedText.textContent).then(() => {
        alert('Semilla copiada al portapapeles.');
    });
});
