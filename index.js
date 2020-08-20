const form = document.querySelector('#form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const password2 = document.querySelector('#password2');

const isValidEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

const showError = (input, message) => {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.classList = 'form-control error';
    small.innerText = message;
};

const showSuccess = (input) => {
    const formControl = input.parentElement;
    formControl.classList = 'form-control success';
};

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (username.value === '') {
        showError(username, 'Username is required');
    } else {
        showSuccess(username);
    }

    if (email.value === '') {
        showError(email, 'Email is required');
    } else if (!isValidEmail(email.value)) {
        showError(email, 'Please enter a valid email address');
    } else {
        showSuccess(email);
    }
});
