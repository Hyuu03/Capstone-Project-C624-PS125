import TheHealthcareSourceMedicine from "./data/healthcaredb-source-medicine";

// Komponen Daftar Obat (Dashboard)

document.addEventListener('DOMContentLoaded', () => { // Menunggu hingga seluruh konten halaman selesai dimuat
  const sections = { // Mendefinisikan objek untuk menyimpan referensi ke elemen-elemen dengan ID 'kelola'
    Kelolaobat: document.getElementById('Kelolaobat')
  };

  const showSection = (sectionId) => { // Fungsi untuk menampilkan bagian yang sesuai dengan ID yang diberikan
    const section = sections[sectionId];
    if (section) {
      section.style.display = 'block'; // Mengubah gaya tampilan elemen menjadi 'block' agar terlihat
    }
  };

  const hideAllSectionsExcept = (exceptSection) => { // Fungsi untuk menyembunyikan semua bagian kecuali bagian yang dikecualikan
    Object.entries(sections).forEach(([key, section]) => { // Melakukan iterasi pada setiap pasangan kunci dan nilai dalam objek sections
      if (key !== exceptSection && section) { // Jika kunci tidak sama dengan bagian yang dikecualikan dan elemen tersebut ada
        section.style.display = 'none'; // Mengubah gaya tampilan elemen menjadi 'none' agar tidak terlihat
      }
    });
  };

  // Inisialisasi tampilan default
  hideAllSectionsExcept('Kelolaobat'); // Hanya menampilkan bagian 'kelola' pada awalnya
});

