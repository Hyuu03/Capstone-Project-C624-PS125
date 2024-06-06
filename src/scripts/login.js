// Menunggu sampai DOM selesai dimuat
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM fully loaded and parsed');

  // Objek yang menyimpan referensi ke elemen formulir login dan signup
  const sections = {
    Login: document.getElementById('login-form'),
    SignUp: document.getElementById('signup-form')
  };

  // Fungsi untuk menampilkan formulir berdasarkan ID
  function showForm(formId) {
    console.log(`Menampilkan formulir: ${formId}`);
    for (const sectionId in sections) {
      if (sections.hasOwnProperty(sectionId)) {
        const section = sections[sectionId];
        // Menentukan apakah harus menampilkan atau menyembunyikan formulir
        section.style.display = sectionId === formId ? 'block' : 'none';
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

  // Menangani pengiriman formulir registrasi
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
        // Menjalankan registrasi dengan menggunakan objek TheHealthcareSourceUser
        const response = await TheHealthcareSourceUser.register(name, email, password, confirmPassword);
        if (response) {
          alert('Registrasi berhasil!');
          showForm('Login');
        }
      } catch (error) {
        console.error('Registrasi gagal:', error.message);
        alert('Registrasi gagal: ' + error.message);
      }
    });
  }

  // Menangani pengiriman formulir login
  const loginForm = document.getElementById('login-form');
  if (loginForm) {
    loginForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      console.log('Formulir Login dikirim');
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;

      try {
        // Menjalankan proses login dengan menggunakan objek TheHealthcareSourceUser
        const response = await TheHealthcareSourceUser.login(email, password);
        if (response) {
          alert('Login berhasil!');
        }
      } catch (error) {
        console.error('Login gagal:', error.message);
        alert('Login gagal: ' + error.message);
      }
    });
  }

  // Menambahkan event listener untuk tombol submit registrasi
  const submitRegistrationButton = document.getElementById('submit-registration');
  if (submitRegistrationButton) {
    submitRegistrationButton.addEventListener('click', function(event) {
      event.preventDefault();
      console.log('Tombol submit registrasi diklik');
      // Mendispatch event submit ke formulir registrasi
      registrationForm.dispatchEvent(new Event('submit'));
    });
  }

  // Menambahkan event listener untuk tombol submit login
  const submitLoginButton = document.getElementById('submit-login');
  if (submitLoginButton) {
    submitLoginButton.addEventListener('click', function(event) {
      event.preventDefault();
      console.log('Tombol submit login diklik');
      // Mendispatch event submit ke formulir login
      loginForm.dispatchEvent(new Event('submit'));
    });
  }

  // Menampilkan formulir login saat halaman dimuat
  showForm('Login');
});

// Objek tiruan untuk TheHealthcareSourceUser
const TheHealthcareSourceUser = {
  register: async (name, email, password, confirmPassword) => {
    console.log(`Mendaftarkan pengguna: ${name}, ${email}`);
    // Simulasi panggilan API dengan delay menggunakan Promise
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(true);
      }, 1000);
    });
  },
  login: async (email, password) => {
    console.log(`Login pengguna: ${email}`);
    // Simulasi panggilan API dengan delay menggunakan Promise
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email === "user@example.com" && password === "password123") {
          resolve(true);
        } else {
          reject(new Error("Email atau password salah"));
        }
      }, 1000);
    });
  }
};
