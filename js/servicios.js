const bannerServicios = document.getElementById('bannerServicios');
const divServicios = document.createElement('div');
const bannerTitulo = document.createElement('h1');
bannerTitulo.textContent = 'SERVICIOS';
divServicios.appendChild(bannerTitulo);
bannerServicios.appendChild(divServicios);

document.addEventListener('DOMContentLoaded', function() {
    
    const agendarCitaButtons = document.querySelectorAll('.agendar-cita-btn');
    agendarCitaButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            const url = button.getAttribute('data-url');
            Swal.fire({
                title: 'Agendar cita',
                text: '¿Deseas agendar una cita?',
                icon: 'question',
                showCancelButton: true,
                confirmButtonText: 'Sí',
                cancelButtonText: 'No'
            }).then((result) => {
                if (result.isConfirmed) {
                    window.location.href = 'http://127.0.0.1:5500/reservar_cita.html';
                }
            });
        });
    });

    
    addInfoListeners();
});

function addInfoListeners() {
    const sweetAlertElements = [
        { id: 'swetAlert1', title: 'PSICOTERAPIA COGNITIVO-CONDUCTUAL DE TERCERA GENERACIÓN', content: `<div style="text-align: justify;">
            <p>Sirve para tratar un amplio abanico de problemas, además de ayudar a identificar y afrontar situaciones concretas rápidamente. Generalmente, requiere menos sesiones que otros tipos de terapia.</p>
            <p>La Terapia Cognitivo Conductual es una herramienta útil para abordar desafíos emocionales. Por ejemplo, puede ayudarte a lo siguiente:</p>
            <ul>
                <li>Controlar los síntomas de patologías mentales y evitar recaídas.</li>
                <li>Sobrellevar situaciones de estrés de nuestra rutina diaria.</li>
                <li>Aprender a controlar las emociones.</li>
                <li>Solucionar conflictos y aprender a relacionarse mejor.</li>
                <li>Superar las pérdidas y el dolor, así como traumas emocionales.</li>
                <li>Afrontar el diagnóstico de una enfermedad.</li>
                <li>Tener controlados los síntomas físicos crónicos.</li>
            </ul>
        </div>` },
        { id: 'swetAlert2', title: 'ORIENTACIÓN PSICOLÓGICA EN PROBLEMAS INTERPERSONALES Y DE ADAPTACIÓN', content: `<div style="text-align: justify;">
            <p>Un conflicto suele definirse como una discrepancia de intereses. ¿Pero qué es en un sentido psicológico y emocional? Un conflicto es, ante todo, una lucha de egos. Queremos algo diferente y queremos conseguirlo bien sea a través del otro, por encima del otro o contra el otro.</p>
            <p>El problema es que en esa batalla todos salen perdiendo. Porque lo que se pierde en un conflicto es la oportunidad de comprendernos y respetarnos más. La energía que invertimos en pelear es la energía que deberíamos invertir en aceptar y en ceder para que todos, de alguna manera, salgamos ganando.</p>
            <p>Podemos cambiar el modo en el que gestionamos y resolvemos conflictos. Nos enseñan a ser competitivos, a defender lo nuestro por encima de todo. Pero podemos aprender a ser colaborativos y buscar el beneficio común.</p>
        </div>` },
        { id: 'swetAlert3', title: 'INTERVENCIÓN EN ADICCIONES Y USO DE SUSTANCIAS PSICOACTIVAS', content: `<div style="text-align: justify;">
            <p>Enfrentarse a la adicción no es fácil, pero con apoyo y estrategias adecuadas, la recuperación es posible.</p>
            <p>Nuestra intervención se centra en lo siguiente:</p>
            <ul>
                <li>Desintoxicación y manejo de la abstinencia.</li>
                <li>Tratamiento psicológico individual y grupal.</li>
                <li>Rehabilitación y reintegración social.</li>
                <li>Prevención de recaídas.</li>
            </ul>
        </div>` },
        { id: 'swetAlert4', title: 'ATENCIÓN DE PROBLEMAS EMOCIONALES, ANSIEDAD/DEPRESIÓN, TRASTORNO DE PÁNICO', content: `<div style="text-align: justify;">
            <p>Los trastornos emocionales afectan significativamente la calidad de vida. La terapia ofrece un espacio seguro para explorar y gestionar estas emociones.</p>
            <p>Nuestros servicios incluyen:</p>
            <ul>
                <li>Terapia cognitivo-conductual.</li>
                <li>Técnicas de relajación y mindfulness.</li>
                <li>Asesoramiento y seguimiento continuo.</li>
            </ul>
        </div>` },
        { id: 'swetAlert5', title: 'TERAPIA DE PAREJA', content: `<div style="text-align: justify;">
            <p>La terapia de pareja se centra en mejorar la comunicación y resolver conflictos dentro de la relación. Es útil para parejas en cualquier etapa, desde las que están empezando a tener problemas hasta las que desean fortalecer su vínculo.</p>
            <p>Nuestro enfoque incluye:</p>
            <ul>
                <li>Técnicas de comunicación efectiva.</li>
                <li>Resolución de conflictos.</li>
                <li>Reforzamiento de la intimidad y la conexión emocional.</li>
            </ul>
        </div>` },
        { id: 'swetAlert6', title: 'ATENCIÓN PSICOLÓGICA EN TRANSTORNOS DE PERSONALIDAD', content: `<div style="text-align: justify;">
            <p>Los trastornos de personalidad pueden afectar todas las áreas de la vida de una persona, desde sus relaciones hasta su desempeño laboral.</p>
            <p>Nuestro enfoque terapéutico incluye:</p>
            <ul>
                <li>Terapia individual intensiva.</li>
                <li>Planificación y seguimiento personalizado.</li>
                <li>Intervenciones basadas en la evidencia.</li>
            </ul>
        </div>` }
    ];

    sweetAlertElements.forEach(element => {
        const button = document.getElementById(element.id);
        if (button) {
            button.addEventListener('click', function(event) {
                event.preventDefault();
                Swal.fire({
                    title: element.title,
                    html: element.content,
                    icon: 'info',
                    confirmButtonText: 'Cerrar'
                });
            });
        }
    });
}
