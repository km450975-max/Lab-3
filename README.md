# Interactive Product Card and User Registration Form

## Project Title
Interactive Product Card and User Form with Validation and UI

## Description
This project is a responsive web application that demonstrates core HTML, CSS, and JavaScript concepts. It features an interactive product card component and a comprehensive user registration form with client-side validation, error handling, password visibility toggle, and dark/light mode theme switching. All functionality is implemented using pure vanilla JavaScript without any external libraries or frameworks.

## Features Implemented

### 1. Product Card Component
- **Visual Design**: Clean and modern product card layout with image, title, description, and price
- **Add to Cart Functionality**: Clicking the "Add to Cart" button displays a success message below the card
- **Image Error Handling**: Automatic fallback to placeholder text if the product image fails to load
- **Responsive Design**: Card adapts to different screen sizes while maintaining visual appeal
- **Theme Support**: Product card styling adapts seamlessly to both dark and light modes

### 2. User Registration Form
The form collects the following information:
- Full Name
- Email Address
- Password
- Confirm Password

### 3. Form Validation
Comprehensive client-side validation with the following rules:
- **Full Name**: Must not be empty
- **Email**: Must follow valid email format (regex validation)
- **Password**: Must be at least 8 characters long
- **Confirm Password**: Must match the password field

Validation occurs:
- When the user clicks the submit button
- When the user leaves an input field (blur event)
- Errors are cleared automatically as the user corrects the input

### 4. Error Handling and Feedback
- Clear, user-friendly error messages displayed below each input field
- Invalid inputs are highlighted with red border and background tint
- Error messages disappear automatically once validation passes
- Visual feedback with color-coded states (invalid/valid)
- Accessibility support with ARIA attributes

### 5. Password Show/Hide Feature
- Toggle button with "Show"/"Hide" text next to both password fields
- Clicking the toggle switches between text and password input types
- Text changes between "Show" and "Hide" to indicate current state
- Independent toggles for password and confirm password fields

### 6. Form Submission Behavior
- Form submission is prevented if validation fails
- On successful submission:
  - All form fields are cleared
  - Success message is displayed on the page (no alert popup)
  - No page reload occurs
  - Success message auto-hides after 5 seconds

### 7. Dark Mode and Light Mode
- Toggle button in the top-right corner to switch between themes
- Theme affects:
  - Background colors
  - Text colors
  - Product card styling
  - Form elements
  - Buttons and interactive elements
- Theme preference is saved using localStorage and persists across page reloads
- Smooth transitions between theme changes

### 8. Additional Features
- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile devices
- **Accessibility**: ARIA labels and attributes for screen reader support
- **Smooth Animations**: CSS transitions and animations for better user experience
- **Clean Code Structure**: Well-organized, commented code following best practices

## Folder Structure
```
project-folder/
│
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
└── README.md
```

## Instructions to Run the Project

### Method 1: Using a Local Server (Recommended)
1. Ensure you have a web server installed (e.g., Python, Node.js, or use VS Code Live Server extension)
2. Navigate to the project folder in your terminal/command prompt
3. Start a local server:
   - **Python 3**: `python -m http.server 8000`
   - **Python 2**: `python -m SimpleHTTPServer 8000`
   - **Node.js (http-server)**: `npx http-server`
   - **VS Code**: Right-click `index.html` and select "Open with Live Server"
4. Open your browser and navigate to `http://localhost:8000` (or the port your server uses)

### Method 2: Direct File Opening
1. Simply double-click the `index.html` file
2. The page will open in your default web browser
3. Note: Some features may work better with a local server due to browser security restrictions

### Testing the Features

#### Product Card
- Click the "Add to Cart" button to see the success message
- The product image uses a placeholder URL - if it fails to load, a fallback message will appear

#### Form Validation
1. Try submitting the form with empty fields to see validation errors
2. Enter an invalid email format to see email validation
3. Enter a password less than 8 characters to see password validation
4. Enter mismatched passwords to see confirm password validation
5. Correct the errors and watch them disappear automatically

#### Password Toggle
- Click the "Show" button next to the password fields to toggle visibility
- The button text changes to "Hide" when password is visible

#### Dark/Light Mode
- Click the theme toggle button in the top-right corner
- The theme will switch and persist across page reloads

## Screenshots

### Product Card
![Product Card](screenshots/product-card.png)
*Note: Add your screenshot of the product card here*

### Form Validation Errors
![Form Validation](screenshots/form-validation.png)
*Note: Add your screenshot showing validation errors here*

### Dark Mode
![Dark Mode](screenshots/dark-mode.png)
*Note: Add your screenshot of the dark mode interface here*

### Light Mode
![Light Mode](screenshots/light-mode.png)
*Note: Add your screenshot of the light mode interface here*

## Browser Compatibility
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Technologies Used
- HTML5
- CSS3 (with CSS Variables for theming)
- Vanilla JavaScript (ES6+)
- No external libraries or frameworks

## Code Structure

### HTML (`index.html`)
- Semantic HTML5 structure
- Accessibility attributes (ARIA labels)
- Form elements with proper labels and IDs

### CSS (`css/style.css`)
- CSS Variables for theme management
- Responsive design with media queries
- Smooth transitions and animations
- BEM-inspired naming conventions

### JavaScript (`js/script.js`)
- Modular function-based structure
- Event-driven architecture
- localStorage for theme persistence
- Comprehensive validation logic

## Key Implementation Details

### Theme Management
- Uses CSS custom properties (variables) for dynamic theming
- Theme state stored in `data-theme` attribute on `<html>` element
- localStorage persistence for user preference

### Validation System
- Rule-based validation with reusable functions
- Real-time validation on blur and input events
- Visual feedback with CSS classes (`.invalid`, `.valid`)

### Error Handling
- Graceful image loading error handling
- Form validation with user-friendly messages
- Automatic error clearing on correction

## Future Enhancements (Optional)
- Add more product cards with a grid layout
- Implement actual cart functionality with item storage
- Add form data persistence
- Include additional validation rules (e.g., password strength meter)
- Add loading states for form submission

## Author
Created as part of Web Development Lab Assignment


**Note**: This project is created for educational purposes.

