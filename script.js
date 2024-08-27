// Variables globales
let seed = null;
const SPECIAL_SEED = 'oracle';

// Función para convertir texto usando reglas especiales
function specialEncrypt(text) {
    const substitutions = {
        'e': 'enter',
        'i': 'imes',
        'a': 'ai',
        'o': 'ober',
        'u': 'ufat'
    };
    return text.split('').map(char => substitutions[char] || char).join('');
}

// Función para revertir las reglas especiales
function specialDecrypt(text) {
    const substitutions = {
        'enter': 'e',
        'imes': 'i',
        'ai': 'a',
        'ober': 'o',
        'ufat': 'u'
    };
    let result = text;
    for (const [key, value] of Object.entries(substitutions)) {
        result = result.split(key).join(value);
    }
    return result;
}

// Función para encriptar texto
function encrypt(text, seed) {
    return text.split('').map(char => String.fromCharCode(char.charCodeAt(0) + seed)).join('');
}

// Función para desencriptar texto
function decrypt(text, seed) {
    return text.split('').map(char => String.fromCharCode(char.charCodeAt(0) - seed)).join('');
}

// Mostrar GIF cuando no haya texto encriptado y ocultar el cuadro de texto encriptado
document.getElementById('input-text').addEventListener('input', function () {
    const outputText = document.getElementById('output-text');
    const searchGif = document.getElementById('search-gif');

    if (this.value.trim() === '') {
        searchGif.style.display = 'block';
        outputText.style.display = 'none';
        document.getElementById('copy-output-btn').style.display = 'none'; // Ocultar botón copiar
    } else {
        searchGif.style.display = 'none';
        outputText.style.display = 'block'; // Mostrar cuadro de texto encriptado
    }
});

// Evento para el botón "Encriptar"
document.getElementById('encrypt-btn').addEventListener('click', function () {
    const inputText = document.getElementById('input-text').value;
    const outputText = document.getElementById('output-text');
    const searchGif = document.getElementById('search-gif');
    const copyOutputBtn = document.getElementById('copy-output-btn');

    // Validación de caracteres permitidos
    if (!/^[a-z\s]*$/.test(inputText)) {
        showDialog('⚠️ Solo se permiten letras minúsculas, sin acentos ni caracteres especiales.');
        return;
    }

    // Generar semilla si no existe y se necesita
    let currentSeed = document.getElementById('seed-input').value.trim();
    if (!/^\d{6}$/.test(currentSeed)) {
        if (currentSeed === SPECIAL_SEED) {
            // Special encryption
            outputText.textContent = specialEncrypt(inputText);
            document.getElementById('seed-input').value = SPECIAL_SEED;
        } else {
            // Generate a new seed if the current one is invalid or blank
            seed = Math.floor(Math.random() * 900000) + 100000; // Seed de 6 dígitos
            document.getElementById('seed-input').value = seed;
        }
    } else {
        seed = parseInt(currentSeed);
    }

    // Encriptar con la semilla actual
    const encryptedText = currentSeed === SPECIAL_SEED ? specialEncrypt(inputText) : encrypt(inputText, seed);

    // Mostrar texto encriptado y ocultar GIF
    outputText.textContent = encryptedText;
    searchGif.style.display = 'none';
    outputText.style.display = 'block';
    copyOutputBtn.style.display = 'inline-block'; // Mostrar botón copiar
});


// Evento para el botón "Desencriptar"
document.getElementById('decrypt-btn').addEventListener('click', function () {
    const inputText = document.getElementById('output-text').textContent;
    const currentSeed = document.getElementById('seed-input').value.trim();

    if (!/^\d{6}$/.test(currentSeed) && currentSeed !== SPECIAL_SEED) {
        showDialog('⚠️ Debes introducir una semilla válida de 6 dígitos para desencriptar');
        return;
    }

    // Intentar desencriptar
    const decryptedText = currentSeed === SPECIAL_SEED 
        ? specialDecrypt(inputText) 
        : decrypt(inputText, parseInt(currentSeed));
        
    document.getElementById('input-text').value = decryptedText;
});

// Funcionalidad para el botón "Copiar" (entrada)
document.getElementById('copy-btn').addEventListener('click', function () {
    const inputText = document.getElementById('input-text');
    inputText.select();
    document.execCommand('copy');
});

// Funcionalidad para el botón "Pegar"
document.getElementById('paste-btn').addEventListener('click', function () {
    navigator.clipboard.readText().then(text => {
        document.getElementById('input-text').value = text;
    });
});

// Funcionalidad para el botón "Borrar"
document.getElementById('clear-btn').addEventListener('click', function () {
    document.getElementById('input-text').value = '';
});

// Funcionalidad para el botón "Copiar" (output)
document.getElementById('copy-output-btn').addEventListener('click', function () {
    const outputText = document.getElementById('output-text').textContent;
    navigator.clipboard.writeText(outputText).then(() => {
        const copiedMessage = document.getElementById('copied-message');
        copiedMessage.style.display = 'block';
        setTimeout(() => {
            copiedMessage.style.display = 'none';
        }, 2000);
    });
});

// Mostrar cuadro de diálogo emergente
function showDialog(message) {
    const dialog = document.getElementById('dialog');
    dialog.textContent = message;
    dialog.classList.add('show'); // Mostrar el cuadro emergente
    setTimeout(() => {
        dialog.classList.remove('show'); // Ocultar después de 3 segundos
    }, 3000);
}

