import { getModal } from "./modalDialog.js";

export const formValidation = (formID, radioName) => {
    const form = document.querySelector(`form#${formID}`);
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = form.querySelector('input[name="name"]');
        const surname = form.querySelector('input[name="surname"]');
        const phone = form.querySelector('input[name="phone"]');
        const radio = form.querySelector(`input[name="${radioName}"]:checked`);

        const oldMessages = form.querySelectorAll('.message');
        oldMessages.forEach(message => message.remove());

        let error = false;

        const nameRegex = /^[A-Za-zÀ-ž\s'-]{2,}$/;
        if (name.value.trim() === '') {
            getMessage('*Please fill out this field.', name);
            error = true;
        } else if (!nameRegex.test(name.value)) {
            getMessage('*Please enter a valid name.', name);
            error = true;
        } 

        if (surname.value.trim() === '') {
            getMessage('*Please fill out this field.', surname);
            error = true;
        } else if (!nameRegex.test(surname.value)) {
            getMessage('*Please enter a valid last name.', surname);
            error = true;
        } 

        const phoneRegex = /^\+?\d{7,15}$/;
        if (phone.value.trim() === '') {
            getMessage('*Please fill out this field.', phone);
            error = true;
        } else if (!phoneRegex.test(phone.value)) {
            getMessage('*Please enter a valid phone number.', phone);
            error = true;
        } 

        if (!radio) {
            const radioContainer = form.querySelector('.radios');
            getMessage('*Please select one of the options.', radioContainer);
            error = true;
        }

        if (!error) {
            getModal({
                text: 'Thank you! Your form has been successfully submitted.',
                confirmText: 'Continue',
                confirmFn: () => {
                    form.reset();
                },
                cancelFn: () => {
                    form.reset();
                }
            });
        }
    });
};

const getMessage = (text, element) => {
    const errorMessage = document.createElement('p');
    errorMessage.classList.add('message');
    errorMessage.innerText = text;
    element.insertAdjacentElement('afterend', errorMessage);
};