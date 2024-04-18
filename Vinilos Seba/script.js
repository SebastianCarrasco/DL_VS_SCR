
let currentIndex = 0;
const images = document.querySelectorAll('.carousel-images img');
const totalImages = images.length;

// Inicializa todas las imágenes como no activas y solo la primera como activa
function initCarousel() {
    images.forEach(img => {
        img.classList.remove('active');
        img.style.display = 'none'; // Oculta todas las imágenes
    });
    images[0].classList.add('active');
    images[0].style.display = 'block'; // Muestra solo la primera imagen
}

function cycleImages() {
    images[currentIndex].classList.remove('active');
    images[currentIndex].style.display = 'none'; // Oculta la imagen actual

    // Incrementa el índice para mostrar la siguiente imagen
    currentIndex = (currentIndex + 1) % totalImages;
    images[currentIndex].classList.add('active');
    images[currentIndex].style.display = 'block'; // Muestra la siguiente imagen
}

// Inicializar el carrusel y establecer el intervalo
document.addEventListener('DOMContentLoaded', () => {
    initCarousel();
    setInterval(cycleImages, 3000); // Cambia la imagen cada 3000 milisegundos (3 segundos)
});

document.addEventListener('DOMContentLoaded', function () {
    // Obtener el modal
    var modal = document.getElementById("viniloModal");

    // Obtener el elemento <span> que cierra el modal
    var span = document.getElementsByClassName("close")[0];

    // Función para abrir el modal con la imagen correcta
    window.abrirModal = function(src) {
        modal.style.display = "block";
        document.getElementById("modalImage").src = src;
    }

    // Función para cerrar el modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // Función para comprar el vinilo (lógica de compra no incluida aquí)
    window.comprarVinilo = function() {
        alert("Proceso de compra en construcción.");
    }

    // Cierra el modal si el usuario hace clic fuera de él
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});

