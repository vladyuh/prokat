var catToggle = document.querySelectorAll('.catalog-cat__section .toggle');

catToggle.forEach(function (el){
    el.addEventListener('click', function (){
        var active =  document.querySelector('.catalog-cat__section.is-active');
        if(active && active !== el.parentElement){
            active.classList.remove('is-active');
        }
        el.parentElement.classList.toggle('is-active');
    })
})