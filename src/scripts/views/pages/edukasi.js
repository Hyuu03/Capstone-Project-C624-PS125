const Edukasi = {
  async render() {
    return `
          <section id="Edukasi" class="edukasi-menu">
        <div class="container">
          <h2>Video Edukasi Kesehatan</h2>
          <div class="video-grid">
            <!-- Video 1 -->
            <div class="video-item">
              <img src="./images/Edukasi-Tentang-Obat-1.jpg" alt="Video 1" />
              <h3>Peran Obat dalam Menghancurkan Penyakit</h3>
              <p>
                Mari perhatikan video ini karena penting loh untuk pengetahuan
                kita tentang peran obat yang harus kita ketahui:'
              </p>
              <a href="https://youtu.be/vGIGTX0x46Q?si=F7hp0uMtwzzXZCce"
                >Tonton Video 1 di YouTube</a
              >
            </div>

            <!-- Video 2 -->
            <div class="video-item">
              <img src="./images/obat-generik-dan-obat-paten.jpg" alt="Video 2" />
              <h3>Judul Video 2</h3>
              <p>
                Jadi kita harus tau nih obat-obtan yang mana yang dapat kita
                beli langsung dan mana obat yang harus dengan resep dokter
              </p>
              <a href="https://youtu.be/3rmwhearFKU?si=a0wUmFOIg8Yovc5G"
                >Tonton Video 2 di YouTube</a
              >
            </div>

            <!-- Video 3 -->
            <div class="video-item">
              <img src="./images/obat-campur-campur.jpg" alt="Video 3" />
              <h3>Boleh gk yah minum obat asal asalan?</h3>
              <p>
                Jangan minu obat campur campur yah karena obat yang
                campur-campur akan berakibat fatal dan berbahaya bagi hidup
                kita. mari lebih care terhadapt dir kita tentang pentingnya
                minum obat sesuai anjuran dokter. Karena kita gk belajar tentang
                kandungan obat dan tentang obat obatan. Banyak bahys deh kalo
                minum obat asal asalan dan campur campur :],
              </p>
              <a href="https://youtu.be/URIDZtdDti0?si=ziKM8F09zjQi5xmn"
                >Tonton Video 3 di YouTube</a
              >
            </div>

            <!-- Video 4 -->
            <div class="video-item">
              <img src="./images/fakta-mitos-remaja.jpg" alt="Video 4" />
              <h3>Judul mitos atau fakta yah?</h3>
              <p>
                Ini nih fakta dan mitos yang berkembang di kalangan masyarakat
                dari yang muda sampai yang tua. Yuk simak video di bawah ini
                dengan baik yah. Semoga kita gak salah lagi dan bisa membedakan
                mana yang fakta dan mitos karena itu penting loh.
              </p>
              <a href="https://youtu.be/Q7ozaVytNo4?si=5xwRyAXQWBHnTvct"
                >Tonton Video 4 di YouTube</a
              >
            </div>

            <!-- Video 5 -->
            <div class="video-item">
              <img src="./images/no-rokok.jpg" alt="Video 5" />
              <h3>Jangan Ngerokok Lagi Yahh</h3>
              <p>
                Buat kita nih yang masih suka merokok, ayuk jauhi ngerokok yuk.
                kita tahu bahayanya merokok dan kita juga sudah tau manfat
                menjauhi rokok. yok tonton video biar kita sehat dan orang orang
                di sekitar kita juga ikut sehat.
              </p>
              <a href="https://youtu.be/fUlfpFi1Dao?si=kzp6dOdc0faZOaF-"
                >Tonton Video 5 di YouTube</a
              >
            </div>

            <!-- Video 6 -->
            <div class="video-item">
              <img src="./images/8 cara.jpg" alt="Video 6" />
              <h3>8 Tips Kesehatan</h3>
              <p>
                Ini nih tips kesehatan yang mungkin banyak orang tau tapi sering
                lupa tau bahhkan sering dilupakan loh. Tolong jaga kesehatan
                yang karena kesehatan itu mahal banget guyss
              </p>
              <a href="https://youtu.be/_JtsswlZzPg?si=zrKFkuyESZSOvlwW"
                >Tonton Video 6 di YouTube</a
              >
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

export default Edukasi;
