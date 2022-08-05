//Load scripts after page load
window.addEventListener("load", function () {
    var splide = document.createElement("script");
    splide.src = "/js/splide.min.js";
    splide.onload = initSliders;
    document.body.appendChild(splide);
});

function initSliders(){

    new Splide(".main-banner__slider", {
        perPage: 1,
        arrows: true,
        pagination: false,
        gap: 32,
        breakpoints: {
            829: {
                arrows: false,
                pagination: true,
            }
        }
    }).mount()

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

var mainCatalogToggle = document.querySelector('.main-catalog__all');
mainCatalogToggle.addEventListener('click', function (){
    this.classList.toggle('is-active');
    if((this).classList.contains('is-active')){
        this.querySelector('span').textContent = this.getAttribute('data-title-hide');
    }
    else{
        this.querySelector('span').textContent = this.getAttribute('data-title-expand');
    }
    this.parentElement.querySelectorAll('.main-catalog__item.hidden').forEach(function (el){
        el.classList.toggle('visible');
    })
})

var aboutMore = document.querySelector('.main-company__more');
aboutMore.addEventListener('click', function (){
    this.classList.toggle('is-active');
    if((this).classList.contains('is-active')){
        this.querySelector('span').textContent = this.getAttribute('data-title-hide');
    }
    else{
        this.querySelector('span').textContent = this.getAttribute('data-title-expand');
    }
    this.parentElement.querySelector('.main-company__text.hidden').classList.toggle('visible');
})