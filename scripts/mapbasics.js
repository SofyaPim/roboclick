

ymaps.ready(init);

function init () {
    var myMap = new ymaps.Map('map', {
            center: [55.749763, 37.537875],
            zoom: 16
        }),

        myPlacemark1 = new ymaps.Placemark([55.749834, 37.537800], {
            balloonContent: 'Большая иконка'
        }, {
            iconLayout: 'default#image',
            iconImageClipRect: [[69,0], [97, 46]],
            iconImageHref: 'https://sandbox.api.maps.yandex.net/examples/ru/2.1/icon_sprites/images/sprite.png',
            iconImageSize: [35, 63],
            iconImageOffset: [-35, -63],
        });

    myMap.geoObjects.add(myPlacemark1);
}
