// Obtener elementos del DOM
const inputText = document.getElementById('input-text');
const outputText = document.getElementById('output-text');
const encryptBtn = document.getElementById('encrypt-btn');
const decryptBtn = document.getElementById('decrypt-btn');
const copyBtn = document.getElementById('copy-btn');
const seedInput = document.getElementById('seed-input');
const seedContainer = document.getElementById('seed-container');
const encryptionImg = document.getElementById('encryption-img');
const copiedMessage = document.getElementById('copied-message');

let currentSeed = ''; // Mantener la misma semilla durante la sesión

// Función para encriptar el texto
function encrypt(text, seed) {
    let encryptedText = '';
    for (let i = 0; i < text.length; i++) {
        let charCode = text.charCodeAt(i) + parseInt(seed[i % seed.length]);
        encryptedText += String.fromCharCode(charCode);
    }
    return encryptedText;
}

// Función para desencriptar el texto
function decrypt(text, seed) {
    let decryptedText = '';
    for (let i = 0; i < text.length; i++) {
        let charCode = text.charCodeAt(i) - parseInt(seed[i % seed.length]);
        decryptedText += String.fromCharCode(charCode);
    }
    return decryptedText;
}

// Validación de texto
function validateText(text) {
    const regex = /^[a-z ]+$/;
    return regex.test(text);
}

// Event Listener para encriptar
encryptBtn.addEventListener('click', () => {
    const text = inputText.value;
    if (validateText(text)) {
        if (!currentSeed) {
            currentSeed = Math.floor(Math.random() * 1000000).toString();
        }
        const encryptedText = encrypt(text, currentSeed);
        outputText.value = encryptedText;
        seedInput.value = currentSeed;
        copyBtn.style.display = 'block';
        seedContainer.style.display = 'block';
        encryptionImg.style.display = 'none';
    } else {
        alert('El texto solo puede contener letras minúsculas y sin acentos.');
    }
});

// Event Listener para desencriptar
decryptBtn.addEventListener('click', () => {
    const text = outputText.value;
    const seed = seedInput.value || currentSeed;
    if (seed !== '') {
        const decryptedText = decrypt(text, seed);
        inputText.value = decryptedText;
    } else {
        alert('Por favor, introduce la semilla para desencriptar.');
    }
});

// Event Listener para copiar texto
copyBtn.addEventListener('click', () => {
    outputText.select();
    document.execCommand('copy');
    copiedMessage.style.display = 'block';
    setTimeout(() => {
        copiedMessage.style.display = 'none';
    }, 2000); // Mensaje desaparece después de 2 segundos
});
