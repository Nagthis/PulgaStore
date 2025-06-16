function actualizarReloj() {
    const ahora = new Date();
    
    const hora = ahora.toLocaleTimeString('es-CL', {
        hour: '2-digit',
        minute: '2-digit',
        timeZone: 'America/Santiago'
    });
    
    const fecha = ahora.toLocaleDateString('es-CL', {
        day: 'numeric',
        month: 'long',
        timeZone: 'America/Santiago'
    });
    
    const reloj = document.getElementById('reloj');
    const fechaElement = document.getElementById('fecha');
    
    if (reloj) reloj.textContent = hora;
    if (fechaElement) fechaElement.textContent = fecha;
}

document.addEventListener('DOMContentLoaded', function() {
    actualizarReloj();
    setInterval(actualizarReloj, 1000);
});