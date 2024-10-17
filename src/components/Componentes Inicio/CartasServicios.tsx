import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { Container } from "@mui/material";

function GridExample() {
  // Array con la información de cada tarjeta
  const cardData = [
    {
      title: "Marketing de Contenido",
      text: "Somos lo que hacemos. Nuestra experiencia en redacción de contenidos SEO junto con una planeación adecuada garantizan un posicionamiento orgánico efectivo.",
      url: "/Marketing",
    },
    {
      title: "Backlinks",
      text: "Nuestra estrategia de backlinks puede posicionar tu sitio, otorgándole votos de confianza con los mejores link buildings del mercado hispano, además contamos con una plataforma completamente automatizada. ",
      url: "/Backlinks",
    },
    {
      title: "Redes Sociales",
      text: "¿Buscas crecimiento orgánico en social media? Sabemos cómo gestionar tus redes sociales, nuestro equipo de expertos está preparado para la creación del mejor contenido, innovando constantemente con nuevas tecnologías. ",
      url: "/#",
    },
    {
      title: "Amplificación",
      text: "Tus resultados nos importan, por eso en Amplificación manejamos SEM y publicidad nativa en los motores de búsqueda destacados y las mejores plataformas de recomendación de contenido. Analizamos el embudo del Marketing y establecemos tus prioridades. Conoce nuestro servicio de amplificación.",
      url: "/#",
    },
    {
      title: "Audio",
      text: "Nuestro servicio de Audio se enfoca en todo lo que más te gusta. La realización de podcast corporativos harán de tu marca un hit icónico. Dale vida con audiobrand, esto y mucho más lo puedes encontrar aquí. No te pierdas todas las oportunidades de crecimiento con este original producto.",
      url: "/#",
    },
    {
      title: "Video",
      text: "¿Quieres generar impacto emocional con tu marca? Hazte inolvidable. En WeAreContent tenemos el equipo que necesita tu marca para lograrlo, contamos con diseñadores gráficos y expertos en técnica audiovisual. ¿Te gustaría conocer más sobre nuestro servicio de video? ",
      url: "/#",
    },
  ];

  return (
    <Container>
      <Row xs={1} md={2} className="g-4">
        {cardData.map((card, idx) => (
          <Col key={idx}>
            <Card
              style={{
                height: "20rem",
                borderLeft: "4px solid blue",
                borderBottom: "4px solid blue",
                borderRight: "none",
                borderTop: "none",
              }}
            >
              <Card.Body>
                <Card.Title style={{ textAlign: "center" }}>
                  <strong>{card.title}</strong>
                </Card.Title>
                <div style={{ marginTop: "7%" }}></div>
                <Card.Text style={{ textAlign: "center" }}>
                  {card.text}
                </Card.Text>
                <div style={{ textAlign: "center", marginTop: "9%" }}>
                  <Link to={card.url}>
                    <Button variant="primary">Ver mas</Button>
                  </Link>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default GridExample;
