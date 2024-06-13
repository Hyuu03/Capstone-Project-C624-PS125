const Beranda = {
  async render() {
    return `
        <section id="Beranda">
        <div class="hero">
          <div class="TampilAwal">
            <h1>Welcome to the Health and Medicine Website</h1>
            <p>
              Halo! Selamat datang di platform kesehatan kami. Temukan informasi terkini tentang kesehatan dan obat-obatan dengan mudah di sini. Dapatkan artikel edukatif, tips kesehatan, dan ulasan obat yang akurat dan relevan. Mari bersama mencapai kesehatan optimal dengan dukungan dari kami. Selamat menjelajah dan semoga bermanfaat!
            </p>
          </div>
        </div>

        <div class="obat">
          <h2 class="heading">Informasi Obat</h2>
          <div class="groupObat">
            <div class="jenisObat">
              <a href="#">
                <div class="ellipse"></div>
                <div class="text">Sakit A</div>
              </a>
            </div>
            <div class="jenisObat">
              <a href="#">
                <div class="ellipse"></div>
                <div class="text">Sakit A</div>
              </a>
            </div>
            <div class="jenisObat">
              <a href="#">
                <div class="ellipse"></div>
                <div class="text">Sakit A</div>
              </a>
            </div>
            <div class="jenisObat">
              <a href="#">
                <div class="ellipse"></div>
                <div class="text">Sakit A</div>
              </a>
            </div>
          </div>

          <div class="lihat-semua">
            <div class="containerText">
              <a href="#/informasi">
                <p>Lihat Semua</p>
              </a>
            </div>
          </div>
        </div>

        <div class="edukasi">
          <div class="judul">
            <h2 class="heading2">Edukasi</h2>
            <a href="#/edukasi">Lihat Semua</a>
          </div>

          <div class="groupEdukasi">
            <div class="VideoEdukasi">
              <a href="https://youtu.be/vGIGTX0x46Q?si=F7hp0uMtwzzXZCce">
                <img src="./images/Edukasi-Tentang-Obat-1.jpg" alt="Video 1" />
                <h3>Peran Obat dalam Menghancurkan Penyakit</h3>
              </a>
            </div>

            <div class="VideoEdukasi">
              <a href="https://youtu.be/3rmwhearFKU?si=a0wUmFOIg8Yovc5G">
                <img src="./images/obat-generik-dan-obat-paten.jpg" alt="Video 2" />
                <h3>Judul Video 2</h3>
              </a>
            </div>

            <div class="VideoEdukasi">
              <a href="https://youtu.be/URIDZtdDti0?si=ziKM8F09zjQi5xmn">
                <img src="./images/obat-campur-campur.jpg" alt="Video 3" />
                <h3>Boleh gk yah minum obat asal asalan?</h3>
              </a>
            </div>

            <div class="VideoEdukasi">
              <a href="https://youtu.be/Q7ozaVytNo4?si=5xwRyAXQWBHnTvct">
                <img src="./images/fakta-mitos-remaja.jpg" alt="Video 4" />
                <h3>Judul mitos atau fakta yah?</h3>
              </a>
            </div>
          </div>
        </div>
      </section>
      `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default Beranda;
