const form = document.getElementById('login-form');
const nombreInput = document.getElementById('nombre');
const cumpleanosSection = document.getElementById('cumpleanos');

// Lista de nombres válidos con canciones y audios de mensaje personalizados
const nombresYAudios = {
  'sharon': {
    cancion: 'canción1.m4a',
    mensaje: 'mensaje1.mp3'
  },
  'puntitos': {
    cancion: 'cancion2.m4a',
    mensaje: 'mensaje2.m4a'
  },
  'mi reina': {
    cancion: 'cancion3.m4a',
    mensaje: 'mimujer.m4a'
  },
  'mi mujer': {
    cancion: 'cancion4.m4a',
    mensaje: 'mensaje4.m4a'
  },
  'mi esposa': {
    cancion: 'cancion5.m4a',
    mensaje: 'mensaje5.m4a'
  }
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const nombre = nombreInput.value.toLowerCase();
  
  if (nombresYAudios[nombre]) { // Verifica si el nombre tiene canciones y mensajes asociados
    form.style.display = 'none'; // Oculta el formulario
    cumpleanosSection.style.display = 'block'; // Muestra el mensaje de cumpleaños
    
    // Efecto de transición para el mensaje de cumpleaños
    cumpleanosSection.style.opacity = 0;
    setTimeout(() => {
      cumpleanosSection.style.transition = 'opacity 1s';
      cumpleanosSection.style.opacity = 1;
    }, 50);

    // Reproducir la canción y mensaje personalizados para cada nombre
    const audioCancion = new Audio(nombresYAudios[nombre].cancion);
    const audioMensaje = new Audio(nombresYAudios[nombre].mensaje);

    // Verificar si los archivos se cargan correctamente
    audioCancion.addEventListener('error', (e) => {
      console.log("Error al cargar el archivo de la canción", e);
    });

    audioMensaje.addEventListener('error', (e) => {
      console.log("Error al cargar el archivo de mensaje", e);
    });

    // Cargar los archivos de audio antes de reproducirlos
    audioCancion.load();
    audioMensaje.load();

    // Cuando termine la canción, reproduce el mensaje personalizado
    audioCancion.addEventListener('ended', () => {
      console.log("Canción terminada, reproduciendo mensaje...");
      audioMensaje.play();
    });

    // Inicia la canción
    audioCancion.play();
    audioCancion.loop = false; // Sin bucle para permitir que termine y reproduzca el mensaje

  } else {
    alert('Nombre incorrecto');
  }
});
