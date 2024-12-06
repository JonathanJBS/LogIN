const BD = [
    {id:1, correo:'Alejan@gmail.com', usuario:'Alejandro', contraseña:'alejand'},
    {id:2, correo:'Fede@outlook.com', usuario:'Federico', contraseña:'franfran'}
];

document.getElementById('email').addEventListener('input', validateForm);
document.getElementById('password').addEventListener('input', validateForm);
document.querySelector('button').addEventListener('click', validateCredentials);

function validateForm() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const circles = [document.getElementById('circle1'), document.getElementById('circle2')];
    
    if (emailRegex.test(email)) {
        circles[0].classList.remove('bg-yellow-50');
        circles[0].classList.add('bg-green-500');
    } else {
        circles[0].classList.remove('bg-green-500');
        circles[0].classList.add('bg-yellow-50');
    }
    
    if (password.length > 0) {
        circles[1].classList.remove('bg-yellow-50');
        circles[1].classList.add('bg-green-500');
    } else {
        circles[1].classList.remove('bg-green-500');
        circles[1].classList.add('bg-yellow-50');
    }
}

function validateCredentials() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const user = BD.find(user => user.correo === email && user.contraseña === password);

    if (user) {
        localStorage.setItem('username', user.usuario);
        window.location.href = 'inicio.html';
    } else {
        alert('Credenciales incorrectas. Por favor, intenta nuevamente.');
    }
}
