import NavBar from "../../components/Generales/NavBar";
import FormularioPqrs from "../../components/Componentes PQRS/FormularioPqrs";
import Footer from "../../components/Generales/Footer";

export default function Contactar() {
  return (
    <div>
      <NavBar />
      <FormularioPqrs />
      <div style={{ marginTop: "30%" }}>
        <Footer />
      </div>
    </div>
  );
}
