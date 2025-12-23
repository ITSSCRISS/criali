/* script.js */

/* script.js */

// 1. Configuración de la FECHA DE INICIO
// Año: 2024, Mes: 3 (porque Abril es el mes 3 en código), Día: 19
const startDate = new Date(2024, 3, 19);

function updateTimer() {
    const now = new Date();
    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    const timerElement = document.getElementById("timer");
    if (timerElement) {
        timerElement.innerHTML =
            `${days} Días, ${hours} Horas, ${minutes} Minutos y ${seconds} Segundos juntos.`;
    }
}

// Actualizar cada segundo
setInterval(updateTimer, 1000);

// 2. Función para crear lluvia de corazones
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";

    // Posición horizontal aleatoria
    heart.style.left = Math.random() * 100 + "vw";

    // Duración de la animación aleatoria (entre 3s y 6s)
    heart.style.animationDuration = Math.random() * 3 + 3 + "s";

    // Tamaño aleatorio
    heart.style.fontSize = Math.random() * 20 + 10 + "px";

    document.getElementById("hearts-container").appendChild(heart);

    // Eliminar el corazón después de que termine la animación para no saturar la memoria
    setTimeout(() => {
        heart.remove();
    }, 6000);
}

// Crear un corazón cada 300 milisegundos
setInterval(createHeart, 300);

// --- LÓGICA DE CORAZONES (Si ya la tienes, mantenla, si no, aquí está) ---
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 2 + 3 + 's';
    document.getElementById('hearts-container').appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}
setInterval(createHeart, 300);

// --- NUEVA LÓGICA PARA LA GALERÍA (2024 / 2025) ---
function showYear(year, event) {
    // 1. Ocultar todas las secciones de año
    const sections = document.querySelectorAll('.year-section');
    sections.forEach(section => {
        section.classList.remove('active-year');
    });

    // 2. Mostrar la sección seleccionada
    const targetSection = document.getElementById('year-' + year);
    if (targetSection) {
        targetSection.classList.add('active-year');
    }

    // 3. Cambiar el color del botón (clase active)
    const buttons = document.querySelectorAll('.year-btn');
    buttons.forEach(btn => {
        btn.classList.remove('active');
    });

    // Si la función se llama desde un clic, 'event' no será nulo
    if (event && event.currentTarget) {
        event.currentTarget.classList.add('active');
    }
}

const music = document.getElementById('bg-music');

// Función para reproducir cuando ella toque la pantalla por primera vez
document.addEventListener('click', function() {
    music.play();
}, { once: true }); // El 'once: true' hace que solo se dispare la primera vez

// Función para el botón de control manual
function toggleMusic() {
    if (music.paused) {
        music.play();
        document.getElementById('music-control').innerHTML = '🎵';
    } else {
        music.pause();
        document.getElementById('music-control').innerHTML = '🔇';
    }
}

function typeWriter() {
    if (i < text.length) {
        if(text.charAt(i) === '\n') {
            container.innerHTML += '<br>';
        } else {
            container.innerHTML += text.charAt(i);
        }
        i++;
        setTimeout(typeWriter, 45);
    } else {
        // --- ESTO ES LO QUE DEBES AÑADIR ---
        setTimeout(() => {
            const photoContainer = document.getElementById("final-photo-container");
            photoContainer.style.display = "block"; // Hace visible el contenedor
            photoContainer.classList.add("fade-in-photo"); // Activa la animación
            // Hace un scroll suave hacia abajo para que vea la foto
            window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
        }, 1000); // Espera 1 segundo tras terminar de escribir
    }
}