document.addEventListener('DOMContentLoaded', function() {
    const loginSubmitButton = document.getElementById('loginSubmit');
    const usernameInput = document.getElementById('loginUsername');
    const passwordInput = document.getElementById('loginPassword');
    const errorMessage = document.getElementById('login-error-message');

    loginSubmitButton.addEventListener('click', function() {
        const username = usernameInput.value.trim();
        const password = passwordInput.value;

        const storedUsers = JSON.parse(localStorage.getItem('users'));

        if (storedUsers && storedUsers[username] === password) {
            alert('Login successful!');
            window.location.href = 'chat.html'; // Redirect to the chat screen (we'll create this later)
        } else {
            errorMessage.textContent = 'Invalid username or password.';
        }
    });
});
