// login-script.js
function validateLogin() {
    // Replace the following lines with your actual email, username, and password
    const actualUsername = 'Prajeeth';
    const actualEmail = '21z330@psgtech.ac.in';
    const actualPassword = 'portfoliowebsite';

    // Get values entered by the user
    const enteredUsername = document.getElementById('username').value;
    const enteredEmail = document.getElementById('email').value;
    const enteredPassword = document.getElementById('password').value;

    // Check if entered values match the actual values
    if (
        enteredUsername === actualUsername &&
        enteredEmail === actualEmail &&
        enteredPassword === actualPassword
    ) {
        // Assuming login is successful, redirect to portfolio
        window.location.href = 'portindex.html';
    } else {
        alert('Invalid credentials. Please try again.');
    }
}

