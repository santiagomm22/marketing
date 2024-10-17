import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

function GridExample() {
  // Array con la información de cada tarjeta
  const cardData = [
    {
      title: "Por el conocimiento especializado",
      text: "Sabemos crear contenido de manera creíble sobre temas  que son relevantes para cada audiencia y negocio. Somos pioneros en la industria y, la experiencia importa.",
    },
    {
      title: "Por el análisis, tecnología y mediciones",
      text: "En MS Diseño y Publicidad usamos data, tecnología y una metodología para producir el contenido correcto a la audiencia correcta. Brindamos detalle sobre el desempeño en torno al contenido.",
    },
    {
      title: "Por un amplio portafolio de servicios",
      text: "Producimos una variedad de productos de contenido completos, para que tus estrategia de marketing digital logre los resultados consistentes que necesitas.",
    },
  ];

  return (
    <div style={{ position: "relative" }}>
      {/* Contenedor para la imagen de fondo */}
      <div
        style={{
          backgroundImage: `url('images/digitalmk.jpg')`,
          height: "300px",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Título encima de la imagen */}
        <h2
          style={{
            color: "#fff",
            textAlign: "center",
            paddingTop: "50px",
          }}
        >
          ¿Por qué confiar a MS Diseño y Publicidad tus contenidos?
        </h2>
      </div>

      {/* Contenedor para las tarjetas */}
      <Container
        style={{
          position: "absolute",
          top: "200px",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <Row xs={1} md={3} className="g-4">
          {cardData.map((card, idx) => (
            <Col key={idx}>
              <Card
                style={{
                  minHeight: "250px", // Altura mínima para las tarjetas
                  borderLeft: "4px solid blue",
                  borderTop: "none",
                  background: "#fff", // Fondo blanco para las tarjetas
                  zIndex: 2, // Asegura que las tarjetas estén por encima de la imagen
                }}
              >
                <Card.Body
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    textAlign: "center",
                    height: "200px",
                  }}
                >
                  <Card.Title style={{ marginTop: "11%" }}>
                    <strong>{card.title}</strong>
                  </Card.Title>
                  <Card.Text style={{ margin: "4% 0px", marginBottom: "9%" }}>
                    {card.text}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default GridExample;
