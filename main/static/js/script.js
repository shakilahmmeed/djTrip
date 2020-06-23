jQuery(document).ready(function ($) {
    "use strict";

    // SMART MENU
    $('#main-menu').smartmenus({
        subMenusSubOffsetX: 1,
        subMenusSubOffsetY: -8
    });

    // COUNTERUP
    $('.number').counterUp({
        delay: 10,
        time: 1000
    });

    // ISOTOPE
    var $grid = $('.grid').isotope({
        layoutMode: 'fitRows'
    });
    $('.filter').on('click', '.filter-item', function () {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({
            filter: filterValue
        });
    });

    // INTRO VIDEO
    $('.video-icon').magnificPopup({
        type: 'iframe',
        removalDelay: 300,
        mainClass: 'mfp-fade'
    });

    // OWL CAROUSEL
    $('#testimonial-item-wrapper').owlCarousel({
        loop: true,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            }
        }
    });
    $('.team-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        margin: 18,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            768: {
                items: 3
            },
            992: {
                items: 2
            },
            1200: {
                items: 3
            }
        }
    })

    $("#categories-slider").owlCarousel({
        margin: 30,
        responsive: {
            0: {
                items: 2
            },
            576: {
                items: 3
            },
            768: {
                items: 4
            },
            992: {
                items: 5
            }
        }
    });


    // DYNAMIC TITLE
    $(".header-title h1").text($("title").text());


    // MAP FOR CONTACT-2
    var mapId = $('#map');

    if(mapId.length > 0) {
        var map = L.map('map', {
            center: [20.0, 5.0],
            zoom: 2,
            attributionControl: false
        })
        L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: "Openstreetmap",
            subdomains: ['a', 'b', 'c']
        }).addTo(map);
        var markers = [{
                "name": "Silicon Valley",
                "lat": 37.3875,
                "lng": -122.0575
            },
            {
                "name": "Italy",
                "lat": 41.867132,
                "lng": 12.498889
            }
        ];
        for (var i = 0; i < markers.length; ++i) {
            L.marker([markers[i].lat, markers[i].lng])
                .bindPopup(markers[i].name)
                .addTo(map);
        }
    
        var map1 = L.map('map1', {
            center: [37.3875, -122.0575],
            zoom: 10,
            zoomControl: false,
            attributionControl: false
        })
        L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: "Openstreetmap",
            subdomains: ['a', 'b', 'c']
        }).addTo(map1);
    
        var map2 = L.map('map2', {
            center: [41.867132, 12.498889],
            zoom: 10,
            zoomControl: false,
            attributionControl: false
        })
        L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: "Openstreetmap",
            subdomains: ['a', 'b', 'c']
        }).addTo(map2);
    }

    $('.link-scroll').smoothScroll();
});