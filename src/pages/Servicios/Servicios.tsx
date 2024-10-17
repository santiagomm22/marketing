import { NavBar } from "../../components/Generales/NavBar";
import CardHead from "../../components/Componentes Servicios/CardHead";
import CartasServicios from "../../components/Componentes Servicios/CartasServicios";
import CartaProduccion from "../../components/Componentes Servicios/CartaProduccion";
import Footer from "../../components/Generales/Footer";

export default function Servicios() {
  return (
    <div>
      <NavBar />
      <CardHead />
      <CartasServicios />
      <CartaProduccion />
      <Footer />
    </div>
  );
}
