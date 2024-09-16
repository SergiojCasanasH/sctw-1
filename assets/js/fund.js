$(document).ready(function () {
    var backgroundImages = [
        "assets/img/fund/1.webp",
        "assets/img/fund/3.webp"
    ];
    var currentImageIndex = 0;
    var imageChangeInterval = 6000; // Intervalo en milisegundos
    var transitionDuration = 750; // Duración de la transición en milisegundos

    function changeBackgroundImage() {
        var newImageUrl = backgroundImages[currentImageIndex];
        // Aplicar transición CSS para suavizar el cambio de imagen
        $("#parallax").css({
            "transition": "background-image " + (transitionDuration / 1000) + "s ease-in-out",
            "background-image": "url('" + newImageUrl + "')"
        });

        // Detectar el brillo de la nueva imagen
        detectImageBrightness(newImageUrl);

        // Actualizar el índice para la siguiente imagen
        currentImageIndex = (currentImageIndex + 1) % backgroundImages.length;
    }

    function detectImageBrightness(imageUrl) {
        const image = new Image();
        image.src = imageUrl;

        image.onload = function () {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');

            canvas.width = image.width;
            canvas.height = image.height;

            ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

            let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            let totalBrightness = 0;

            for (let i = 0; i < imgData.data.length; i += 4) {
                let r = imgData.data[i];
                let g = imgData.data[i + 1];
                let b = imgData.data[i + 2];

                let brightness = (r * 0.299 + g * 0.587 + b * 0.114);
                totalBrightness += brightness;
            }

            let averageBrightness = totalBrightness / (imgData.data.length / 4);

            if (averageBrightness > 128) {
                $('.section-transparent').addClass('section-dark');
            } else {
                $('.section-transparent').removeClass('section-dark');
            }
        };
    }

    // Inicializar la imagen de fondo
    $("#parallax").css({
        "background-image": "url('" + backgroundImages[0] + "')"
    });

    // Detectar el brillo de la primera imagen
    detectImageBrightness(backgroundImages[0]);

    // Cambiar la imagen de fondo en intervalos
    setInterval(changeBackgroundImage, imageChangeInterval);

    // Ajustar la posición de la imagen al hacer scroll (efecto parallax)
    $(window).scroll(function () {
        var scrollTop = $(window).scrollTop();
        $("#parallax").css("background-position", "center " + (scrollTop * 0.5) + "px");
    });
});