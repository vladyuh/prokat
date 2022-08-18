//Load scripts after page load
window.addEventListener("load", function () {
    var splide = document.createElement("script");
    splide.src = "/js/splide.min.js";
    splide.onload = initSliders;
    document.body.appendChild(splide);
});

function initSliders(){

    new Splide(".main-rent__slider", {
        perPage: 4,
        arrows: false,
        pagination: false,
        gap: 24,
        breakpoints: {
            1153: {
                perPage: 3,
            },
            1023: {
                arrows: false,
            },
            829: {
                perPage: 2,
            },
            577: {
                perPage: 1,
                gap: 16
            }
        }
    }).mount()

}


var count = document.querySelectorAll('.product-info__rent-form .input-number__controls');
count.forEach(function (el){
    el.addEventListener('click', function (){

        var value = el.parentElement.querySelector('input[type="number"]').value;
        var button = document.querySelector('.product-info__rent-form button');

        if(Number(value) < 2) {
            button.textContent = "заказать на 2000 ₽";
        }
        else if(Number(value) >= 2 && Number(value) < 8){
            button.textContent = "заказать на 1900 ₽";
        }
        else if(Number(value) >= 8 && Number(value) < 15){
            button.textContent = "заказать на 1700 ₽";
        }
        else if(Number(value) >= 15) {
            button.textContent = "заказать на 1500 ₽";
        }

    })
});

var tabToggle = document.querySelectorAll('.info-block__toggle');
var tabToggleActive;
var tabContentActive;

tabToggle.forEach(function (el){
    el.addEventListener('click', function (){

        var tabIndex = el.getAttribute('data-tab');

        tabToggleActive = document.querySelector('.info-block__toggle.is-active');
        tabToggleActive.classList.remove('is-active');

        tabContentActive = document.querySelector('.info-block__content.is-active');
        tabContentActive.classList.remove('is-active');

        el.classList.add('is-active');

        document.querySelector('.info-block__content[data-tab="'+tabIndex+'"]').classList.add('is-active');

    })
})