const accessToken = localStorage.getItem('accessToken');
export const renderDashboard = (medicines) => {
  const dashboardContainer = document.createElement('div');
  dashboardContainer.classList.add('table-container');

  if (!medicines || medicines.length === 0) {
    dashboardContainer.innerHTML = `
      <h1>Kelola Data Obat</h1>
      <div class="search-add-container">
        <div class="search-bar">
          <input type="text" placeholder="Cari obat" />
          <button class="search-btn">
            <i class="fa fa-search" style="font-size: 18px"></i>
          </button>
        </div>
        <button class="add-btn">+ Tambah Obat</button>
      </div>
      <div class="no-data-message">
        <p>Tidak ada data obat yang tersedia.</p>
        <button class="refresh-btn">Muat Ulang</button>
      </div>
    `;
    // Tambahkan event listener untuk refresh button
const refreshButton = dashboardContainer.querySelector('.refresh-btn');
refreshButton.addEventListener('click', () =>{
  showDashboard();
})
  } else {
    dashboardContainer.innerHTML = `
      <h1>Kelola Data Obat</h1>
      <div class="search-add-container">
        <div class="search-bar">
          <input type="text" class="search-text" placeholder="Cari obat" />
          <button class="search-btn">
            <i class="fa fa-search" style="font-size: 18px"></i>
          </button>
        </div>
        <button class="add-btn">+ Tambah Obat</button>
      </div>

      <table>
        <thead>
          <tr>
            <th>Id Obat</th>
            <th>Nama Obat</th>
            <th>Class Therapy</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          ${medicines.map(medicine => `
            <tr>
            <td>${medicine.id}</td>
            <td>${medicine.name}</td>
              <td>${medicine.class_therapy}</td>
              <td>
                <button class="edit-btn" id="${medicine.id}">Edit</button>
                <button class="delete-btn" id="${medicine.id}">Hapus</button>
              </td>
            </tr>
          `).join('')}
        </tbody>
      </table>

      <div class="paginationDashboard">
        <span>Showing 1 - 10 results of ${medicines.length}</span>
        <div class="paginationDashboard-buttons">
          <button>&lt;</button>
          <span>Page 01</span>
          <button>&gt;</button>
        </div>
      </div>
    `;
  }
    // Tambahkan event listener untuk tombol Tambah Obat
    const addButton = dashboardContainer.querySelector('.add-btn');
    addButton.addEventListener('click', () => {
      showTambahObatForm();
    });

// Tambahkan event listener untuk tombol pencarian
const searchButton = dashboardContainer.querySelector('.search-btn');
const searchInput = dashboardContainer.querySelector('.search-text');

if (searchButton && searchInput) {
  searchButton.addEventListener('click', (event) => {
    event.preventDefault();
    handleSearch(searchInput);
  });

}

async function handleSearch(inputElement) {
  const searchText = inputElement.value;
  const params = {
    search: searchText
  };
  try {
    await showDashboard(params);
  } catch (error) {
    console.error('Pencarian gagal:', error);
    alert('Terjadi kesalahan saat mencari data obat. Silakan coba lagi.');
  }
}


      // Tambahkan event listener untuk tombol "Edit"
  dashboardContainer.querySelectorAll('.edit-btn').forEach(button => {
    button.addEventListener('click', async (event) => {
      const medicineId = parseInt(event.target.id);
      const medicine = await TheHealthcareSourceMedicine.getDetailMedicineById(medicineId)
      showEditObatForm(medicine);
    });
  });

  // Tambahkan event listener untuk tombol "Hapus"
dashboardContainer.querySelectorAll('.delete-btn').forEach(button => {
  button.addEventListener('click', async (event) => {
    const medicineId = parseInt(event.target.id);
    const confirmed = confirm('Apakah Anda yakin ingin menghapus obat ini?');
    if (confirmed) {
      const response = await TheHealthcareSourceMedicine.deleteMedicineById(medicineId, accessToken);
      if (response) {
        alert('Obat berhasil dihapus');
        showDashboard();
      } else {
        alert('Gagal menghapus obat');
      }
    }
  });
});
  

  return dashboardContainer;
};

  
// Komponen Tambah Obat
export const renderTambahObat = () => {
    const tambahContainer = document.createElement('div');
    tambahContainer.classList.add('containerTambah');
  
    tambahContainer.innerHTML = `
      <h1>Kelola Data Obat</h1>
      <h2>Tambah Obat</h2>
      <form id="tambah-obat-form">
        <label for="nama-obat">Nama Obat</label>
        <input type="text" id="nama-obat" name="nama-obat" />
  
        <label for="class_therapy">Class Therapy</label>
        <input type="text" id="class_therapy" name="class_therapy" />
  
        <label for="subclass_therapy1">Subclass Therapy 1</label>
        <input type="text" id="subclass_therapy1" name="indikasi-umum" />
  
        <label for="subclass_therapy2">Subclass Therapy 2</label>
        <input type="text" id="subclass_therapy2" name="subclass_therapy2" />
  
        <label for="subclass_therapy3">Subclass Therapy 3</label>
        <input type="text" id="subclass_therapy3" name="subclass_therapy3" />
  
        <label for="power">Power</label>
        <input type="text" id="power" name="power" />
  
        <label for="unit">Unit</label>
        <input type="text" id="unit" name="unit" />
  
        <label for="type">Type</label>
        <input type="text" id="type" name="type" />
  
        <label for="composition">Composition</label>
        <input type="text" id="composition" name="composition" />
  
        <label for="drug_restrictions">Drug Restrictions</label>
        <input type="text" id="drug_restrictions" name="drug_restrictions" />
  
        <label for="maximum_prescription">Maximum Prescription</label>
        <input type="text" id="maximum_prescription" name="maximum_prescription" />
  
        <div class="buttons">
          <button type="submit" class="btn-tambah">Tambah</button>
          <button type="button" class="btn-batal">Batal</button>
        </div>
      </form>
    `;
      // Tambahkan event listener untuk tombol Batal
  const batalButton = tambahContainer.querySelector('.btn-batal');
  batalButton.addEventListener('click', () => {
    showDashboard();
  });

    // Tambahkan event listener untuk pengiriman formulir
    const tambahObatForm = tambahContainer.querySelector('#tambah-obat-form');
    tambahObatForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      const name = document.querySelector('#nama-obat').value;
      const classTherapy = document.querySelector('#class_therapy').value;
      const subClassTherapy1 = document.querySelector('#subclass_therapy1').value;
      const subClassTherapy2 = document.querySelector('#subclass_therapy2').value;
      const subClassTherapy3 = document.querySelector('#subclass_therapy3').value;
      const power = parseFloat(document.querySelector('#power').value);
      const unit = document.querySelector('#unit').value;
      const type = document.querySelector('#type').value;
      const composition = document.querySelector('#composition').value;
      const drugRestrictions = document.querySelector('#drug_restrictions').value;
      const maximumPrescription = document.querySelector('#maximum_prescription').value;

      const medicineData = {
        name,
        classTherapy,
        subClassTherapy1,
        subClassTherapy2,
        subClassTherapy3,
        power,
        unit,
        type,
        composition,
        drugRestrictions,maximumPrescription
      }
  
      // Tambahkan logika untuk mengirim data ke server
      const response = await TheHealthcareSourceMedicine.createMedicine(medicineData, accessToken);
      if (response) {
        alert('Obat berhasil ditambahkan');
        showDashboard();
      } else {
        alert('Gagal menambahkan obat');
      }
    });
  
    return tambahContainer;
  };

  // Fungsi untuk menampilkan form tambah obat
export const showTambahObatForm = () => {
  const kelolaObatSection = document.getElementById('Kelolaobat');
  kelolaObatSection.innerHTML = '';
  kelolaObatSection.appendChild(renderTambahObat());
};

