const InformasiObat = {
  async render() {
    return `
          <section id="Informasi-Obat">
        <div class="obat2">
          <div class="search">
            <form action="#">
              <input type="text" placeholder="Search Courses" name="search" />
              <button>
                <i class="fa fa-search" style="font-size: 18px"></i>
              </button>
            </form>
          </div>
          <h2 class="heading2">Informasi Obat</h2>
          <div class="groupObat2">
            <div class="jenisObat">
              <a href="#">
                <div class="ellipse"></div>
                <div class="text2">Sakit A</div>
              </a>
            </div>
            <div class="jenisObat">
              <a href="#">
                <div class="ellipse"></div>
                <div class="text2">Sakit A</div>
              </a>
            </div>
            <div class="jenisObat">
              <a href="#">
                <div class="ellipse"></div>
                <div class="text2">Sakit A</div>
              </a>
            </div>
            <div class="jenisObat">
              <a href="#">
                <div class="ellipse"></div>
                <div class="text2">Sakit A</div>
              </a>
            </div>
            <div class="jenisObat">
              <a href="#">
                <div class="ellipse"></div>
                <div class="text2">Sakit A</div>
              </a>
            </div>
            <div class="jenisObat">
              <a href="#">
                <div class="ellipse"></div>
                <div class="text2">Sakit A</div>
              </a>
            </div>
            <div class="jenisObat">
              <a href="#">
                <div class="ellipse"></div>
                <div class="text2">Sakit A</div>
              </a>
            </div>
            <div class="jenisObat">
              <a href="#">
                <div class="ellipse"></div>
                <div class="text2">Sakit A</div>
              </a>
            </div>
            <div class="jenisObat">
              <a href="#">
                <div class="ellipse"></div>
                <div class="text2">Sakit A</div>
              </a>
            </div>
            <div class="jenisObat">
              <a href="#">
                <div class="ellipse"></div>
                <div class="text2">Sakit A</div>
              </a>
            </div>
            <div class="jenisObat">
              <a href="#">
                <div class="ellipse"></div>
                <div class="text2">Sakit A</div>
              </a>
            </div>
            <div class="jenisObat">
              <a href="#">
                <div class="ellipse"></div>
                <div class="text2">Sakit A</div>
              </a>
            </div>
          </div>
        </div>

        <div class="drug-list">
          <h2>Daftar Obat</h2>
          <div class="drug-grid"></div>
          <div class="pagination">
            <a href="#">&laquo;&laquo;</a>
            <a href="#">&lsaquo;</a>
            <a href="#" class="active">1</a>
            <a href="#">2</a>
            <a href="#">3</a>
            <a href="#">4</a>
            <a href="#">5</a>
            <span>....</span>
            <a href="#">16</a>
            <a href="#">17</a>
            <a href="#">18</a>
            <a href="#">19</a>
            <a href="#">20</a>
            <a href="#">&rsaquo;</a>
            <a href="#">&raquo;&raquo;</a>
          </div>
        </div>
      </section>
    `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default InformasiObat;
