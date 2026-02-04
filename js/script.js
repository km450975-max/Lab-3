// ============================================
// Theme Management
// ============================================

/**
 * Initialize theme from localStorage or set default
 */
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
}

/**
 * Toggle between dark and light mode
 */
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
}

/**
 * Update theme toggle icon based on current theme
 */
function updateThemeIcon(theme) {
    const themeIcon = document.querySelector('.theme-icon');
    if (themeIcon) {
        themeIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
    }
}

// Initialize theme on page load
initTheme();

// Theme toggle button event listener
const themeToggle = document.getElementById('themeToggle');
if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
}

// ============================================
// Product Card Functionality
// ============================================

/**
 * Handle "Add to Cart" button click
 */
function handleAddToCart() {
    const cartMessage = document.getElementById('cartMessage');
    
    if (cartMessage) {
        cartMessage.textContent = '✓ Product added to cart successfully!';
        cartMessage.className = 'cart-message success';
        
        // Hide message after 3 seconds
        setTimeout(() => {
            cartMessage.className = 'cart-message';
            cartMessage.textContent = '';
        }, 3000);
    }
}

// Add to cart button event listener
const addToCartBtn = document.getElementById('addToCartBtn');
if (addToCartBtn) {
    addToCartBtn.addEventListener('click', handleAddToCart);
}

/**
 * Handle product image load error
 */
function handleImageError(event) {
    const img = event.target;
    const placeholder = img.nextElementSibling;
    
    if (placeholder && placeholder.classList.contains('image-placeholder')) {
        img.style.display = 'none';
        placeholder.style.display = 'flex';
    }
}

// Product image error handler
const productImage = document.getElementById('productImage');
if (productImage) {
    productImage.addEventListener('error', handleImageError);
}

// ============================================
// Form Validation
// ============================================

// Validation rules
const validationRules = {
    fullName: {
        validate: (value) => value.trim().length > 0,
        message: 'Full name is required'
    },
    email: {
        validate: (value) => {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(value);
        },
        message: 'Please enter a valid email address'
    },
    password: {
        validate: (value) => value.length >= 8,
        message: 'Password must be at least 8 characters long'
    },
    confirmPassword: {
        validate: (value, formData) => {
            return value === formData.password;
        },
        message: 'Passwords do not match'
    }
};

/**
 * Validate a single field
 */
function validateField(fieldName, value, formData = {}) {
    const rule = validationRules[fieldName];
    if (!rule) return true;
    
    const isValid = rule.validate(value, formData);
    return isValid;
}

/**
 * Display error message for a field
 */
function showError(fieldName, message) {
    const input = document.getElementById(fieldName);
    const errorElement = document.getElementById(fieldName + 'Error');
    
    if (input && errorElement) {
        input.classList.add('invalid');
        input.classList.remove('valid');
        input.setAttribute('aria-invalid', 'true');
        errorElement.textContent = message;
    }
}

/**
 * Clear error message for a field
 */
function clearError(fieldName) {
    const input = document.getElementById(fieldName);
    const errorElement = document.getElementById(fieldName + 'Error');
    
    if (input && errorElement) {
        input.classList.remove('invalid');
        input.classList.add('valid');
        input.setAttribute('aria-invalid', 'false');
        errorElement.textContent = '';
    }
}

/**
 * Validate all form fields
 */
function validateForm() {
    const form = document.getElementById('registrationForm');
    if (!form) return false;
    
    const formData = {
        fullName: document.getElementById('fullName').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
        confirmPassword: document.getElementById('confirmPassword').value
    };
    
    let isValid = true;
    
    // Validate each field
    for (const fieldName in validationRules) {
        const value = formData[fieldName];
        const rule = validationRules[fieldName];
        
        if (rule.validate(value, formData)) {
            clearError(fieldName);
        } else {
            showError(fieldName, rule.message);
            isValid = false;
        }
    }
    
    return isValid;
}

/**
 * Handle field blur event (validate on blur)
 */
