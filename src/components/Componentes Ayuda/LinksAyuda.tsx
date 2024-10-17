import React from "react";
import Card from "react-bootstrap/Card";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom"; // Importa Link de React Router

export default function LinksAyuda() {
  return (
    <div style={{ position: "relative" }}>
      <Card className="bg-dark text-white">
        <Card.Img src="/images/encabezado.jpg" alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title style={{ textAlign: "center", marginTop: "12%" }}>
            <h1>Ayuda</h1>
            <p style={{ margin: "2% 10%" }}>
              ¡Bienvenido a la sección de Ayuda de MS Publicidad y Diseño!
              Estamos aquí para asistirte en todo lo que necesites. Si tienes
              preguntas sobre nuestros servicios, problemas técnicos o cualquier
              otra consulta, no dudes en contactarnos.
            </p>
          </Card.Title>
        </Card.ImgOverlay>
      </Card>

      {/* Paper superpuesto */}
      <Paper
        elevation={24}
        style={{
          width: "70%",
          margin: "0 auto",
          padding: "1.5%",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, 1%)",
          zIndex: 2,
          borderLeft: "10px solid blue",
        }}
      >
        <div style={{ margin: "0 5%" }}>
          <h3 style={{ marginBottom: "3%", marginTop: "2%" }}>
            <Link to="/">1. Volver al Inicio de sesión</Link>
          </h3>
          <h3 style={{ marginBottom: "3%", marginTop: "2%" }}>
            <Link to="/Inicio">2. Volver a la página de Inicio</Link>
          </h3>
          <h3 style={{ marginBottom: "3%", marginTop: "2%" }}>
            <Link to="/Quiensomos">
              3. Volver a la sección de ¿Quienes somos?
            </Link>
          </h3>
          <h3 style={{ marginBottom: "3%", marginTop: "2%" }}>
            <Link to="/Servicios">4. Volver a la sección de Servicios</Link>
          </h3>
          <h3 style={{ marginBottom: "3%", marginTop: "2%" }}>
            <Link to="/Contactar">5. Ir a la página de Contactar</Link>
          </h3>
          <h3 style={{ marginBottom: "3%", marginTop: "2%" }}>
            <Link to="/Terminos">6. Ir a Terminos y Condiciones</Link>
          </h3>
          <h3 style={{ marginBottom: "3%", marginTop: "2%" }}>
            <Link to="/Marketing">7. Ir a Marketing de contenido</Link>
          </h3>
          <h3 style={{ marginBottom: "3%", marginTop: "2%" }}>
            <Link to="/Backlinks">8. Ir a Backlinks</Link>
          </h3>
          <h3 style={{ marginBottom: "3%", marginTop: "2%" }}>
            <Link to="/PQRS">9. Ir a la sección de PQRS</Link>
          </h3>
          <h3 style={{ marginBottom: "3%", marginTop: "2%" }}>
            <Link to="/Pagos">10. Ir a Métodos y Entidades de Pago</Link>
          </h3>
          <h3 style={{ marginBottom: "3%", marginTop: "2%" }}>
            <Link to="/PoliticaSg">11. Ir a políticas de seguridad</Link>
          </h3>
        </div>
      </Paper>
    </div>
  );
}
