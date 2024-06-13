import Beranda from "../views/pages/beranda";
import InformasiObat from "../views/pages/infomasiObat";
import Edukasi from "../views/pages/edukasi";
import Login from "../views/pages/login";
import Register from "../views/pages/register";
import Dashboard from "../views/pages/dashboard";
import TambahObat from "../views/pages/tambahObat";
import EditObat from "../views/pages/editObat";

const routes = {
  '/': Beranda, // default page
  '/informasiobat': InformasiObat,
  '/edukasi': Edukasi,
  '/login': Login,
  '/register': Register,
  '/dashboard': Dashboard,
  '/tambahobat': TambahObat,
  '/editobat': EditObat,
  //   "/detail/:id": Detail,
};

export default routes;
