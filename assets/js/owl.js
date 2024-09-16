$(document).ready(function () {
    var owl = $(".owl-carousel").owlCarousel({
        dots: false,
        loop: true,
        margin: 10,
        center: true,
        responsive: {
            0: {
                items: 1,
                autoWidth: true,
                nav: false
            },
            600: {
                items: 2,
                autoWidth: false,
                nav: true,
                navText: [
                    '<div class="d-flex justify-content-center align-items-center nav-container">' +
                    '<button class="btn btn-light rounded-circle border-2 p-0 border-secondary-sctw nav-button">' +
                    '<span>' +
                    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" class="svg-icon">' +
                    '<path d="m10 15l9 9l1.4-1.5L13 15l7.4-7.5L19 7z"/></svg>' +
                    '</span>' +
                    '</button>' +
                    '</div>',
                    '<div class="d-flex justify-content-center align-items-center nav-container">' +
                    '<button class="btn btn-light rounded-circle border-2 p-0 border-secondary-sctw nav-button">' +
                    '<span>' +
                    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" class="svg-icon">' +
                    '<path d="M13 7L11.6 8.5L19 15l-7.4 7.5L13 23l9-9z"/></svg>' +
                    '</span>' +
                    '</button>' +
                    '</div>'
                ]
            },
            1000: {
                items: 5,
                autoWidth: false,
                nav: true,
                navText: [
                    '<div class="d-flex justify-content-center align-items-center nav-container">' +
                    '<button class="btn btn-light rounded-circle border-2 p-0 border-secondary-sctw nav-button">' +
                    '<span>' +
                    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" class="svg-icon">' +
                    '<path d="m10 15l9 9l1.4-1.5L13 15l7.4-7.5L19 7z"/></svg>' +
                    '</span>' +
                    '</button>' +
                    '</div>',
                    '<div class="d-flex justify-content-center align-items-center nav-container">' +
                    '<button class="btn btn-light rounded-circle border-2 p-0 border-secondary-sctw nav-button">' +
                    '<span>' +
                    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" class="svg-icon">' +
                    '<path d="M13 7L11.6 8.5L19 15l-7.4 7.5L13 23l9-9z"/></svg>' +
                    '</span>' +
                    '</button>' +
                    '</div>'
                ]
            }
        }
    });

    owl.on('changed.owl.carousel', function (event) {
        $('.view-product-btn').hide(); // Hide all "View Product" buttons
        var currentItem = owl.find('.owl-item.active');
        currentItem.find('.view-product-btn').show(); // Show the button for the centred item
    });
});
