//Load scripts after page load
window.addEventListener("load", function () {
    var maps = document.createElement("script");
    maps.src = "https://api-maps.yandex.ru/2.1/?apikey=ecc88d2c-8730-483f-988c-8f68aedff62b&lang=ru_RU";
    maps.onload = function (){
        ymaps.ready(init);
        function init(){
            // Создание карты.
            var myMap = new ymaps.Map("map", {
                center: [60.057693, 30.382676],
                zoom: 17,
                controls: []
            });

            var myPlacemark = new ymaps.GeoObject({
                geometry: {
                    type: "Point",
                    coordinates: [60.057693, 30.382676]
                }
            });

            myMap.geoObjects.add(myPlacemark);

        }
    };
    document.body.appendChild(maps);
});