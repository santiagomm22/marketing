//import React from "react";
import Card from "react-bootstrap/Card";
import Paper from "@mui/material/Paper";

export default function Politicas() {
  return (
    <div style={{ position: "relative" }}>
      <Card className="bg-dark text-white">
        <Card.Img src="/images/encabezado.jpg" alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title style={{ textAlign: "center", marginTop: "12%" }}>
            <h1>POLITICAS DE SEGURIDAD</h1>
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
          transform: "translate(-50%, -5%)", // Ajusta este valor para mover el Paper hacia arriba o abajo
          zIndex: 2, // Para asegurar que esté por encima del Card
          borderLeft: "10px solid blue",
        }}
      >
        <div style={{ margin: "0 5%" }}>
          <p style={{ marginBottom: "2%", marginTop: "2%" }}>
            En MS Publicidad y Diseño, la seguridad de la información es una
            prioridad. Nos comprometemos a proteger la privacidad y la
            integridad de los datos de nuestros clientes y usuarios. Esta
            política describe cómo manejamos la seguridad de la información en
            nuestra empresa.
          </p>
          <h3 style={{ marginBottom: "3%" }}>1. Protección de Datos</h3>
          <p style={{ marginBottom: "3%" }}>
            Implementamos medidas técnicas y organizativas adecuadas para
            proteger los datos personales contra el acceso no autorizado, la
            divulgación, la alteración o la destrucción. Esto incluye el uso de
            firewalls, cifrado y sistemas de detección de intrusos.
          </p>
          <h2 style={{ marginBottom: "3%" }}>2. Acceso Restringido</h2>
          <p>
            El acceso a los datos sensibles está restringido a personal
            autorizado que necesita esta información para llevar a cabo sus
            funciones laborales. Todos los empleados están sujetos a políticas
            de confidencialidad y reciben formación sobre la importancia de la
            seguridad de la información.
          </p>
          <h2 style={{ marginBottom: "3%" }}>3. Almacenamiento Seguro</h2>
          <p style={{ marginBottom: "3%" }}>
            Los datos se almacenan en servidores seguros que cumplen con las
            normativas vigentes en materia de protección de datos. Realizamos
            copias de seguridad periódicas para garantizar la disponibilidad y
            recuperación de la información en caso de incidentes.
          </p>
          <h2 style={{ marginBottom: "3%" }}>4. Monitoreo y Auditoría</h2>
          <p style={{ marginBottom: "3%" }}>
            Realizamos auditorías regulares y monitoreo continuo para detectar
            cualquier actividad sospechosa o brechas de seguridad. En caso de un
            incidente, contamos con un plan de respuesta para mitigar los
            efectos y notificar a las partes afectadas según lo requiera la ley.
          </p>
          <h2 style={{ marginBottom: "3%" }}>5. Cumplimiento Normativo</h2>
          <p style={{ marginBottom: "3%" }}>
            Cumplimos con todas las leyes y regulaciones aplicables en materia
            de protección de datos, incluyendo el Reglamento General de
            Protección de Datos (RGPD) y otras normativas locales.
          </p>
          <h2 style={{ marginBottom: "3%" }}>6. Actualización de Políticas</h2>
          <p style={{ marginBottom: "3%" }}>
            Esta política se revisa periódicamente para asegurar su efectividad
            y adecuación a los cambios legislativos o tecnológicos. Cualquier
            modificación será comunicada a nuestros clientes y usuarios.
          </p>
        </div>
      </Paper>
    </div>
  );
}
