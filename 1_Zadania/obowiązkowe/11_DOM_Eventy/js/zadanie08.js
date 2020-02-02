document.addEventListener("DOMContentLoaded", function () {
    const windowWidth = document.getElementById('windowWidth');
    
    const windowHeight = document.getElementById('windowHeight');

    windowWidth.innerHTML = window.innerWidth;

    windowHeight.innerHTML = window.innerHeight;

    window.addEventListener("resize", function () {
        windowWidth.innerHTML = window.innerWidth;
        windowHeight.innerHTML = window.innerHeight;
    })
})