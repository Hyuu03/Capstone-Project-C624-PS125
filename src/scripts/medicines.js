import TheHealthcareSourceMedicine from "./data/healthcaredb-source-medicine";

document.addEventListener('DOMContentLoaded', async () => {
    const drugGrid = document.querySelector('.drug-grid');

    try {
        const medicinesData = await TheHealthcareSourceMedicine.getMedicines({ limit: 12, page: 1 });
        if (medicinesData) {
            const medicines = medicinesData.medicines; // Sesuaikan dengan struktur data yang diberikan
            medicines.forEach(medicine => {
                const medicineElement = document.createElement('div');
                medicineElement.className = 'medicine-item';
                medicineElement.innerHTML = `
                    <h3>${medicine.name}</h3>
                    <p><strong>Class Therapy:</strong> ${medicine.class_therapy}</p>
                    <p><strong>Drug Restrictions:</strong> ${medicine.drug_restrictions ? medicine.drug_restrictions : 'None'}</p>
                `;
                drugGrid.appendChild(medicineElement);
            });
        } else {
            drugGrid.innerHTML = '<p>Gagal mengambil data obat.</p>';
        }
    } catch (error) {
        drugGrid.innerHTML = '<p>Terjadi kesalahan saat mengambil data obat.</p>';
    }
});