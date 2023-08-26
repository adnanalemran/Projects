const loginBtn = document.getElementById('loginBtn');
const password = document.getElementById('password');
const email = document.getElementById('email');

loginBtn.addEventListener('click', function(event) {
    event.preventDefault()
    const passwordValue = password.value;
    const emailValue = email.value;

    if (emailValue === 'admin@gmail.com' && passwordValue === '123') {
        window.location.href = 'bank.html';
    } else {
        alert('Wrong email or password');
    }
});
