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
            <h1> ¿Qué es MS DISEÑO Y PUBLICIDAD?</h1>
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
          <h2 style={{ textAlign: "center", marginTop: "5%" }}>
            ¿QUIERES SABER QUÉ ES MS DISEÑO Y PUBLICIDAD?
          </h2>
          <p style={{ textAlign: "center" }}>
            "Impulsando tu marca al siguiente nivel!"
          </p>
          <h3 style={{ marginTop: "5%" }}>¿Qué es MS DISEÑO Y PUBLICIDAD?</h3>
          <p style={{ marginBottom: "3%" }}>
            Nuestro objetivo es posicionar tu marca orgánicamente en los
            buscadores. Para lograrlo te desarrollamos todo el contenido que
            necesites para posicionarte en buscadores y destacarte en las
            diferentes plataformas digitales. Si quieres estar de primero en los
            buscadores, somos la empresa que necesitas.
          </p>
          <p>
            Para ello somos los únicos que tenemos una plataforma donde reunimos
            a una amplia comunidad de expertos (más de 5.000) en varias
            temáticas y formatos como video, textos, podcasts, ebooks, blogs, y
            más.
          </p>
          <h2 style={{ marginTop: "6%", marginBottom: "3%" }}>
            La experiencia con texto, audio y video SI importa
          </h2>
          <p style={{ marginBottom: "3%" }}>
            Conocemos muy bien el marketing de contenidos y posicionamiento
            orgánico (SEO).
          </p>
          <p style={{ marginBottom: "3%" }}>
            Somos pioneros en la región y nos hemos posicionado en diferentes
            industrias con clientes en todas las especialidades y temáticas.
          </p>
          <p>
            Diseñamos y ejecutamos estrategias de marketing de contenidos con lo
            cual atraemos a tus audiencias, y de esta forma te impulsamos a
            generar negocios por el posicionamiento en los buscadores.
          </p>
        </div>
      </Paper>
    </div>
  );
}
