import Card from "react-bootstrap/Card";

export default function ImgOverlayExample() {
  return (
    <Card className="bg-dark text-white">
      <Card.Img src="/images/encabezado.jpg" alt="Card image" />
      <Card.ImgOverlay>
        <div style={{ marginTop: "13%" }}>
          <Card.Title
            style={{
              textAlign: "center",
              margin: "0 10%",
              // Agregar el interlineado (puedes ajustar este valor)
            }}
          >
            <h1 style={{ lineHeight: "1.5" }}>
              Haz crecer tu negocio en línea, amplía tu audiencia y aumenta tus
              ventas. Somos especialistas en optimizar tu presencia digital y
              conectar con el público interesado en tus servicios.
            </h1>
          </Card.Title>
        </div>

        <Card.Text
          style={{
            textAlign: "center",
            margin: "6% 19%",
            marginTop: "6%",
            fontSize: "125%",
            lineHeight: "1.8", // Interlineado ajustado para el texto del párrafo
          }}
        >
          Con el uso de nuestras plataformas (únicas en el mercado hispano)
          puedes gestionar la compra de contenido para tu sitio web con técnicas
          de SEO (texto, audio, video) y redes sociales, así como de backlinks
          de forma automatizada. Todo lo haces en un solo sitio. Nuestro equipo
          humano te soporta en todo lo que necesites para que tengas éxito en
          los objetivos que tengas como empresa o marca.
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
}
