// Mengimpor modul TheHealthcareSourceMedicine dari file data/healthcaredb-source-medicine
import TheHealthcareSourceMedicine from "./data/healthcaredb-source-medicine";

// Menunggu sampai seluruh konten DOM termuat
document.addEventListener('DOMContentLoaded', async () => {
    // Mendapatkan elemen HTML dengan kelas 'drug-grid' yang akan digunakan untuk menampilkan data obat
    const drugGrid = document.querySelector('.drug-grid');

    try {
        // Memanggil fungsi getMedicines dari modul TheHealthcareSourceMedicine untuk mengambil data obat dengan limit 12 dan halaman 1
        const medicinesData = await TheHealthcareSourceMedicine.getMedicines({ limit: 12, page: 1 });

        // Mengecek apakah data obat berhasil diambil
        if (medicinesData) {
            const medicines = medicinesData.medicines; // Menyesuaikan dengan struktur data yang diberikan oleh API

            // Melakukan iterasi pada setiap obat dalam data obat
            medicines.forEach(medicine => {
                // Membuat elemen div baru untuk setiap item obat
                const medicineElement = document.createElement('div');
                medicineElement.className = 'medicine-item'; // Menambahkan kelas CSS untuk item obat

                // Menyusun konten HTML untuk item obat
                medicineElement.innerHTML = `
                    <h3>${medicine.name}</h3>
                    <p><strong>Class Therapy:</strong> ${medicine.class_therapy}</p>
                `;
                
                // Menambahkan elemen item obat ke dalam elemen drugGrid
                drugGrid.appendChild(medicineElement);
            });
        } else {
            // Menampilkan pesan kesalahan jika data obat gagal diambil
            drugGrid.innerHTML = '<p>Gagal mengambil data obat.</p>';
        }
    } catch (error) {
        // Menampilkan pesan kesalahan jika terjadi kesalahan saat mengambil data obat
        drugGrid.innerHTML = '<p>Terjadi kesalahan saat mengambil data obat.</p>';
    }
});
