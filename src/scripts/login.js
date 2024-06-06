document.addEventListener('DOMContentLoaded', () => {
  const sections = {
    Login: document.getElementById('login-form'),
    SignUp: document.getElementById('signup-form')
  };

  // Fungsi untuk menampilkan form
  function showForm(formId) {
    for (const sectionId in sections) {
      if (sections.hasOwnProperty(sectionId)) {
        const section = sections[sectionId];
        section.style.display = sectionId === formId ? 'block' : 'none';
      }
    }
  }

  // Tombol Sign Up
  const signUpLink = document.getElementById('signUpLink');
  if (signUpLink) {
    signUpLink.addEventListener('click', function(event) {
      event.preventDefault();
      showForm('SignUp');
    });
  }

  // Tombol Sign In
  const signInLink = document.getElementById('signInLink');
  if (signInLink) {
    signInLink.addEventListener('click', function(event) {
      event.preventDefault();
      showForm('Login');
    });
  }

  // Penanganan submit form registrasi
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
        alert('Registrasi berhasil!');
        showForm('Login'); // Tampilkan form login setelah registrasi berhasil
      }
    });
  }

  // Penanganan submit form login
  const loginForm = document.getElementById('login-form');
  if (loginForm) {
    loginForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;

      const response = await TheHealthcareSourceUser.login(email, password);
      if (response) {
        alert('Login berhasil!');
        // Redirect ke halaman lain atau lakukan tindakan lain setelah login berhasil
      }
    });
  }

  // Menampilkan form login secara default saat halaman dimuat
  showForm('Login');
});