import NavBar from "../../components/Generales/NavBar";
import FormularioContactar from "../../components/Componentes Contactar/FormularioContactar";
import Footer from "../../components/Generales/Footer";

export default function Contactar() {
  return (
    <div>
      <NavBar />
      <FormularioContactar />
      <div style={{ marginTop: "30%" }}>
        <Footer />
      </div>
    </div>
  );
}
