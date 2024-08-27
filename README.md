# Proyecto: Encriptador de Texto

## 📝 Descripción
¡Bienvenido a nuestro encriptador de texto! Este proyecto es una herramienta divertida y útil que te permite encriptar y desencriptar mensajes de manera sencilla. La idea es asegurar tus mensajes usando un método de encriptación que utiliza una semilla (seed) generada aleatoriamente. Puedes experimentar con diferentes semillas para ver cómo cambian los resultados. También tenemos una semilla especial llamada "oracle" que aplica reglas de encriptación únicas solo para reproducir el ejemplo del desafío de Oracle One. Solo se aceptan números de 6 dígitos como semillas válidas, ¡así que prueba introducir lo que quieras!

## 🚀 Funcionalidades
- **Encriptar Texto:**
  - Convierte tu mensaje en texto encriptado.
  - Solo se aceptan letras minúsculas y espacios. Si introduces algo no permitido, te lo haremos saber con un mensaje de advertencia.
  - Genera automáticamente una semilla única de 6 dígitos para cada sesión, que se usa para encriptar el texto.
  - Puedes cambiar la semilla para experimentar con diferentes resultados.

- **Desencriptar Texto:**
  - Recupera el mensaje original introduciendo la semilla que usaste para encriptarlo.
  - Si introduces una semilla incorrecta, el texto desencriptado no tendrá sentido.
  - Maneja errores si la semilla ingresada no es válida.

- **Copiar al Portapapeles:**
  - Copia el texto encriptado al portapapeles con solo un clic.
  - Aparece un mensaje de confirmación cuando el texto se copia, que desaparece automáticamente después de 2 segundos.

- **Interfaz de Usuario:**
  - La página está diseñada para adaptarse a diferentes tamaños de pantalla, desde computadoras de escritorio hasta móviles.
  - Muestra una animación GIF mientras no hay texto encriptado. Esta imagen desaparece y se reemplaza por el texto encriptado cuando haces clic en "Encriptar".
  - Ofrecemos instrucciones claras y mensajes de advertencia para ayudarte a usar la herramienta sin problemas.

## 🛠️ Requisitos
- **Tecnologías Usadas:**
  - HTML5, CSS3, JavaScript. (lo usual y en ese orden)
  - Utiliza la API del portapapeles de JavaScript para copiar y pegar texto. (lo automatico al apretar cosas)
  - Incluye una imagen GIF para las animaciones. (podía ser otro formato pero es lo que hay)

## 📥 Instalación
1. Clona este repositorio con: `git clone https://github.com/Petteko/encriptadorJS.git`
2. Abre el archivo `index.html` en tu navegador web para comenzar a usar la herramienta.

## 🚀 Uso
1. Escribe el texto que quieres encriptar en el área designada.
2. Haz clic en "Encriptar" para obtener el texto encriptado y una semilla.
3. Usa el botón "Copiar" para guardar el texto encriptado en tu portapapeles.
4. Si quieres probar diferentes encriptaciones, puedes cambiar la semilla.
5. Para desencriptar un mensaje, introduce la semilla y el texto encriptado.
6. Haz clic en "Desencriptar" para recuperar el mensaje original.

¡Esperamos que te caiga en gracia esta herramienta y encuentres útil su funcionalidad para inspirar tus proyectos!

---