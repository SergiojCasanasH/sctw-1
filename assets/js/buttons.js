// Wait for the DOM to be fully loaded
window.onload = function () {
    // Obtener los botones
    const unoBtn = document.getElementById('uno-btn');
    const dosBtn = document.getElementById('dos-btn');

    // Obtener los divs por clase
    const unoDivs = document.querySelectorAll('.uno');
    const dosDivs = document.querySelectorAll('.dos');

    // Función para mostrar solo los divs de "uno" o "dos"
    function showOnly(selectedClass) {
        // Ocultar todos los divs
        unoDivs.forEach(div => div.classList.add('hidden'));
        dosDivs.forEach(div => div.classList.add('hidden'));

        // Mostrar los divs seleccionados
        selectedClass.forEach(div => div.classList.remove('hidden'));
    }

    // Mostrar "uno" al cargar la página
    showOnly(unoDivs); // Mostrar los divs "uno"

    // Asignar eventos a los botones si existen
    if (unoBtn) {
        unoBtn.addEventListener('click', function () {
            showOnly(unoDivs);
        });
    }

    if (dosBtn) {
        dosBtn.addEventListener('click', function () {
            showOnly(dosDivs);
        });
    }
};
