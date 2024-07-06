document.addEventListener("DOMContentLoaded", function() {
    const footer = document.getElementById("footer");

    const footerContent = document.createElement("p");
    footerContent.textContent = "Derechos reservados © 2024";

    footer.appendChild(footerContent);
});