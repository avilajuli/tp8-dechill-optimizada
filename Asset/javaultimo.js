document.addEventListener("DOMContentLoaded", () => {
    
    
    const searchInput = document.querySelector(".search-input");
    if (searchInput) {
        searchInput.addEventListener("keypress", (event) => {
            if (event.key === "Enter" && searchInput.value.trim() !== "") {
                
                alert("Buscando productos relacionados con: " + searchInput.value);
                searchInput.value = "";
            }
        });
    }

    
    let cartCount = 0;
    const ctaButton = document.querySelector(".cta-button");
    const cartText = document.querySelector(".user-menu li:last-child .action-btn span");

    if (ctaButton && cartText) {
        ctaButton.addEventListener("click", (event) => {
            event.preventDefault();
            cartCount++;
            cartText.textContent = "Carrito (" + cartCount + ")";
        });
    }

    
    const header = document.querySelector(".main-header");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.classList.add("header-scrolled");
        } else {
            header.classList.remove("header-scrolled");
        }
    });

});