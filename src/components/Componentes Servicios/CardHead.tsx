import Card from "react-bootstrap/Card";

function ImgOverlayExample() {
  return (
    <Card className="bg-dark text-white">
      <Card.Img src="/images/headservicios.jpg" alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title style={{ textAlign: "center", marginTop: "12%" }}>
          <h1>SERVICIOS DE MS DISEÑO Y PUBLICIDAD</h1>
        </Card.Title>
      </Card.ImgOverlay>
    </Card>
  );
}

export default ImgOverlayExample;
