const bannerContacto = document.getElementById('bannerContacto');
        const divContacto = document.createElement('div');
        const bannerTituloC = document.createElement('h1');
        bannerTituloC.textContent = 'CONTACTO';
        divContacto.appendChild(bannerTituloC);
        bannerContacto.appendChild(divContacto);
        

        
        const form = document.createElement('form');
        form.setAttribute('action', 'submeter-formulario.php');
        form.setAttribute('method', 'post');

        const p1 = createFormElement('nombre', 'text', 'introducir_nombre', 'Escribe tu nombre', true, 'Nombre');
        const p2 = createFormElement('email', 'email', 'introducir_email', 'Escribe tu Email', true, 'Email');
        const p3 = createFormElement('telefono', 'tel', 'introducir_telefono', 'Escribe tu teléfono', false, 'Teléfono');
        
        const p5 = createFormElement('asunto', 'text', 'introducir_asunto', 'Escribe un asunto', true, 'Asunto');
        const p6 = createFormElement('mensaje', 'textarea', 'introducir_mensaje', 'Deja aquí tu comentario...', true, 'Mensaje');

        const button = document.createElement('button');
        button.setAttribute('type', 'submit');
        button.setAttribute('name', 'enviar_formulario');
        button.setAttribute('id', 'enviar');
        button.innerHTML = '<p>Enviar</p>';

        const aviso = document.createElement('p');
        aviso.classList.add('aviso');
        aviso.innerHTML = '<span>*</span> Los campos son obligatorios.';

        
        function createFormElement(id, type, name, placeholder, required, labelText) {
            const p = document.createElement('p');

            const label = document.createElement('label');
            label.setAttribute('for', id);
            label.classList.add('colocar_' + id);
            label.innerHTML = labelText;
            if (required) {
                const span = document.createElement('span');
                span.classList.add('obligatorio');
                span.innerHTML = '*';
                label.appendChild(span);
            }

            const input = document.createElement(type === 'textarea' ? 'textarea' : 'input');
            input.setAttribute('type', type);
            input.setAttribute('name', name);
            input.setAttribute('id', id);
            input.setAttribute('required', 'required');
            input.setAttribute('placeholder', placeholder);

            p.appendChild(label);
            p.appendChild(input);

            return p;
        }

        
        form.appendChild(p1);
        form.appendChild(p2);
        form.appendChild(p3);
        form.appendChild(p5);
        form.appendChild(p6);
        form.appendChild(button);
        form.appendChild(aviso);

        
        const contactForm = document.querySelector('.contact_form');
        contactForm.appendChild(form);