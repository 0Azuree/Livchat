document.addEventListener('DOMContentLoaded', function() {
    const toggleThemeButton = document.getElementById('toggleTheme');
    const body = document.body;

    // Load theme preference from local storage
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
        body.classList.add('dark-mode');
    }

    toggleThemeButton.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
        const newTheme = body.classList.contains('dark-mode') ? 'dark' : 'light';
        localStorage.setItem('theme', newTheme);
    });

    const createAccountSubmitButton = document.getElementById('createAccountSubmit');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const errorMessage = document.getElementById('error-message');

    // Load existing user data from local storage
    let users = JSON.parse(localStorage.getItem('users')) || {};

    createAccountSubmitButton.addEventListener('click', function() {
        const username = usernameInput.value.trim();
        const password = passwordInput.value;

        if (!username || !password) {
            errorMessage.textContent = 'Please enter both username and password.';
            return;
        }

        if (users[username]) {
            errorMessage.textContent = 'Username already exists. Please choose another one.';
            return;
        }

        // Basic password complexity check (you might want to enhance this)
        if (password.length < 6) {
            errorMessage.textContent = 'Password must be at least 6 characters long.';
            return;
        }

        users[username] = password;
        localStorage.setItem('users', JSON.stringify(users));
        alert('Account created successfully! You can now log in.');
        window.location.href = 'login.html'; // Redirect to login page
    });
});
