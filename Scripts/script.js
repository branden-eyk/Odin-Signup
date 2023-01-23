const createAccountBtn = document.querySelector('.form__submit');

createAccountBtn.addEventListener('click', checkPassMatch);

function checkPassMatch(){
    const password = document.querySelector('.form__input--pass');
    const confirmPass = document.querySelector('.form__input--confirm');
    const mismatchSpan = document.querySelector('.form__mismatch');
    
    if (password.value !== confirmPass.value) {
        mismatchSpan.innerHTML = '*Passwords do not match';
        password.classList.add('form__input--error');
        confirmPass.classList.add('form__input--error');
    } else {
        mismatchSpan.innerHTML = '';
    }
}