//Remove animations on load
window.onload = function () {
    document.querySelector("body").classList.remove("page_noanimation");
};

//Check webp support
function testWebP(callback) {
    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
    if (support === true) {
        document.querySelector("body").classList.add("page_webp");
    } else {
        document.querySelector("body").classList.add("page_nowebp");
    }
});

//100vh hack
var vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty("--vh", "".concat(vh, "px"));
window.addEventListener("resize", function () {
    var vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", "".concat(vh, "px"));
});

//Browser-level image lazy-loading
if ("loading" in HTMLImageElement.prototype) {
    const images = document.querySelectorAll("img[loading=\"lazy\"]");
    for (var i = 0; i < images.length; i++) {
        images[i].src = images[i].dataset.src;
    }
} else {
    const script = document.createElement("script");
    script.src = "/js/lazysizes.min.js";
    document.body.appendChild(script);
}

window.addEventListener("scroll", function () {

    var headerTop = document.querySelector(".header-top");
    var headerBottom = document.querySelector(".header-bottom");

    console.log(headerTop.offsetHeight);

    if (window.pageYOffset > headerTop.offsetHeight) {
        headerBottom.classList.add("fixed");
    } else {
        headerBottom.classList.remove("fixed");
    }
});

//Load scripts after page load
window.addEventListener("load", function () {
    var select = document.createElement("script");
    select.src = "/js/select.min.js";
    select.onload = function () {
        const selectCustom = new customSelect({
            selector: "select"
        });
        selectCustom.init();
    };
    document.body.appendChild(select);
});

//open popup
var popupLink = document.querySelectorAll("a[data-popup]");
popupLink.forEach(function (element) {
    element.addEventListener("click", function (e) {
    });
});

//close popups
var popupClose = document.querySelectorAll(".popup");
popupClose.forEach(function (element) {
    element.addEventListener("click", function (e) {
        if (e.target !== e.currentTarget) {
        } else {
            window.location.href = "#close";
        }
    });
});

var catalogToggle = document.querySelector(".header-bottom__catalog");
catalogToggle.addEventListener("click", function () {
    var container = this.parentElement;
    var parent = container.parentElement;
    parent.classList.toggle("is-active");
    document.body.classList.toggle("page_dropdown");
});

var allCatalogToggle = document.querySelector(".header-bottom__dropdown-section .all-btn");
allCatalogToggle.addEventListener("click", function () {
    this.classList.toggle("is-active");
    if ((this).classList.contains("is-active")) {
        this.querySelector("span").textContent = this.getAttribute("data-title-hide");
    } else {
        this.querySelector("span").textContent = this.getAttribute("data-title-expand");
    }
    this.parentElement.querySelectorAll(".list-items__item.hidden").forEach(function (el) {
        el.classList.toggle("visible");
    });
});

var headerSearch = document.querySelectorAll(".header-bottom__search, .header-bottom__form-close");
headerSearch.forEach(function (el) {
    el.addEventListener("click", () => {
        document.querySelector(".header-bottom__form").classList.toggle("is-active");
    });
});

var scrollBtn = document.querySelector(".scroll-top");
scrollBtn.addEventListener("click", () => {
    window.scrollTo(0, 0);
});

function scrollTop() {
    if (window.pageYOffset > 0) {
        this.document.querySelector(".scroll-top").classList.add("is-active");
    } else {
        this.document.querySelector(".scroll-top").classList.remove("is-active");
    }
}

scrollTop();

document.addEventListener("scroll", function () {
    scrollTop();
});

function appendMore() {

    var template = 
        "<div class=\"catalog-more\" data-title-expand=\"Показать все\" data-title-hide=\"Скрыть\">" +
        "<span>Показать все</span>\n" +
        "<svg width=\"20\" height=\"20\">\n" +
        "<use xlink:href=\"/img/sprites/sprite.svg#ic_chevron-down\"></use>\n" +
        "</svg>\n" +
        "</div>";

    function clickHandler(el){
        var parent = el.parentNode;
        parent.querySelectorAll('li.hidden').forEach(function (em){
            em.classList.toggle('visible')
        })

        el.classList.toggle('is-active');
        if (el.classList.contains("is-active")) {
            el.querySelector("span").textContent = el.getAttribute("data-title-hide");
        } else {
            el.querySelector("span").textContent = el.getAttribute("data-title-expand");
        }

    }

    var headerCatalog = document.querySelectorAll(".header-bottom__dropdown .list-items__item");
    if (headerCatalog.length) {
        headerCatalog.forEach(function (el){
            var length = el.querySelectorAll(".list-items__submenu li").length;
            if (length > 5) {
                var more = createElementFromHTML(template);
                more.addEventListener('click', function (){
                    clickHandler(this);
                })
                el.appendChild(more);
            }
        });        
    }

    var mainCatalog = document.querySelectorAll(".main-catalog__item");
    if (mainCatalog.length) {
        mainCatalog.forEach(function (el){
            var length = el.querySelectorAll(".main-catalog__submenu li").length;
            if (length > 5) {
                var more = createElementFromHTML(template);
                more.addEventListener('click', function (){
                    clickHandler(this);
                })
                el.appendChild(more);
            }
        });
    }

}

appendMore();

function createElementFromHTML(htmlString) {
    var div = document.createElement('div');
    div.innerHTML = htmlString.trim();
    return div.firstChild;
}
