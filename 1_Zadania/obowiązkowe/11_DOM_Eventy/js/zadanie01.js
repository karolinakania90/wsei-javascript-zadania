document.addEventListener("DOMContentLoaded", function () {
    var menu = document.querySelector("#menu");
    var paragraf = document.querySelector("p");

    menu.classList.add("menu");
    paragraf.innerHTML = "A to jest paragraf w zadaniu 1";
})

// Po przeniesieniu tagu script do sekcji head kod nie wykonuje sie poprawnie
// ponieważ uruchamia się zaladowaniem calej strony.
// Dodanie kodu do eventlistenera spowoduje, że kod uruchomi się po załodowaniu strony