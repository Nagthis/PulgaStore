// RELOJ
function actualizarReloj() {
    const ahora = new Date();
    
    const hora = ahora.toLocaleTimeString('es-CL', {
        hour: '2-digit',
        minute: '2-digit',
        timeZone: 'America/Santiago'
    });
    
    const fecha = ahora.toLocaleDateString('es-CL', {
        day: 'numeric',
        month: 'short',
        timeZone: 'America/Santiago'
    });
    
    const reloj = document.getElementById('reloj');
    const fechaElement = document.getElementById('fecha');
    
    if (reloj) reloj.textContent = hora;
    if (fechaElement) fechaElement.textContent = fecha;
}

// VALIDACIÓN DEL FORMULARIO
function validar() {
    const nombre = document.getElementById('nombre').value.trim();
    const apellido = document.getElementById('apellido').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();
    const mensajeError = document.getElementById('mensaje-error');
    const textoError = document.getElementById('texto-error');
    
    // Verificar campos vacíos
    if (!nombre) {
        mostrarError('Por favor, ingresa tu nombre.');
        return false;
    }
    
    if (!apellido) {
        mostrarError('Por favor, ingresa tu apellido.');
        return false;
    }
    
    if (!email) {
        mostrarError('Por favor, ingresa tu correo electrónico.');
        return false;
    }
    
    if (!mensaje) {
        mostrarError('Por favor, escribe un mensaje.');
        return false;
    }
    
    // Si todo está bien, ocultar error
    ocultarError();
    return true;
    
    function mostrarError(texto) {
        textoError.textContent = texto;
        mensajeError.style.display = 'block';
        mensajeError.scrollIntoView({ behavior: 'smooth' });
    }
    
    function ocultarError() {
        mensajeError.style.display = 'none';
    }
}

// INICIALIZACIÓN

document.addEventListener('DOMContentLoaded', function() {
    // Inicializar reloj
    actualizarReloj();
    setInterval(actualizarReloj, 1000);
    
    // Agregar validación al formulario
    const formulario = document.querySelector('form');
    if (formulario) {
        formulario.addEventListener('submit', function(e) {
            e.preventDefault();
            
            if (validar()) {
                alert('Formulario válido. Enviando datos...');
            }
        });
    }
});