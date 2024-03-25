// Selecciona todas las crucetas
const dPads = document.querySelectorAll('.d-pad');

// Itera sobre cada cruceta
dPads.forEach(dPad => {
    const buttons = dPad.querySelectorAll('button'); // Selecciona todos los botones dentro de la cruceta
    const screen = dPad.querySelector('.screen'); // Selecciona el panel de pantalla dentro de la cruceta

    // Itera sobre cada botón de la cruceta
    buttons.forEach(button => {
    // Agrega un evento touchstart para activar el botón y mostrar la dirección en el panel de pantalla
    button.addEventListener('touchstart', () => {
        button.classList.add('active'); // Agrega la clase 'active' al botón
        const direction = button.getAttribute('data-direction'); // Obtiene la dirección del botón
        screen.textContent = direction; // Muestra la dirección en el panel de pantalla
    });

    // Agrega un evento touchend para desactivar el botón y borrar la dirección del panel de pantalla
    button.addEventListener('touchend', () => {
        button.classList.remove('active'); // Remueve la clase 'active' del botón
        screen.textContent = ""; // Borra la dirección del panel de pantalla
    });
    });
});