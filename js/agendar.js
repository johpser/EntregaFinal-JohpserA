document.addEventListener('DOMContentLoaded', function () {
    const formulario = document.getElementById('formulario');
    const citasRegistradas = document.getElementById('citasRegistradas');
    const mensaje = document.getElementById('mensaje');
    const mensajeError = document.getElementById('mensajeError');
    const consultaResult = document.getElementById('consultaResult');
    const reservarBtn = document.getElementById('reservarBtn');
    const consultarBtn = document.getElementById('consultarBtn');
    const nuevaCitaBtn = document.getElementById('nuevaCitaBtn');

    mostrarFormulario();

    
    document.getElementById('datos').addEventListener('submit', async function (event) {
        event.preventDefault();

        
        const nombre = document.getElementById('nombre').value;
        const correo = document.getElementById('correo').value;
        const telefono = document.getElementById('telefono').value;
        const tipoDocumento = document.getElementById('tipoDocumento').value;
        const numeroDocumento = document.getElementById('numeroDocumento').value;
        const atencion = document.getElementById('atencion').value;
        const fecha = document.getElementById('fecha').value;
        const horario = document.getElementById('horario').value;

        try {
            let citas = await obtenerCitas();

            
            const citaExistente = citas.some(c => c.fecha === fecha && c.horario === horario);
            if (citaExistente) {
                Swal.fire({
                    icon: 'error',
                    title: 'Cita duplicada',
                    text: 'Ya existe una cita para la misma fecha y horario. Por favor, seleccione otro horario.',
                });
                return;
            }

            const diaSemana = obtenerDiaSemana(fecha); 

            const cita = {
                nombre,
                correo,
                telefono,
                tipoDocumento,
                numeroDocumento,
                atencion,
                fecha,
                horario,
                diaSemana
            };

            citas.push(cita);
            await guardarCitas(citas);

            Swal.fire({
                icon: 'success',
                title: 'Cita generada con éxito',
                text: 'Su cita ha sido reservada.',
                showCancelButton: true,
                confirmButtonText: 'Descargar PDF',
                cancelButtonText: 'Cerrar'
            }).then((result) => {
                if (result.isConfirmed) {
                    generarPDF(cita);
                }
            });

            mostrarCitaReservada(cita); 
            ocultarFormulario(); 
            mostrarBotonNuevaCita();
        } catch (error) {
            console.error('Error al procesar la cita:', error);
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Ocurrió un error al procesar la cita. Inténtelo nuevamente.',
            });
        }
    });

    
    document.getElementById('limpiarBtn').addEventListener('click', function () {
        document.getElementById('datos').reset(); 
        limpiarMensaje(); 
        limpiarConsulta(); 
    });

    
    consultarBtn.addEventListener('click', async function () {
        const { value: numeroDocumento } = await Swal.fire({
            title: 'Ingrese el número de documento',
            input: 'text',
            inputLabel: 'Número de Documento',
            inputPlaceholder: 'Ingrese el número de documento'
        });

        if (numeroDocumento) {
            try {
                let citas = await obtenerCitas();
                const cita = citas.find(c => c.numeroDocumento === numeroDocumento);

                if (cita) {
                    consultaResult.innerHTML = `
                        <p>Nombre: ${cita.nombre}</p>
                        <p>Correo: ${cita.correo}</p>
                        <p>Teléfono: ${cita.telefono}</p>
                        <p>Tipo de Documento: ${cita.tipoDocumento}</p>
                        <p>Número de Documento: ${cita.numeroDocumento}</p>
                        <p>Tipo de Atención: ${cita.atencion}</p>
                        <p>Fecha: ${formatoFecha(cita.fecha)} - ${cita.diaSemana}</p>
                        <p>Horario: ${cita.horario}</p>
                    `;
                } else {
                    consultaResult.innerText = 'No se encontró ninguna cita con ese número de documento.';
                }
            } catch (error) {
                console.error('Error al consultar la cita:', error);
                consultaResult.innerText = 'Ocurrió un error al consultar la cita. Inténtelo nuevamente.';
            }
        }
    });

    
    nuevaCitaBtn.addEventListener('click', function () {
        mostrarFormulario();
        ocultarCitaReservada();
        ocultarBotonNuevaCita(); 
        limpiarMensaje();
        limpiarConsulta();
    });

    
    function mostrarFormulario() {
        formulario.classList.add('mostrar');
        citasRegistradas.classList.add('ocultar');
    }

    
    function ocultarFormulario() {
        formulario.classList.add('ocultar');
    }

    
    function mostrarCitaReservada(cita) {
        citasRegistradas.innerHTML = `
            <h3 class="my-3">Cita Reservada</h3>
            <ul class="list-group mb-3">
                <li class="list-group-item"><strong>Nombre:</strong> ${cita.nombre}</li>
                <li class="list-group-item"><strong>Correo:</strong> ${cita.correo}</li>
                <li class="list-group-item"><strong>Teléfono:</strong> ${cita.telefono}</li>
                <li class="list-group-item"><strong>Tipo de Documento:</strong> ${cita.tipoDocumento}</li>
                <li class="list-group-item"><strong>Número de Documento:</strong> ${cita.numeroDocumento}</li>
                <li class="list-group-item"><strong>Tipo de Atención:</strong> ${cita.atencion}</li>
                <li class="list-group-item"><strong>Fecha:</strong> ${formatoFecha(cita.fecha)} - ${cita.diaSemana}</li>
                <li class="list-group-item"><strong>Horario:</strong> ${cita.horario}</li>
            </ul>
        `;
        citasRegistradas.classList.remove('ocultar');
    }

    
    function ocultarCitaReservada() {
        citasRegistradas.innerHTML = '';
        citasRegistradas.classList.add('ocultar');
    }

  
    function mostrarBotonNuevaCita() {
        nuevaCitaBtn.classList.remove('ocultar');
    }

    
    function ocultarBotonNuevaCita() {
        nuevaCitaBtn.classList.add('ocultar');
    }

    
    function limpiarMensaje() {
        mensaje.innerText = '';
    }

    
    function limpiarConsulta() {
        consultaResult.innerHTML = '';
    }

    
    function obtenerDiaSemana(fecha) {
        const diasSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
        const fechaSeleccionada = new Date(fecha);
        const diaSemana = fechaSeleccionada.getDay();
        return diasSemana[diaSemana];
    }

    
    function formatoFecha(fecha) {
        const fechaObj = new Date(fecha);
        const dia = fechaObj.getDate();
        const mes = fechaObj.getMonth() + 1;
        const anio = fechaObj.getFullYear();
        return `${dia}/${mes}/${anio}`;
    }

    
    function generarPDF(cita) {
        
        console.log('Generando PDF para la cita:', cita);
        
    }

    
    async function obtenerCitas() {
        let citas = localStorage.getItem('citas');
        if (!citas) {
            citas = [];
        } else {
            citas = JSON.parse(citas);
        }
        return citas;
    }

    
    async function guardarCitas(citas) {
        localStorage.setItem('citas', JSON.stringify(citas));
    }
});
