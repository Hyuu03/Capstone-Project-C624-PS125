import TheHealthcareSourceMedicine from "./data/healthcaredb-source-medicine";

document.addEventListener("DOMContentLoaded", async () => {
  const drugGrid = document.querySelector(".drug-grid");

  try {
    const medicinesData = await TheHealthcareSourceMedicine.getMedicines({
      limit: 12,
      page: 1,
    });
    if (medicinesData) {
      const medicines = medicinesData.medicines; // Sesuaikan dengan struktur data yang diberikan
      medicines.forEach((medicine) => {
        const medicineElement = document.createElement("div");
        medicineElement.className = "medicine-item";
        medicineElement.innerHTML = `
                    <h3>${medicine.name}</h3>
                    <p><strong>Class Therapy:</strong> ${medicine.class_therapy}</p>
                `;

        medicineElement.addEventListener("click", async () => {
          const detail =
            await TheHealthcareSourceMedicine.getDetailMedicineById(
              medicine.id
            );
          if (detail) {
            document.getElementById("popup-medicine-name").textContent =
              detail.name;
            document.getElementById("popup-class-therapy").textContent =
              detail.class_therapy;
            document.getElementById("popup-subclass_therapy1").textContent =
              detail.subclass_therapy1;
            document.getElementById("popup-subclass_therapy2").textContent =
              detail.subclass_therapy2;
            document.getElementById("popup-subclass_therapy3").textContent =
              detail.subclass_therapy3;
            document.getElementById("popup-power").textContent = detail.power;
            document.getElementById("popup-unit").textContent = detail.unit;
            document.getElementById("popup-type").textContent = detail.type;
            document.getElementById("popup-composition").textContent =
              detail.composition;
            document.getElementById("popup-drug_restrictions").textContent =
              detail.drug_restrictions;
            document.getElementById("popup-maximum_prescription").textContent =
              detail.maximum_prescription;
            // Tambahkan detail lain yang diperlukan

            document.getElementById("medicine-detail-popup").style.display =
              "flex";
          } else {
            alert("Gagal mengambil detail obat.");
          }
        });

        drugGrid.appendChild(medicineElement);
      });
    } else {
      drugGrid.innerHTML = "<p>Gagal mengambil data obat.</p>";
    }
  } catch (error) {
    drugGrid.innerHTML = "<p>Terjadi kesalahan saat mengambil data obat.</p>";
  }

  // Event listener untuk menutup popup
  document.querySelector(".close-button").addEventListener("click", () => {
    document.getElementById("medicine-detail-popup").style.display = "none";
  });

  // Event listener untuk menutup popup ketika klik di luar konten
  window.addEventListener("click", (event) => {
    const popup = document.getElementById("medicine-detail-popup");
    if (event.target === popup) {
      popup.style.display = "none";
    }
  });
});
