document.addEventListener('DOMContentLoaded', function() {
    // Open modals when service buttons are clicked
    document.querySelectorAll('.service-btn').forEach(button => {
        button.addEventListener('click', function() {
            const targetModal = document.getElementById(this.getAttribute('data-target'));
            if (targetModal) {
                targetModal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            }
        });
    });

    // Close modals when X is clicked
    document.querySelectorAll('.close-modal').forEach(button => {
        button.addEventListener('click', function() {
            this.closest('.service-modal').style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    });

    // Close modals when clicking outside
    document.querySelectorAll('.service-modal').forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                this.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    });

    // Handle form submissions
    document.querySelectorAll('.service-form').forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Show thank you message
            const thankYou = this.querySelector('.thank-you-message');
            if (thankYou) thankYou.style.display = 'block';
            
            // Disable submit button
            const submitBtn = this.querySelector('button[type="submit"]');
            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.textContent = 'Submitted ✓';
            }
            
            // Reset form after 3 seconds
            setTimeout(() => {
                this.reset();
                if (thankYou) thankYou.style.display = 'none';
                if (submitBtn) {
                    submitBtn.disabled = false;
                    submitBtn.textContent = submitBtn.textContent.replace(' ✓', '');
                }
                this.closest('.service-modal').style.display = 'none';
                document.body.style.overflow = 'auto';
            }, 3000);
        });
    });
});