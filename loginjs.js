document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('login-form');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Example of handling login (replace with your actual logic)
        const username = form.username.value;
        const password = form.password.value;
        
        // Example: validate username and password
        if (username === 'user' && password === 'password') {
            alert('Login successful!');
            // Redirect to another page or update UI
        } else {
            alert('Invalid username or password.');
            // Handle error or show message
        }
    });
});
