let seed = null;

document.getElementById('encrypt-btn').addEventListener('click', function () {
    const inputText = document.getElementById('input-text').value;

    // Validación de caracteres permitidos
    if (!/^[a-z\s]*$/.test(inputText)) {
        alert('Solo se permiten letras minúsculas y sin acentos.');
        return;
    }

    // Generar semilla si no existe y se necesita
    if (document.getElementById('seed-input').value.trim() === '') {
        seed = Math.floor(Math.random() * 900000) + 100000; // Semilla de 6 dígitos
        document.getElementById('seed-input').value = seed;
    } else {
        seed = parseInt(document.getElementById('seed-input').value);
    }

    // Encriptar con la semilla actual
    const encryptedText = encrypt(inputText, seed);

    // Mostrar texto encriptado y ocultar GIF
    document.getElementById('output-text').textContent = encryptedText;
    document.getElementById('search-gif').style.display = 'none';
    document.getElementById('copy-btn').style.display = 'inline-block';
});

document.getElementById('decrypt-btn').addEventListener('click', function () {
    const inputText = document.getElementById('input-text').value;
    const currentSeed = parseInt(document.getElementById('seed-input').value);

    if (isNaN(currentSeed)) {
        alert('Debe ingresar una semilla válida.');
        return;
    }

    // Intentar desencriptar
    const decryptedText = decrypt(inputText, currentSeed);
    document.getElementById('input-text').value = decryptedText;
});

document.getElementById('seed-input').addEventListener('input', function () {
    seed = parseInt(this.value);
    if (isNaN(seed)) {
        seed = null;
    }
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