function handleFieldBlur(event) {
    const fieldName = event.target.id;
    const value = event.target.value;
    
    // Get all form values for confirm password validation
    const formData = {
        password: document.getElementById('password').value,
        confirmPassword: document.getElementById('confirmPassword').value
    };
    
    if (fieldName === 'confirmPassword') {
        formData.confirmPassword = value;
    }
    
    // Validate the field
    if (validationRules[fieldName]) {
        const rule = validationRules[fieldName];
        if (rule.validate(value, formData)) {
            clearError(fieldName);
        } else {
            showError(fieldName, rule.message);
        }
    }
    
    // Re-validate confirm password if password field changed
    if (fieldName === 'password' && formData.confirmPassword) {
        if (validationRules.confirmPassword.validate(formData.confirmPassword, formData)) {
            clearError('confirmPassword');
        } else {
            showError('confirmPassword', validationRules.confirmPassword.message);
        }
    }
}

/**
 * Handle field input event (clear errors as user types)
 */
function handleFieldInput(event) {
    const fieldName = event.target.id;
    const value = event.target.value;
    
    // Get form data for confirm password validation
    const formData = {
        password: document.getElementById('password').value,
        confirmPassword: document.getElementById('confirmPassword').value
    };
    
    if (fieldName === 'password' || fieldName === 'confirmPassword') {
        formData[fieldName] = value;
    }
    
    // Validate and update error state
    if (validationRules[fieldName]) {
        const rule = validationRules[fieldName];
        if (rule.validate(value, formData)) {
            clearError(fieldName);
        }
    }
    
    // Re-validate confirm password when password changes
    if (fieldName === 'password' && formData.confirmPassword) {
        if (validationRules.confirmPassword.validate(formData.confirmPassword, formData)) {
            clearError('confirmPassword');
        } else if (formData.confirmPassword) {
            showError('confirmPassword', validationRules.confirmPassword.message);
        }
    }
}

/**
 * Handle form submission
 */
function handleFormSubmit(event) {
    event.preventDefault();
    
    // Clear previous success message
    const successMessage = document.getElementById('formSuccessMessage');
    if (successMessage) {
        successMessage.classList.remove('show');
        successMessage.textContent = '';
    }
    
    // Validate form
    if (!validateForm()) {
        return;
    }
    
    // Form is valid - show success message
    if (successMessage) {
        successMessage.textContent = '✓ Registration successful! Welcome aboard!';
        successMessage.classList.add('show');
    }
    
    // Clear all form fields
    const form = document.getElementById('registrationForm');
    if (form) {
        form.reset();
        
        // Clear all validation states
        const inputs = form.querySelectorAll('input');
        inputs.forEach(input => {
            input.classList.remove('invalid', 'valid');
            input.setAttribute('aria-invalid', 'false');
        });
        
        // Clear all error messages
        const errorMessages = form.querySelectorAll('.error-message');
        errorMessages.forEach(error => {
            error.textContent = '';
        });
    }
    
    // Hide success message after 5 seconds
    setTimeout(() => {
        if (successMessage) {
            successMessage.classList.remove('show');
        }
    }, 5000);
}

// ============================================
// Password Toggle Functionality
// ============================================

/**
 * Toggle password visibility
 */
function togglePasswordVisibility(fieldId, toggleButton) {
    const passwordField = document.getElementById(fieldId);
    const toggleText = toggleButton.querySelector('.toggle-text');
    
    if (passwordField && toggleText) {
        if (passwordField.type === 'password') {
            passwordField.type = 'text';
            toggleText.textContent = 'Hide';
        } else {
            passwordField.type = 'password';
            toggleText.textContent = 'Show';
        }
    }
}

// Password toggle event listeners
const passwordToggle = document.getElementById('passwordToggle');
if (passwordToggle) {
    passwordToggle.addEventListener('click', () => {
        togglePasswordVisibility('password', passwordToggle);
    });
}

const confirmPasswordToggle = document.getElementById('confirmPasswordToggle');
if (confirmPasswordToggle) {
    confirmPasswordToggle.addEventListener('click', () => {
        togglePasswordVisibility('confirmPassword', confirmPasswordToggle);
    });
}

// ============================================
// Form Event Listeners
// ============================================

// Form submission handler
const registrationForm = document.getElementById('registrationForm');
if (registrationForm) {
    registrationForm.addEventListener('submit', handleFormSubmit);
}

// Blur event listeners for validation
const formInputs = ['fullName', 'email', 'password', 'confirmPassword'];
formInputs.forEach(fieldName => {
    const input = document.getElementById(fieldName);
    if (input) {
        input.addEventListener('blur', handleFieldBlur);
        input.addEventListener('input', handleFieldInput);
    }
});

