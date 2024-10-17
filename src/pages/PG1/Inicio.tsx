import Card from "../../components/Componentes Inicio/Card";
import CartasServicios from "../../components/Componentes Inicio/CartasServicios";
import OnCard from "../../components/Componentes Inicio/OnCards";
import Footer from "../../components/Generales/Footer";
import { NavBar } from "../../components/Generales/NavBar";

export default function Inicio() {
  return (
    <div style={{ overflow: "hidden" }}>
      <NavBar />
      <div style={{ marginBottom: "5%" }}>
        <Card />
      </div>
      <div style={{ marginBottom: "6%" }}>
        <h1 style={{ textAlign: "center", color: "blue" }}>
          Servicios de MS Diseño y Publicidad
        </h1>
      </div>
      <CartasServicios />
      <div style={{ marginTop: "3.3%", marginBottom: "13%" }}>
        <OnCard />
      </div>
      <Footer />
    </div>
  );
}