// Fungsi untuk menampilkan form edit obat
export const showEditObatForm = (medicine) => {
  const kelolaObatSection = document.getElementById('Kelolaobat');
  kelolaObatSection.innerHTML = '';
  kelolaObatSection.appendChild(renderEditObat(medicine));
};

// Fungsi untuk menampilkan dashboard
export const showDashboard = async (params = {}) => {
  const kelolaObatSection = document.getElementById('Kelolaobat');
  kelolaObatSection.innerHTML = '';
  const medicines = await TheHealthcareSourceMedicine.getMedicinesDoctor(params,accessToken);
  console.log(medicines)
  if (!medicines) {
    throw new Error('Gagal mengambil data obat');
  }
  kelolaObatSection.appendChild(renderDashboard(medicines.medicines));
};
  
  // Komponen Edit Obat
  export const renderEditObat = (medicine) => {
    const editContainer = document.createElement('div');
    editContainer.classList.add('containerEdit');
  
    editContainer.innerHTML = `
      <h1>Kelola Data Obat</h1>
      <h2>Edit Obat</h2>
      <form id="edit-obat-form">
        <label for="nama-obat">Nama Obat</label>
        <input type="text" id="nama-obat" name="nama-obat" value="${medicine.name}" />
  
        <label for="class_therapy">Class Therapy</label>
        <input type="text" id="class_therapy" name="class_therapy" value="${medicine.class_therapy}" />
  
        <label for="subclass_therapy1">Subclass Therapy 1</label>
        <input type="text" id="subclass_therapy1" name="subclass_therapy1" value="${medicine.subclass_therapy1}" />
  
        <label for="subclass_therapy2">Subclass Therapy 2</label>
        <input type="text" id="subclass_therapy2" name="subclass_therapy2" value="${medicine.subclass_therapy2}" />
  
        <label for="subclass_therapy3">Subclass Therapy 3</label>
        <input type="text" id="subclass_therapy3" name="subclass_therapy3" value="${medicine.subclass_therapy3}" />
  
        <label for="power">Power</label>
        <input type="text" id="power" name="power" value="${medicine.power}" />
  
        <label for="unit">Unit</label>
        <input type="text" id="unit" name="unit" value="${medicine.unit}" />
  
        <label for="type">Type</label>
        <input type="text" id="type" name="type" value="${medicine.type}" />
  
        <label for="composition">Composition</label>
        <input type="text" id="composition" name="composition" value="${medicine.composition}" />
  
        <label for="drug_restrictions">Drug Restrictions</label>
        <input type="text" id="drug_restrictions" name="drug_restrictions" value="${medicine.drug_restrictions}" />
  
        <label for="maximum_prescription">Maximum Prescription</label>
        <input type="text" id="maximum_prescription" name="maximum_prescription" value="${medicine.maximum_prescription}" />
  
        <div class="buttons">
          <button type="submit" class="btn-simpan">Simpan</button>
          <button type="button" class="btn-batal">Batal</button>
        </div>
      </form>
    `;
  
    // Tambahkan event listener untuk tombol Batal
    const batalButton = editContainer.querySelector('.btn-batal');
    batalButton.addEventListener('click', () => {
      showDashboard();
    });
  
    // Tambahkan event listener untuk pengiriman formulir
    const editObatForm = editContainer.querySelector('#edit-obat-form');
    editObatForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      const name = document.querySelector('#nama-obat').value;
      const classTherapy = document.querySelector('#class_therapy').value;
      const subClassTherapy1 = document.querySelector('#subclass_therapy1').value;
      const subClassTherapy2 = document.querySelector('#subclass_therapy2').value;
      const subClassTherapy3 = document.querySelector('#subclass_therapy3').value;
      const power = parseFloat(document.querySelector('#power').value);
      const unit = document.querySelector('#unit').value;
      const type = document.querySelector('#type').value;
      const composition = document.querySelector('#composition').value;
      const drugRestrictions = document.querySelector('#drug_restrictions').value;
      const maximumPrescription = document.querySelector('#maximum_prescription').value;

      const medicineData = {
        name,
        classTherapy,
        subClassTherapy1,
        subClassTherapy2,
        subClassTherapy3,
        power,
        unit,
        type,
        composition,
        drugRestrictions,maximumPrescription
      }

  
      // Tambahkan logika untuk mengirim data ke server
      const response = await TheHealthcareSourceMedicine.updateMedicine(medicine.id, medicineData, accessToken);
      if (response) {
        alert('Obat berhasil diperbarui');
        showDashboard();
      } else {
        alert('Gagal memperbarui obat');
      }
    });
  
    return editContainer;
  };
  
  