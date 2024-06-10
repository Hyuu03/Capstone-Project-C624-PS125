// Event listener untuk memastikan DOM sudah sepenuhnya dimuat sebelum menjalankan script
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM fully loaded and parsed');

  // Objek yang berisi referensi ke formulir login dan signup
  const sections = {
    Login: document.getElementById('login-form'),
    SignUp: document.getElementById('signup-form')
  };

  // Fungsi untuk menampilkan formulir yang sesuai berdasarkan formId yang diberikan
  function showForm(formId, email = '', password = '') {
    console.log(`Menampilkan formulir: ${formId}`);
    for (const sectionId in sections) {
      if (sections.hasOwnProperty(sectionId)) {
        const section = sections[sectionId];
        // Menampilkan formulir yang dipilih dan menyembunyikan yang lainnya
        section.style.display = sectionId === formId ? 'block' : 'none';
      }
    }
    // Jika formulir login yang ditampilkan, isi input email dan password jika ada
    if (formId === 'Login') {
      const emailInput = document.getElementById('email');
      const passwordInput = document.getElementById('password');
      if (emailInput && passwordInput) {
        emailInput.value = email;
        passwordInput.value = password;
      }
    }
  }

  // Menambahkan event listener untuk link Sign Up
  const signUpLink = document.getElementById('signUpLink');
  if (signUpLink) {
    signUpLink.addEventListener('click', function(event) {
      event.preventDefault();
      console.log('Link Sign Up diklik');
      showForm('SignUp');
    });
  }

  // Menambahkan event listener untuk link Sign In
  const signInLink = document.getElementById('signInLink');
  if (signInLink) {
    signInLink.addEventListener('click', function(event) {
      event.preventDefault();
      console.log('Link Sign In diklik');
      showForm('Login');
    });
  }

  // Menambahkan event listener untuk formulir registrasi saat dikirim
  const registrationForm = document.getElementById('signup-form');
  if (registrationForm) {
    registrationForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      console.log('Formulir Sign Up dikirim');
      // Mengambil nilai input dari formulir registrasi
      const name = document.getElementById('new-name').value;
      const email = document.getElementById('new-email').value;
      const password = document.getElementById('new-password').value;
      const confirmPassword = document.getElementById('confirm-password').value;

      // Validasi password dan konfirmasi password harus sama
      if (password !== confirmPassword) {
        alert('Password dan Konfirmasi Password tidak cocok.');
        return;
      }

      try {
        // Menyimpan email dan password ke localStorage sebagai simulasi registrasi
        localStorage.setItem('registeredEmail', email);
        localStorage.setItem('registeredPassword', password);

        alert('Registrasi berhasil!');
        showForm('Login', email, password); // Menampilkan formulir login dengan mengisi email dan password
        
        // Setelah login berhasil, ubah tampilan menjadi logo "user.jpg"
        const loginLink = document.getElementById('loginLink');
        if (loginLink) {
          loginLink.innerHTML = '<img src="user.jpg" alt="User" style="width: 80px; height: auto;">';
          // Sembunyikan tulisan login
          loginLink.style.color = 'transparent';
          // Sembunyikan latar belakang login
          loginLink.style.background = 'none';
        }
        
      } catch (error) {
        console.error('Registrasi gagal:', error.message);
        alert('Registrasi gagal: ' + error.message);
      }
    });
  }

  // Menambahkan event listener untuk formulir login saat dikirim
  const loginForm = document.getElementById('login-form');
  if (loginForm) {
    loginForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      console.log('Formulir Login dikirim');
      // Mengambil nilai input dari formulir login
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;

      // Mengambil data email dan password yang terdaftar dari localStorage
      const registeredEmail = localStorage.getItem('registeredEmail');
      const registeredPassword = localStorage.getItem('registeredPassword');

      // Memeriksa kecocokan email dan password yang dimasukkan dengan yang terdaftar
      if (email === registeredEmail && password === registeredPassword) {
        alert('Sign in berhasil!');

        // Ubah tampilan menjadi logo "user.jpg"
        const loginLink = document.getElementById('loginLink');
        if (loginLink) {
          loginLink.innerHTML = '<img src="user.jpg" alt="User" style="width: 80px; height: auto;">';
          // Sembunyikan tulisan login
          loginLink.style.color = 'transparent';
          // Sembunyikan latar belakang login
          loginLink.style.background = 'none';
        }
      } else {
        alert('Email atau password salah');
      }
    });
  }

  // Menambahkan event listener untuk tombol submit registrasi
  const submitRegistrationButton = document.getElementById('submit-registration');
  if (submitRegistrationButton) {
    submitRegistrationButton.addEventListener('click', function(event) {
      event.preventDefault();
      console.log('Tombol submit registrasi diklik');
      // Memicu event submit pada formulir registrasi
      registrationForm.dispatchEvent(new Event('submit'));
    });
  }

  // Menambahkan event listener untuk tombol submit login
  const submitLoginButton = document.getElementById('submit-login');
  if (submitLoginButton) {
    submitLoginButton.addEventListener('click', async function(event) {
      event.preventDefault();
      console.log('Tombol submit login diklik');
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      
      if (email && password) {
        // Memeriksa kecocokan email dan password yang dimasukkan dengan yang terdaftar
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

  // Menampilkan formulir login sebagai default
  showForm('Login');
});


//logo login
