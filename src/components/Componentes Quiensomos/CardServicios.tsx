import Carousel from "react-bootstrap/Carousel";

function IndividualIntervalsExample() {
  return (
    // Contenedor que centra el carrusel
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Carrusel con un ancho máximo */}
      <Carousel style={{ maxWidth: "45%", width: "100%", maxHeight: "380px" }}>
        {/* Primera imagen del carrusel */}
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="/images/estrategia.png"
            alt="First slide"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>

        {/* Segunda imagen del carrusel */}
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="/images/posicionamiento.png"
            alt="Second slide"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>

        {/* Tercera imagen del carrusel */}
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="/images/contenido.png"
            alt="Third slide"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        {/* cuarta imagen del carrusel */}
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="/images/creacion.png"
            alt="Third slide"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        {/* quinta imagen del carrusel */}
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="/images/produccion.png"
            alt="Third slide"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default IndividualIntervalsExample;
