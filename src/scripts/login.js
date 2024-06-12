import TheHealthcareSourceUser from "./data/healthcaredb-source-user";

// Event listener untuk memastikan DOM sudah sepenuhnya dimuat sebelum menjalankan script
document.addEventListener('DOMContentLoaded', async () => {
  const app_drawer = document.querySelector('.nav-ul');
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
        // Menjalankan registrasi dengan menggunakan objek TheHealthcareSourceUser
        const response = await TheHealthcareSourceUser.register(name, email, password, confirmPassword);
        if (response) {
          // alert('Registrasi berhasil!');
          showForm('Login');
        }
        
        // Setelah login berhasil, ubah tampilan menjadi logo "user.jpg"
        const loginLink = document.getElementById('loginLink');

        if (loginLink) {
          loginLink.innerHTML = '<img src="user.jpg" alt="User" style="width: 80px; height: auto;">';
          loginLink.style.display = 'none'
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
        // Menjalankan proses login dengan menggunakan objek TheHealthcareSourceUser
        const response = await TheHealthcareSourceUser.login(email, password);
        if (response) {
        const loginLink = document.getElementById('loginLink');
        if (loginLink){
          loginLink.style.display = 'none';
          window.location.reload();
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
      // Periksa apakah token akses masih valid
      const user = await TheHealthcareSourceUser.getUser();
      if (user) {
        console.log('Pengguna masih dalam kondisi login');
        const loginLink = document.getElementById('loginLink');
        if (loginLink) {
          loginLink.style.display = 'none'
          // Sembunyikan tulisan login
          loginLink.style.color = 'transparent';
          // Sembunyikan latar belakang login
          loginLink.style.background = 'none';
          loginForm.style.display = 'none';
          // Buat elemen <li> baru
          const liKelola = document.createElement('li');
          const liLogout = document.createElement('li');
          
          // Buat element href
          const kelolaObat = document.createElement('a');
          kelolaObat.setAttribute('href','#/kelola');
          kelolaObat.textContent = 'Kelola Obat';
          liKelola.appendChild(kelolaObat);
          app_drawer.appendChild(liKelola);

          // Buat elemen <button> baru
          const logoutButton = document.createElement('button');

          // Tambahkan kelas ke elemen <button>
          logoutButton.classList.add('logout-button');

          // Set atribut href untuk link
          logoutButton.textContent = 'Logout'; // Teks yang ditampilkan di dalam tombol

          // Tambahkan event listener untuk event klik
          logoutButton.addEventListener('click', async () => {
              try {
                  const response = await TheHealthcareSourceUser.logout();
                  window.location.reload();
                  if (response) {
                      window.location.href = '/login'; // Ganti '/login' dengan URL halaman login yang benar
                      
                  }
              } catch (error) {
                  console.error('Logout gagal:', error.message);
              }
          });

          // Masukkan elemen <button> ke dalam elemen <li>
          liLogout.appendChild(logoutButton);

          // Masukkan elemen <li> ke dalam .app-bar__navigation
          app_drawer.appendChild(liLogout);


        }
      } else {
        console.log('Pengguna perlu login kembali');
        loginForm.style.display = 'block';
        
        showForm('Login');
      }

// Menampilkan formulir login sebagai default jika pengguna belum login
if (!user) {
  showForm('Login');
}
  
});