import 'regenerator-runtime';
import '../styles/style.css';
import '../styles/responsive.css';
import TheHealthcareSourceUser from './data/healthcaredb-source-user';

document.addEventListener('DOMContentLoaded', () => {
  const menuItems = document.querySelectorAll('.app-bar .app-bar__navigation ul li a');
  const sections = {
    Beranda: document.getElementById('Beranda'),
    'Informasi-Obat': document.getElementById('Informasi-Obat'),
    Edukasi: document.getElementById('Edukasi'), 
    Login: document.getElementById('login-form'),
    MainContent: document.getElementById('mainContent')
  };

  // Function to hide all forms
  const hideAllForms = () => {
    document.querySelectorAll('.login-form, .signup-form').forEach(form => {
      form.style.display = 'none';
    });
  };

  // Function to hide all sections except specified section
  const hideAllSectionsExcept = (exceptSection) => {
    Object.entries(sections).forEach(([key, section]) => {
      if (key !== exceptSection && section) {
        section.style.display = 'none';
      }
    });
  };

  // Function to show specified section
  const showSection = (sectionId) => {
    const section = sections[sectionId];
    if (section) {
      section.style.display = 'block';
    }
  };

  // Function to hide all sections except login
  const hideAllSectionsExceptLogin = () => {
    Object.entries(sections).forEach(([key, section]) => {
      if (key !== 'Login' && section) {
        section.style.display = 'none';
      }
    });
  };

  // Initialize the default view
  hideAllSectionsExceptLogin(); // Hanya menu login yang ditampilkan saat halaman dimuat

  // Event listener for menu items
  menuItems.forEach(item => {
    item.addEventListener('click', function(event) {
      event.preventDefault();

      // Remove 'active' class from all menu items
      menuItems.forEach(i => i.classList.remove('active'));

      // Add 'active' class to the clicked menu item
      this.classList.add('active');

      // Hide all forms and sections
      hideAllForms();
      const targetId = this.getAttribute('href').substring(2);
      hideAllSectionsExcept(targetId);

      // Show the targeted section
      showSection(targetId);

      // If login is not selected, show mainContent
      if (targetId !== 'Login') {
        showSection('MainContent');
      }
    });
  });

  // Toggling navigation drawer
  const hamburgerButton = document.getElementById('hamburgerButton');
  const navigationDrawer = document.getElementById('navigationDrawer');

  if (hamburgerButton && navigationDrawer) {
    hamburgerButton.addEventListener('click', () => {
      navigationDrawer.classList.toggle('open');
    });
  }

  const navLinks = document.querySelectorAll('.app-bar__navigation a');

  navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const targetId = link.getAttribute('href').substring(2);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
        navigationDrawer.classList.remove('open');
      }
    });
  });

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
  // Event listener for sign up link
if (signUpLink) {
  signUpLink.addEventListener('click', function(event) {
    event.preventDefault();
    hideAllForms();
    document.getElementById('signup-form').style.display = 'block';
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
  hideAllSectionsExceptLogin();
  showSection('Login');

  // Pagination logic
  const videosPerPage = 3;
  let currentPage = 1;

  const videoItems = document.querySelectorAll('.video-item');
  const totalPages = Math.ceil(videoItems.length / videosPerPage);

  const prevButton = document.getElementById('prev');
  const nextButton = document.getElementById('next');
  const currentPageIndicator = document.getElementById('current');

  const updatePagination = () => {
    // Hide all videos
    videoItems.forEach(item => item.classList.add('hidden'));

    // Show videos for the current page
    const start = (currentPage - 1) * videosPerPage;
    const end = start + videosPerPage;
    for (let i = start; i < end && i < videoItems.length; i++) {
      videoItems[i].classList.remove('hidden');
    }

    // Update pagination buttons state
    currentPageIndicator.textContent = currentPage;
    prevButton.style.display = currentPage === 1 ? 'none' : 'inline';
    nextButton.style.display = currentPage === totalPages ? 'none' : 'inline';
  };

  if (prevButton && nextButton && currentPageIndicator) {
    prevButton.addEventListener('click', (event) => {
      event.preventDefault();
      if (currentPage > 1) {
        currentPage--;
        updatePagination();
      }
    });

    nextButton.addEventListener('click', (event) => {
      event.preventDefault();
      if (currentPage < totalPages) {
        currentPage++;
        updatePagination();
      }
    });

    // Initial call to setup the pagination
    updatePagination();
  }
});

function showForm(formId) {
  const form = document.getElementById(formId);
  if (form) {
    form.style.display = 'block';
  }
}