// Selecciona el formulario y el modal
const formulario = document.getElementById('contactoForm');
const modal = document.getElementById('modalConfirmacion');
const closeModal = document.getElementById('closeModal');

// Función para mostrar el modal
function mostrarModal() {
    modal.style.display = 'block';
}

// Función para ocultar el modal y redirigir a la sección de inicio
function cerrarModal() {
    modal.style.display = 'none';
    window.location.href = "#inicio";
}

// Escucha el evento 'submit' del formulario
formulario.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe y recargue la página
    mostrarModal(); // Muestra el modal
    setTimeout(cerrarModal, 3000); // Cierra el modal y redirige después de 3 segundos
});

// Permite cerrar el modal al hacer clic en la "x"
closeModal.addEventListener('click', cerrarModal);
