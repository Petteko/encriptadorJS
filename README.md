# Proyecto: Encriptador de Texto

## Descripción
Este proyecto es un encriptador y desencriptador de texto basado en JavaScript, diseñado para garantizar la privacidad y seguridad de los mensajes. El sistema utiliza un método de encriptación que incorpora una semilla (seed) generada aleatoriamente, la cual es necesaria para desencriptar correctamente el mensaje.

## Funcionalidades
- **Encriptación de Texto:**
  - Permite encriptar un texto ingresado por el usuario.
  - El texto encriptado es mostrado en un cuadro de presentación.
  - Solo se permiten letras minúsculas y sin acentos.
  - Genera una semilla única por sesión que es necesaria para desencriptar el mensaje.

- **Desencriptación de Texto:**
  - Solicita la semilla al intentar desencriptar un mensaje encriptado.
  - Si la semilla ingresada es incorrecta, el mensaje desencriptado no tendrá sentido.
  - Manejo de errores en caso de que no se ingrese ninguna semilla.

- **Copiar al Portapapeles:**
  - El usuario puede copiar el mensaje encriptado al portapapeles mediante un botón.
  - Al copiar, se muestra un mensaje de confirmación que desaparece automáticamente.

- **Interfaz de Usuario:**
  - La página se adapta a diferentes tamaños de pantalla, incluyendo versiones de escritorio y móviles.
  - Al encriptar un mensaje, se muestra la semilla en lugar de una animación.
  - Instrucciones de uso claras y mensajes de advertencia para el usuario.

## Requisitos
- **Lenguajes y Tecnologías:**
  - HTML5, CSS3, JavaScript.
  - Uso de la API del portapapeles de JavaScript.
  - Gestión del DOM para manipulación de elementos HTML.
  - Uso de la librería Lottie para animaciones JSON.

## Instalación
1. Clona este repositorio: `git clone https://github.com/tuusuario/encriptador-texto.git`
2. Abre el archivo `index.html` en tu navegador.

## Uso
1. Introduce el texto que deseas encriptar.
2. Haz clic en "Encriptar" para generar el texto encriptado y la semilla.
3. Copia el texto encriptado usando el botón "Copiar".
4. Puedes desencriptar el texto introduciendo la misma semilla y haciendo clic en "Desencriptar".