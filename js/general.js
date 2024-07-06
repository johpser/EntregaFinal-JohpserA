document.addEventListener("DOMContentLoaded", function() {
    const header = document.getElementById("header");

    
    const navbar = document.createElement("div");
    navbar.classList.add("navbar");

    const navContainer = document.createElement("div");
    navContainer.classList.add("nav-container");

    const logoContainer = document.createElement("div");
    logoContainer.classList.add("logo-container");

    const logo = document.createElement("img");
    logo.src = "logo.png"; 
    logo.alt = "Logo";
    logo.classList.add("logo");

    const navLinks = document.createElement("ul");
    navLinks.classList.add("nav-links");

    const links = [
        { text: "Inicio", href: "index.html" },
        { text: "Biografia", href: "biografia.html" },
        { text: "Servicios", href: "servicios.html" },
        { text: "Contacto", href: "contacto.html" }
    ];

    links.forEach(link => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = link.href;
        a.textContent = link.text;
        li.appendChild(a);
        navLinks.appendChild(li);
    });

    logoContainer.appendChild(logo);
    navContainer.appendChild(logoContainer);
    navContainer.appendChild(navLinks);
    navbar.appendChild(navContainer);
    header.appendChild(navbar);

   
    const toggleButton = document.getElementById("toggle-button");
    toggleButton.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });
});