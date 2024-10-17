import LogosOpciones from "../../components/Componentes Pagos/LogosOpciones";
import SelectBanco from "../../components/Componentes Pagos/SelectBanco";
import DatosBancos from "../../components/Componentes Pagos/DatosBancos";
import Footer from "../../components/Generales/Footer";
import { NavBar } from "../../components/Generales/NavBar";

export default function Pagos() {
  return (
    <div>
      <NavBar />
      <div style={{ textAlign: "center", marginTop: "8%" }}>
        <h1>PAGOS</h1>
      </div>
      <div style={{ marginBottom: "2%" }}>
        <LogosOpciones />
      </div>
      <div style={{ marginBottom: "2%" }}>
        <SelectBanco />
      </div>
      <div style={{ marginBottom: "5%" }}>
        <DatosBancos />
      </div>
      <Footer />
    </div>
  );
}
