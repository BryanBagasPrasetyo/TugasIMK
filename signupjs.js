document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('signup-form');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Example of handling sign-up (replace with your actual logic)
        const username = form.username.value;
        const email = form.email.value;
        const password = form.password.value;
        
        // Example: validate username, email, and password
        if (username.trim() === '' || email.trim() === '' || password.trim() === '') {
            alert('Please fill in all fields.');
            return;
        }

        // Example: validate email format (simple check)
        if (!isValidEmail(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        // Example: handle sign-up process (can be an API call or database operation)
        // Here you can redirect to login page after successful sign-up
        alert('Sign Up successful! Redirecting to login page.');
        window.location.href = 'login.html';
    });

    function isValidEmail(email) {
        // Simple email validation regex (can be more sophisticated based on requirements)
        const emailRegex = /\S+@\S+\.\S+/;
        return emailRegex.test(email);
    }
});
