//import React from "react";
import Card from "react-bootstrap/Card";
import Paper from "@mui/material/Paper";

export default function CardTop() {
  return (
    <div style={{ position: "relative" }}>
      <Card className="bg-dark text-white">
        <Card.Img src="/images/encabezado.jpg" alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title style={{ textAlign: "center", marginTop: "12%" }}>
            <h1>MARKETING DE CONTENIDO</h1>
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
          <p style={{ marginTop: "5%" }}>
            De acuerdo con tu tipo de marca te ayudamos en la creación de
            artículos, ebooks, infografías, guías, listas, etc. Este contenido
            es escrito por redactores expertos en diferentes temáticas.
            Igualmente, se encuentran optimizados para SEO, si lo necesitas.
            También se revisan y curan por un equipo editorial profesional.
          </p>
          <h3 style={{ marginTop: "5%", marginBottom: "3%" }}>
            ¿A qué público/empresa está dirigido?
          </h3>
          <p style={{ marginBottom: "3%" }}>
            El motivo de nuestro trabajo es ayudar a todas las empresas o marcas
            que quieran tener más visibilidad única en digital. Por esta razón,
            se les da un contenido propio.
          </p>

          <h2 style={{ marginBottom: "3%" }}>
            ¿Qué beneficios aporta el servicio de estrategia de contenido a los
            clientes?
          </h2>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div style={{ flex: 1 }}>
              <p style={{ margin: "0 0 3% 0" }}>
                En primer lugar, a través del contenido se puede lograr un
                tráfico orgánico en cualquier sitio web. Además, es 99% más
                económico que con campañas pagas. De esta forma, tendrás
                contenido de tu marca optimizada, de calidad y asequible.
              </p>
              <p>
                Las piezas son escritas por expertos en diferentes temáticas y
                optimización. De forma que si lo necesitas, y sería ideal que
                así lo solicitaras, están pensadas para cumplir con los
                lineamientos SEO de calidad. Estos son requeridos por los
                motores de búsqueda, ya que así se llega a ser el primer
                resultado en una consulta específica.
                <br />
                <br />
                También debes saber que estas piezas son auditadas e igualmente
                revisadas por un equipo profesional de correctores de estilo.
                <br />
                <br />
                Es importante aclarar, además, que no son artículos que hablan
                de productos y servicios, pues entendemos que no hay nadie mejor
                que la marca para hablar de sí misma.
              </p>
            </div>
            <div style={{ flex: 1, textAlign: "center" }}>
              <img
                src="/images/imgmarketing.png"
                alt="Beneficios de estrategia de contenido"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </div>
          </div>
        </div>
      </Paper>
    </div>
  );
}
