import NavBar from "../../components/Generales/NavBar";
import Politicas from "../../components/Componentes PoliticasSg/Politicas";
import Footer from "../../components/Generales/Footer";

export default function PoliticaSg() {
  return (
    <div>
      <NavBar />
      <Politicas />
      <div style={{ marginTop: "47%" }}>
        <Footer />
      </div>
    </div>
  );
}
