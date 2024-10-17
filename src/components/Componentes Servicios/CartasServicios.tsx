import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function GridExample() {
  // Definir los datos para cada tarjeta con su imagen y texto
  const cardsData = [
    {
      id: 1,
      title: "Creación de Contenido",
      text: "Incluye la planificación, gestión, desarrollo, distribución de contenidos, así como el seguimiento a los resultados para conquistar a una audiencia específica.",
      imgSrc: "/images/estrategia.png",
    },
    {
      id: 2,
      title: "Estrategia de Marketing",
      text: "Con nuestros proveeedores diseñamos contenido con técnicas de SEO para mejorar el posicionamiento en buscadores y ganar visibilidad en el mundo digital.",
      imgSrc: "/images/posicionamiento.png",
    },
    {
      id: 3,
      title: "Posicionamiento Web",
      text: "Creamos posts y distribuimos el contenido de valor en redes sociales para ayudar al posicionamiento de las marcas, creando así una comunidad activa para acercar a los clientes. ",
      imgSrc: "/images/contenido.png",
    },
    {
      id: 4,
      title: "Producción de Videos",
      text: "Con nuestra comunidad de más de 4.500 proveedores especializados, creamos contenido en texto, audio, video, fotografía, diseño de infografías, banners, ilustraciones y traducciones.",
      imgSrc: "/images/creacion.png",
    },
  ];

  return (
    <Row xs={1} md={2} className="g-4" style={{ margin: "1% 6% 2% 6%" }}>
      {cardsData.map((card) => (
        <Col key={card.id}>
          <Card
            style={{
              borderLeft: "4px solid blue",
              borderBottom: "none",
              borderRight: "none",
              borderTop: "none",
            }}
          >
            {/* Renderizar la imagen específica de cada tarjeta */}
            <Card.Img variant="top" src={card.imgSrc} alt={card.title} />

            {/* Renderizar el contenido específico de cada tarjeta */}
            <Card.Body>
              <Card.Text style={{ margin: "0 8%" }}>{card.text}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default GridExample;
