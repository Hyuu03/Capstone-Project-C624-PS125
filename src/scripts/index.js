import "regenerator-runtime"; // Mengimpor modul runtime untuk mendukung penggunaan async/await di lingkungan yang tidak mendukungnya secara native
import "../styles/style.css"; // Mengimpor file CSS utama untuk mengatur gaya tampilan
import "../styles/responsive.css"; // Mengimpor file CSS untuk tampilan responsif
import "./beranda"; // Mengimpor modul beranda
import "./edukasi"; // Mengimpor modul edukasi
import "./informasi-obat"; // Mengimpor modul informasi obat
import "./login"; // Mengimpor modul login
import "./main"; // Mengimpor modul main
import "./medicines"; // Mengimpor modul medicines
import "./kelola-obat";

// Menunggu hingga seluruh dokumen dimuat
document.addEventListener("DOMContentLoaded", () => {
  // Mendapatkan elemen menu dan section berdasarkan ID
  const menuItems = document.querySelectorAll(
    ".app-bar .app-bar__navigation ul li a"
  );
  const sections = {
    Beranda: document.getElementById("Beranda"),
    "Informasi-Obat": document.getElementById("Informasi-Obat"),
    Edukasi: document.getElementById("Edukasi"),
    Login: document.getElementById("login-form"),
    MainContent: document.getElementById("mainContent"),
    Kelolaobat: document.getElementById('Kelolaobat')
  };

  // Fungsi untuk menyembunyikan semua form
  const hideAllForms = () => {
    document.querySelectorAll(".login-form, .signup-form").forEach((form) => {
      form.style.display = "none";
    });
  };

  // Fungsi untuk menyembunyikan semua section kecuali section yang ditentukan
  const hideAllSectionsExcept = (exceptSection) => {
    Object.entries(sections).forEach(([key, section]) => {
      if (key !== exceptSection && section) {
        section.style.display = "none";
      }
    });
  };

  // Fungsi untuk menampilkan section yang ditentukan
  const showSection = (sectionId) => {
    const section = sections[sectionId];
    if (section) {
      section.style.display = "block";
    }
  };

  // Event listener untuk item menu
  menuItems.forEach((item) => {
    item.addEventListener("click", function (event) {
      event.preventDefault(); // Mencegah aksi default dari elemen link

      // Menghapus kelas 'active' dari semua item menu
      menuItems.forEach((i) => i.classList.remove("active"));

      // Menambahkan kelas 'active' ke item menu yang diklik
      this.classList.add("active");

      // Menyembunyikan semua form dan section
      hideAllForms();
      const targetId = this.getAttribute("href").substring(2); // Mengambil ID target dari atribut href
      hideAllSectionsExcept(targetId);

      // Menampilkan section yang ditargetkan
      showSection(targetId);

      // Jika yang dipilih bukan login, menampilkan mainContent
      if (targetId !== "Login") {
        showSection("MainContent");
      }
    });
  });

  // Mengaktifkan toggle untuk navigation drawer
  const hamburgerButton = document.getElementById("hamburgerButton");
  const navigationDrawer = document.getElementById("navigationDrawer");

  if (hamburgerButton && navigationDrawer) {
    hamburgerButton.addEventListener("click", () => {
      navigationDrawer.classList.toggle("open"); // Mengubah kelas 'open' pada navigation drawer
    });
  }

  // Menambahkan event listener untuk link navigasi
  const navLinks = document.querySelectorAll(".app-bar__navigation a");

  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault(); // Mencegah aksi default dari elemen link
      const targetId = link.getAttribute("href").substring(2); // Mengambil ID target dari atribut href
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" }); // Menggulung tampilan ke section yang ditargetkan dengan efek smooth
        navigationDrawer.classList.remove("open"); // Menutup navigation drawer
      }
    });
  });
});

