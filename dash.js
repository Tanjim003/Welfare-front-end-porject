document.getElementById("joinBtn").addEventListener("click", function() {
    alert("E-Welfare is a platform to support communities through volunteers, doctors, and local workers.");
});

//document.getElementById("signUpBtn").addEventListener("click", function() {
    //alert("Thank you for showing interest! Sign up functionality coming soon.");
//});

document.addEventListener('DOMContentLoaded', function() {
  // Get all elements
  const modal = document.getElementById('signupModal');
  const signupBtn = document.getElementById('signUpBtn');
  const closeBtn = document.querySelector('.close');
  const signupForm = document.getElementById('signupForm');
  const successMessage = document.getElementById('successMessage');
  
  // Form input fields
  const nameInput = document.getElementById('name');
  const usernameInput = document.getElementById('username');
  const emailInput = document.getElementById('email');
  const phoneInput = document.getElementById('phone');
  const roleSelect = document.getElementById('role');
  const districtSelect = document.getElementById('district');
  
  // Success message elements
  const successName = document.getElementById('successName');
  const successUsername = document.getElementById('successUsername');
  const successRole = document.getElementById('successRole');
  const successDistrict = document.getElementById('successDistrict');
  const continueBtn = document.getElementById('continueBtn');
  const modalCloseBtn = document.getElementById('closeBtn');

  // Open modal
  signupBtn.addEventListener('click', function() {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    resetForm();
  });

  // Close modal
  function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
  }

  closeBtn.addEventListener('click', closeModal);
  modalCloseBtn.addEventListener('click', closeModal);
  
  window.addEventListener('click', function(e) {
    if (e.target === modal) closeModal();
  });

  // Reset form and show it
  function resetForm() {
    signupForm.style.display = 'block';
    successMessage.style.display = 'none';
    signupForm.reset();
  }

  // Form submission
  signupForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const formData = {
      name: nameInput.value,
      username: usernameInput.value,
      email: emailInput.value,
      phone: phoneInput.value,
      role: roleSelect.value,
      district: districtSelect.value
    };

    // Update success message
    successName.textContent = formData.name;
    successUsername.textContent = formData.username;
    successRole.textContent = formData.role;
    successDistrict.textContent = formData.district;
    
    // Hide form, show success
    signupForm.style.display = 'none';
    successMessage.style.display = 'block';

    // In a real app, you would send data to server here
    // fetch('/api/signup', { method: 'POST', body: JSON.stringify(formData) })
    //   .then(response => response.json())
    //   .then(data => showSuccess())
    //   .catch(error => showError());
  });

  // Continue button action
  continueBtn.addEventListener('click', function() {
    alert('Redirecting to your dashboard...');
    closeModal();
    // In real app: window.location.href = '/dashboard';
  });
});
// Add this to your existing navigation.js
function highlightCurrentPage() {
    const currentPage = window.location.pathname.split('/').pop();
    document.querySelectorAll('nav a').forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
}

// Call this in your initNavigation function
function initNavigation() {
    setupEventListeners();
    handleResponsiveNav();
    highlightCurrentPage(); // Add this line
}

