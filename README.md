# Proyecto: Encriptador de Texto

## Descripción
Este proyecto es un encriptador y desencriptador de texto basado en JavaScript, diseñado para simular la privacidad y seguridad de los mensajes. El sistema utiliza un método de encriptación simple que incorpora una semilla (seed) generada aleatoriamente. La semilla es esencial para la desencriptación y permite al usuario experimentar con diferentes valores para ver cómo afectan la encriptación.

## Funcionalidades
- **Encriptación de Texto:**
  - Permite encriptar un texto ingresado por el usuario.
  - Solo se permiten letras minúsculas y sin acentos. Si se ingresan caracteres no permitidos, se muestra una advertencia.
  - Genera una semilla única de 6 dígitos por sesión que se utiliza para encriptar el texto.
  - La semilla puede ser modificada por el usuario para probar diferentes encriptaciones.

- **Desencriptación de Texto:**
  - Permite desencriptar un mensaje encriptado introduciendo la semilla correspondiente.
  - Si la semilla ingresada es incorrecta, el mensaje desencriptado no tendrá sentido.
  - Maneja errores en caso de que no se ingrese una semilla válida.

- **Copiar al Portapapeles:**
  - El usuario puede copiar el mensaje encriptado al portapapeles mediante un botón.
  - Al copiar, se muestra un mensaje de confirmación que desaparece automáticamente después de 2 segundos.

- **Interfaz de Usuario:**
  - La página se adapta a diferentes tamaños de pantalla, incluyendo versiones de escritorio y móviles.
  - Al encriptar un mensaje, una animación de búsqueda (GIF) se muestra inicialmente. La imagen desaparece y se reemplaza por el texto encriptado al hacer clic en "Encriptar".
  - Instrucciones de uso claras y mensajes de advertencia para el usuario.

## Requisitos
- **Lenguajes y Tecnologías:**
  - HTML5, CSS3, JavaScript.
  - Uso de la API del portapapeles de JavaScript.
  - Gestión del DOM para manipulación de elementos HTML.
  - Uso de una imagen GIF para animaciones.

## Instalación
1. Clona este repositorio: `git clone https://github.com/Petteko/encriptadorJS.git`
2. Abre el archivo `index.html` en tu navegador.

## Uso
1. Introduce el texto que deseas encriptar.
2. Haz clic en "Encriptar" para generar el texto encriptado y la semilla.
3. Copia el texto encriptado usando el botón "Copiar".
4. Modifica la semilla si deseas experimentar con diferentes encriptaciones.
5. Introduce la semilla y el texto encriptado para desencriptar el mensaje.
6. Haz clic en "Desencriptar" para recuperar el mensaje original.
