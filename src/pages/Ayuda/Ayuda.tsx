import NavBar from "../../components/Generales/NavBar";
import LinksAyuda from "../../components/Componentes Ayuda/LinksAyuda";
import Footer from "../../components/Generales/Footer";

export default function Ayuda() {
  return (
    <div>
      <NavBar />
      <LinksAyuda />
      <div style={{ marginTop: "30%" }}>
        <Footer />
      </div>
    </div>
  );
}
