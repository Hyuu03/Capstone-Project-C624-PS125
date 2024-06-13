const EditObat = {
    async render() {
      return `
        <div class="containerEdit">
        <h1>Kelola Data Obat</h1>
        <h2>Edit Obat</h2>
        <form class="form-container">
          <label for="nama-obat">Nama Obat</label>
          <input type="text" id="nama-obat" name="nama-obat" />

          <label for="class_therapy">Class Therapy</label>
          <input type="text" id="class_therapy" name="class_therapy" />

          <label for="subclass_therapy1">Subclass Therapy 1</label>
          <input type="text" id="indikasi-umum" name="indikasi-umum" />

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
          <input
            type="text"
            id="maximum_prescription"
            name="maximum_prescription"
          />

          <div class="buttons">
            <button type="submit" class="btn-tambah">Tambah</button>
            <button type="button" class="btn-batal">Batal</button>
          </div>
        </form>
      </div>
      `;
    },
   
    async afterRender() {
      // Fungsi ini akan dipanggil setelah render()
    },
  };
   
  export default EditObat;