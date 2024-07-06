document.addEventListener('DOMContentLoaded', function() {
    const sectBio = document.getElementById("sectBio");
    const divImgBio = document.createElement("div");
    divImgBio.classList.add("imagenBio");
    const imgBio = document.createElement("img");
    imgBio.src = 'giovani.jpeg';
    imgBio.alt = 'Imagen de Perfil';

    divImgBio.appendChild(imgBio);
    sectBio.appendChild(divImgBio);

    const divTexto = document.createElement("div");
    let textoBio1 = document.createElement("h1");
    textoBio1.classList.add("textonombre")
    let textoBio2 = document.createElement("h2");
    textoBio2.classList.add("textodedicacion")

    textoBio1.textContent = "Dr. Giovani Martín Díaz Gervasi";
    textoBio2.textContent = 'Psicólogo Clínico e Investigador';

    divTexto.appendChild(textoBio1);
    divTexto.appendChild(textoBio2);
    sectBio.appendChild(divTexto);

    const sectBio2 = document.getElementById("sectBio2");

    const divVision = document.createElement("div");
    let texVision1 = document.createElement("h3");
    let texVision2 = document.createElement("p");

    const sectBio3 = document.getElementById("sectBio3");
    texVision1.textContent = 'VISIÓN';
    texVision2.textContent = 'Ser parte de una perspectiva integral, biopsicosocial del ser humano y su comportamiento. Atender con eficacia, responsabilidad y sentido humanitario los problemas psicológicos que se presentan en las diferentes áreas del bienestar y desarrollo de la salud mental.';
    divVision.appendChild(texVision1);
    divVision.appendChild(texVision2);
    sectBio3.appendChild(divVision);

    const divMision = document.createElement("div");
    let texMision1 = document.createElement("h3");
    let texMision2 = document.createElement("p");

    texMision1.textContent = 'MISIÓN';
    texMision2.textContent = 'Afrontar los problemas concernientes a la salud mental y adaptación conductual a partir de enfoques terapéuticos actuales como la terapia Cognitivo-conductual de tercera generación. Se busca desarrollar fortalezas a nivel personal y social de modo que la persona crea y sienta que la propia vida vale la pena de vivirse.';
    divMision.appendChild(texMision1);
    divMision.appendChild(texMision2);
    sectBio3.appendChild(divMision);
});