import TheHealthcareSourceUser from './data/healthcaredb-source-user';

document.addEventListener('DOMContentLoaded', () => {
  const sections = {
    Login: document.getElementById('login-form')
  };

  const showSection = (sectionId) => {
    const section = sections[sectionId];
    if (section) {
      section.style.display = 'block';
    }
  };

  const hideAllSectionsExcept = (exceptSection) => {
    Object.entries(sections).forEach(([key, section]) => {
      if (key !== exceptSection && section) {
        section.style.display = 'none';
      }
    });
  };

  // Function to hide all forms
  const hideAllForms = () => {
    document.querySelectorAll('.login-form, .signup-form').forEach(form => {
      form.style.display = 'none';
    });
  };

  // Signup and login form toggling
  const signUpLink = document.getElementById('signUpLink');
  const signInLink = document.getElementById('signInLink');

  if (signUpLink && signInLink) {
    signUpLink.addEventListener('click', function(event) {
      event.preventDefault();
      hideAllForms();
      document.getElementById('signup-form').style.display = 'block';
    });

    signInLink.addEventListener('click', function(event) {
      event.preventDefault();
      hideAllForms();
      document.getElementById('login-form').style.display = 'block';

      // Hide all sections except 'Login' when login form is shown
      hideAllSectionsExcept('Login');
    });
  }

  // Event listener for registration form
  const registrationForm = document.getElementById('signup-form');
  if (registrationForm) {
    registrationForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      const name = document.getElementById('new-name').value;
      const email = document.getElementById('new-email').value;
      const password = document.getElementById('new-password').value;
      const confirmPassword = document.getElementById('confirm-password').value;

      const response = await TheHealthcareSourceUser.register(name, email, password, confirmPassword);
      if (response) {
        alert('Registration successful!');
        hideAllForms();
        showForm('login-form');
      }
    });
  }

  // Event listener for login form
  const loginForm = document.getElementById('login-form');
  if (loginForm) {
    loginForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;

      const response = await TheHealthcareSourceUser.login(email, password);
      if (response) {
        alert('Login successful!');
        // Redirect to home page or do other actions after successful login
      }
    });
  }

  // Initialize the default view
  hideAllSectionsExcept('Login');
  showSection('Login');
});

function showForm(formId) {
  const form = document.getElementById(formId);
  if (form) {
    form.style.display = 'block';
  }
}
