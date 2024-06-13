const Dashboard = {
    async render() {
      return `
        <div class="table-container">
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

        <table>
          <thead>
            <tr>
              <th>Nama Obat</th>
              <th>Id Obat</th>
              <th>Class Therapy</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Nama Obat</td>
              <td>0000000000</td>
              <td>Sakit</td>
              <td>
                <button class="edit-btn">Edit</button>
                <button class="delete-btn">Hapus</button>
              </td>
            </tr>

            <tr>
              <td>Nama Obat</td>
              <td>0000000000</td>
              <td>Sakit</td>
              <td>
                <button class="edit-btn">Edit</button>
                <button class="delete-btn">Hapus</button>
              </td>
            </tr>
          </tbody>
        </table>

        <div class="paginationDashboard">
          <span>Showing 1 - 10 results of 298</span>
          <div class="paginationDashboard-buttons">
            <button>&lt;</button>
            <span>Page 01</span>
            <button>&gt;</button>
          </div>
        </div>
      </div>
      `;
    },
   
    async afterRender() {
      // Fungsi ini akan dipanggil setelah render()
    },
  };
   
  export default Dashboard;