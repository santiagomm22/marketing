import { NavBar } from "../../components/Generales/NavBar";
import CardTop from "../../components/Componentes Quiensomos/CardTop";
import CardServicios from "../../components/Componentes Quiensomos/CardServicios";
import Footer from "../../components/Generales/Footer";

export default function QuienSomos() {
  return (
    <div>
      <NavBar />
      <CardTop />
      <div style={{ marginTop: "23%", marginBottom: "11%" }}>
        <CardServicios />
      </div>
      <Footer />
    </div>
  );
}
