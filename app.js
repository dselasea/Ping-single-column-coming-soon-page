const dataForm = document.querySelector('#data-form');
const dataInput = document.querySelector('#email');
const errorDiv = document.querySelector('.error');

dataForm.addEventListener('submit', submitForm);

function submitForm(e){
    if(!validateEmail(email.value)){
        dataForm.className = 'form';
        errorDiv.style.visibility = 'visible';
    }
    e.preventDefault();
}

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}