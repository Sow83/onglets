// Sélection des élément requis
const tabs = document.querySelectorAll(".tab");
const text = document.querySelectorAll(".tab-text");
// Quand on clique sur un onglet, il rajoute ou supprime la classe active
// pour l'onglet lui-meme et pour le texte
tabs.forEach(tab => {
    tab.addEventListener("click", function (e) {
        if (!tab.classList.contains("active")) {
            tab.classList.add("active");
        }
        var id = tab.getAttribute("data-id");

        tabs.forEach(tab => {
            if (tab.getAttribute("data-id") !== id) {
                tab.classList.remove("active");
            }
        });       
        text.forEach(textContent => {
            if (textContent.getAttribute("data-id") === id) {
                textContent.classList.add("active");
            } else {
                textContent.classList.remove("active");
            }
        });
    })
});
