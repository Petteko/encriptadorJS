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

document.getElementById('encrypt-btn').addEventListener('click', function () {
    const inputText = document.getElementById('input-text').value;

    // Validación de caracteres permitidos
    if (!/^[a-z\s]*$/.test(inputText)) {
        alert('Solo se permiten letras minúsculas y sin acentos.');
        return;
    }

    // Generar semilla si no existe y se necesita
    let currentSeed = document.getElementById('seed-input').value.trim();
    if (!/^\d{6}$/.test(currentSeed)) {
        if (currentSeed === SPECIAL_SEED) {
            // Special encryption
            document.getElementById('output-text').textContent = specialEncrypt(inputText);
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
    const encryptedText = seed === SPECIAL_SEED ? specialEncrypt(inputText) : encrypt(inputText, seed);

    // Mostrar texto encriptado y ocultar GIF
    document.getElementById('output-text').textContent = encryptedText;
    document.getElementById('search-gif').style.display = 'none';
    document.getElementById('copy-btn').style.display = 'inline-block';
});

document.getElementById('decrypt-btn').addEventListener('click', function () {
    const inputText = document.getElementById('input-text').value;
    const currentSeed = document.getElementById('seed-input').value.trim();

    if (!/^\d{6}$/.test(currentSeed) && currentSeed !== SPECIAL_SEED) {
        alert('Debe ingresar una semilla válida.');
        return;
    }

    // Intentar desencriptar
    const decryptedText = currentSeed === SPECIAL_SEED 
        ? specialDecrypt(inputText) 
        : decrypt(inputText, parseInt(currentSeed));
        
    document.getElementById('input-text').value = decryptedText;
});

document.getElementById('seed-input').addEventListener('input', function () {
    seed = this.value.trim();

});

document.getElementById('copy-btn').addEventListener('click', function () {
    const outputText = document.getElementById('output-text').textContent;
    navigator.clipboard.writeText(outputText).then(() => {
        const copiedMessage = document.getElementById('copied-message');
        copiedMessage.style.display = 'block';
        setTimeout(() => {
            copiedMessage.style.display = 'none';
        }, 2000);
    });
});

// Mostrar GIF cuando no haya texto encriptado
document.getElementById('input-text').addEventListener('input', function () {
    if (this.value.trim() === '') {
        document.getElementById('search-gif').style.display = 'block';
        document.getElementById('output-text').textContent = '';
        document.getElementById('copy-btn').style.display = 'none';
    }
});

// Función para encriptar texto
function encrypt(text, seed) {
    return text.split('').map(char => String.fromCharCode(char.charCodeAt(0) + seed)).join('');
}

// Función para desencriptar texto
function decrypt(text, seed) {
    return text.split('').map(char => String.fromCharCode(char.charCodeAt(0) - seed)).join('');
}
