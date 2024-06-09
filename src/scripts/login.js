document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM fully loaded and parsed');

  const sections = {
    Login: document.getElementById('login-form'),
    SignUp: document.getElementById('signup-form')
  };

  function showForm(formId, email = '', password = '') {
    console.log(`Menampilkan formulir: ${formId}`);
    for (const sectionId in sections) {
      if (sections.hasOwnProperty(sectionId)) {
        const section = sections[sectionId];
        section.style.display = sectionId === formId ? 'block' : 'none';
      }
    }
    if (formId === 'Login') {
      const emailInput = document.getElementById('email');
      const passwordInput = document.getElementById('password');
      if (emailInput && passwordInput) {
        emailInput.value = email;
        passwordInput.value = password;
      }
    }
  }

  const signUpLink = document.getElementById('signUpLink');
  if (signUpLink) {
    signUpLink.addEventListener('click', function(event) {
      event.preventDefault();
      console.log('Link Sign Up diklik');
      showForm('SignUp');
    });
  }

  const signInLink = document.getElementById('signInLink');
  if (signInLink) {
    signInLink.addEventListener('click', function(event) {
      event.preventDefault();
      console.log('Link Sign In diklik');
      showForm('Login');
    });
  }

  const registrationForm = document.getElementById('signup-form');
  if (registrationForm) {
    registrationForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      console.log('Formulir Sign Up dikirim');
      const name = document.getElementById('new-name').value;
      const email = document.getElementById('new-email').value;
      const password = document.getElementById('new-password').value;
      const confirmPassword = document.getElementById('confirm-password').value;

      if (password !== confirmPassword) {
        alert('Password dan Konfirmasi Password tidak cocok.');
        return;
      }

      try {
        // Simulasi registrasi dengan menambahkan email dan password ke localStorage
        localStorage.setItem('registeredEmail', email);
        localStorage.setItem('registeredPassword', password);

        alert('Registrasi berhasil!');
        showForm('Login', email, password); // Menampilkan formulir login dengan mengisi email dan password
      } catch (error) {
        console.error('Registrasi gagal:', error.message);
        alert('Registrasi gagal: ' + error.message);
      }
    });
  }

  const loginForm = document.getElementById('login-form');
  if (loginForm) {
    loginForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      console.log('Formulir Login dikirim');
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;

      // Mengambil data email dan password yang didaftarkan ketika sign up
      const registeredEmail = localStorage.getItem('registeredEmail');
      const registeredPassword = localStorage.getItem('registeredPassword');

      // Membandingkan email dan password yang dimasukkan dengan data yang didaftarkan
      if (email === registeredEmail && password === registeredPassword) {
        alert('Sign in berhasil!');
      } else {
        alert('Email atau password salah');
      }
    });
  }

  const submitRegistrationButton = document.getElementById('submit-registration');
  if (submitRegistrationButton) {
    submitRegistrationButton.addEventListener('click', function(event) {
      event.preventDefault();
      console.log('Tombol submit registrasi diklik');
      registrationForm.dispatchEvent(new Event('submit'));
    });
  }

  const submitLoginButton = document.getElementById('submit-login');
  if (submitLoginButton) {
    submitLoginButton.addEventListener('click', async function(event) {
      event.preventDefault();
      console.log('Tombol submit login diklik');
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      
      if (email && password) {
        // Membandingkan email dan password yang dimasukkan dengan data yang didaftarkan
        const registeredEmail = localStorage.getItem('registeredEmail');
        const registeredPassword = localStorage.getItem('registeredPassword');

        if (email === registeredEmail && password === registeredPassword) {
          alert('Sign in berhasil!');
        } else {
          alert('Email atau password salah');
        }
      } else {
        alert('Email dan password harus diisi');
      }
    });
  }

  showForm('Login');
});
