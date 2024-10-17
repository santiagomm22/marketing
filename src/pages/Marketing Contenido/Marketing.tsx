import NavBar from "../../components/Generales/NavBar";
import TopCard from "../../components/Componentes Marketing/TopCard";
import Footer from "../../components/Generales/Footer";

export default function Marketing() {
  return (
    <div>
      <NavBar />
      <TopCard />
      <div style={{ marginTop: "40%" }}>
        <Footer />
      </div>
    </div>
  );
}
