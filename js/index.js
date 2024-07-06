document.addEventListener("DOMContentLoaded", function() {
    const sectIndex = document.getElementById("sectIndex");

    
    const divIndex = document.createElement("div");
    divIndex.classList.add("tituloIndex");

    const textIndex = document.createElement("h1");
    textIndex.textContent = "TU BIENESTAR ES NUESTRA PRIORIDAD";

    divIndex.appendChild(textIndex);
    sectIndex.appendChild(divIndex);

    const banner2 = document.createElement("div");
    banner2.classList.add("banner2");

    const texbanner2 = document.createElement("h2");
    texbanner2.textContent = "Profesional";

    const texbanner3 = document.createElement("h2");
    texbanner3.textContent = "Psicólogo clínico de la Salud e Investigador";

    banner2.appendChild(texbanner2);
    banner2.appendChild(texbanner3);
    divIndex.appendChild(banner2);

   
    const sectIndex2 = document.getElementById("sectIndex2");

    const divIndex2 = document.createElement("div");
    divIndex2.classList.add("texAtencion1");

    const textIndexAt2 = document.createElement("p");
    textIndexAt2.textContent = "Atención presencial y online";

    const botonIndex = document.createElement("button");
    const textButtonInd = document.createElement("a");
    textButtonInd.href = 'https://johpser.github.io/EntregaFinal-JohpserA/reservar_cita.html';
    textButtonInd.textContent = 'RESERVAR CITA';
    textButtonInd.style.color = 'inherit';
    textButtonInd.style.textDecoration = 'none';

    botonIndex.appendChild(textButtonInd);
    divIndex2.appendChild(textIndexAt2);
    divIndex2.appendChild(botonIndex);

    sectIndex2.appendChild(divIndex2);

    const divIndex3 = document.createElement("div");
    divIndex3.classList.add("texAtencion2");

    const textIndexAt3 = document.createElement("p");
    textIndexAt3.textContent = "Horario de atención";

    const textIndexAt4 = document.createElement("p");
    textIndexAt4.textContent = "LUNES - VIERNES";

    const textIndexAt5 = document.createElement("p");
    textIndexAt5.textContent = "9:00AM A 1:00PM - 3:00PM A 8:00PM";

    divIndex3.appendChild(textIndexAt3);
    divIndex3.appendChild(textIndexAt4);
    divIndex3.appendChild(textIndexAt5);

    sectIndex2.appendChild(divIndex3);

    sectIndex2.style.display = 'flex';
    sectIndex2.style.justifyContent = 'space-evenly';
    sectIndex2.style.marginTop = '100px';

    
    const sectIndex3 = document.getElementById("sectIndex3");
    sectIndex3.classList.add('cajoninfo');

    const info = document.createElement("div");

    const texinfo = document.createElement("p");
    texinfo.innerHTML = "<h3>Bienvenido a mejorar tu salud mental</h3>";

    const texinfo2 = document.createElement("p");
    texinfo2.innerHTML = "<h3>Cuento con amplia experiencia en intervención psicológica en diversas situaciones emocionales, de interacción social, de adaptación y personalidad.</h3>";

    info.appendChild(texinfo);
    info.appendChild(texinfo2);
    sectIndex3.appendChild(info);

    const botonIndex2 = document.createElement("button");
    const textButton2 = document.createElement("a");
    textButton2.href = 'https://johpser.github.io/EntregaFinal-JohpserA/biografia.html';
    textButton2.textContent = 'CONOCER MAS';
    textButton2.style.color = 'inherit';
    textButton2.style.textDecoration = 'none';

    botonIndex2.appendChild(textButton2);
    info.appendChild(botonIndex2);

    const divImagen = document.createElement("div");
    divImagen.classList.add("imagenindex");

    const imagenIndex = document.createElement("img");
    imagenIndex.src = 'consultorioss.jpg'; 
    imagenIndex.alt = 'Consultorio';

    divImagen.appendChild(imagenIndex);
    sectIndex3.appendChild(divImagen);

    sectIndex3.style.padding = '5%';
    sectIndex3.style.marginTop = '20px';
    sectIndex3.style.display = 'grid';
    sectIndex3.style.gridTemplateColumns = '1fr 1fr';
    sectIndex3.style.gap = '20px';

    imagenIndex.style.width = '80%';
    imagenIndex.style.borderRadius = '100px';
    imagenIndex.style.border = '2px solid #51614c';
});
