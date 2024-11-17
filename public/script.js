// Password visibility toggle
const passwordInput = document.getElementById('passwordInput');
const passwordToggle = document.getElementById('passwordToggle');
const loginForm = document.getElementById('loginForm');

// Ensure elements exist before adding event listeners
if (passwordInput && passwordToggle && loginForm) {
    passwordToggle.addEventListener('click', function () {
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            passwordToggle.textContent = '🙈'; // Closed eye emoji
        } else {
            passwordInput.type = 'password';
            passwordToggle.textContent = '👁️'; // Open eye emoji
        }
    });

    loginForm.addEventListener('submit', function (e) {
        if (!passwordInput.value) {
            e.preventDefault();
            loginForm.classList.add('shake');
            setTimeout(() => {
                loginForm.classList.remove('shake');
            }, 500);
        }
    });
} else {
    console.error("Password input, toggle button, or login form is missing in the DOM.");
}
