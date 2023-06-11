// Navigation behavior
window.addEventListener("scroll", navBlur);
window.addEventListener('resize', navBlur);
function navBlur () {
    var nav = document.querySelector("nav");
    var windowWidth = window.innerWidth;
    nav.classList.toggle("low", window.scrollY > 100);
    nav.classList.toggle("Mlow", windowWidth <= 1000 && window.scrollY > 100);

    var log = document.querySelector(".logo");
    log.classList.toggle("low", window.scrollY > 200);
};

// Window Width observer
window.addEventListener('DOMContentLoaded', updateWidth);
window.addEventListener('resize', updateWidth);
function updateWidth () {
    var devW = document.getElementById('devw');
    var windowWidth = window.innerWidth;
  
    devW.textContent = 'Width: ' + windowWidth + 'px';
};
// Window Scroll observer
window.addEventListener('DOMContentLoaded', updateScroll);
window.addEventListener('scroll', updateScroll);
function updateScroll () {
    var devW = document.getElementById('devs');
  
    devW.textContent = 'Scroll: ' + window.scrollY + ' Y';
};

// Jump scrolling
function scrollToSection(event) {
    event.preventDefault();
    const target = event.target.getAttribute("href");
    document.querySelector(target).scrollIntoView({
      behavior: "smooth",
    });
}
const navLinks = document.querySelectorAll("nav a");
navLinks.forEach(function (link) {
    link.addEventListener("click", scrollToSection);
});

// Left Right Button
document.querySelector(".left").addEventListener("click",() => {
    document.querySelector(".gallery").scrollBy(-1,0);

});
document.querySelector(".right").addEventListener("click",() => {
    document.querySelector(".gallery").scrollBy(1,0);
});

// Debug outline (CTRL + Space)
var isDev = false;
var bhv = document.getElementById('behavior');
var els = document.querySelectorAll('*');
document.addEventListener('keydown', (event)=> {
    if (event.ctrlKey && event.code === 'Space') {
        if (isDev){
            els.forEach(function(el) {
                el.classList.remove("dev")
            })
            bhv.style.opacity = 0;
            isDev = false;
        } else {
            els.forEach(function(el) {
                el.classList.add("dev")
            })
            bhv.style.opacity = 1;
            isDev = true;
        }
        event.preventDefault();
    }
});

// Surpress Inspect
document.addEventListener('contextmenu', function(e) {
    if(!isDev){
        e.preventDefault();
        return false;
    }
});
document.onkeydown = function(e) {
    if(event.keyCode == 123) {
    return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)){
    return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)){
    return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)){
        return false;
        }
    if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)){
    return false;
    }
};
