// login.js - Login Page Functionality

document.addEventListener('DOMContentLoaded', function() {
    // Toggle password visibility
    const togglePassword = document.getElementById('togglePassword');
    const passwordInput = document.getElementById('loginPassword');
    
    if (togglePassword && passwordInput) {
        togglePassword.addEventListener('click', function() {
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);
            
            // Toggle eye icon
            const icon = this.querySelector('i');
            icon.classList.toggle('fa-eye');
            icon.classList.toggle('fa-eye-slash');
        });
    }
    
    // Forgot password modal
    const forgotPasswordLink = document.getElementById('forgotPasswordLink');
    const forgotPasswordModal = document.getElementById('forgotPasswordModal');
    const closeModal = document.querySelector('#forgotPasswordModal .close');
    const closeResetModal = document.getElementById('closeResetModal');
    
    if (forgotPasswordLink && forgotPasswordModal) {
        forgotPasswordLink.addEventListener('click', function(e) {
            e.preventDefault();
            forgotPasswordModal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    }
    
    if (closeModal) {
        closeModal.addEventListener('click', function() {
            forgotPasswordModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    }
    
    if (closeResetModal) {
        closeResetModal.addEventListener('click', function() {
            forgotPasswordModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    }
    
    // Close modal when clicking outside
    window.addEventListener('click', function(e) {
        if (e.target === forgotPasswordModal) {
            forgotPasswordModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    
    // Forgot password form submission
    const forgotPasswordForm = document.getElementById('forgotPasswordForm');
    const resetSuccess = document.getElementById('resetSuccess');
    
    if (forgotPasswordForm && resetSuccess) {
        forgotPasswordForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // In a real app, you would send a reset request to your server here
            // For demo purposes, we'll just show the success message
            
            // Hide form, show success message
            forgotPasswordForm.style.display = 'none';
            resetSuccess.style.display = 'block';
        });
    }
    
    // Login form submission
    const loginForm = document.getElementById('loginForm');
    const signUpLink = document.getElementById('signUpLink');
    
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;
            
            // In a real app, you would validate and send to your server
            console.log('Login attempt with:', email, password);
            
            // For demo, just show an alert
            alert('Login functionality would connect to your backend in a real application. For now, this is just a demo.');
            
            // Redirect to dashboard (in real app)
            // window.location.href = 'dashboard.html';
        });
    }
    
    if (signUpLink) {
        signUpLink.addEventListener('click', function(e) {
            e.preventDefault();
            // Redirect to signup page or open signup modal
            window.location.href = 'index.html#signupModal';
        });
    }
});