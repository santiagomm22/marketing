import Card from "react-bootstrap/Card";
import { Button } from "@mui/material";

function BasicExample() {
  return (
    <div>
      <Card
        style={{
          margin: "2% 7% 4% 7%",
          borderLeft: "4px solid blue",
          borderBottom: "none",
          borderRight: "none",
          borderTop: "none",
        }}
      >
        <Card.Img
          src="/images/cartaproduccion.png"
          style={{ marginBottom: "2%" }}
        />
        <Card.Body>
          <Card.Title style={{ textAlign: "center", marginBottom: "2%" }}>
            <h1> 5.Producción y edicion de video</h1>
          </Card.Title>
          <Card.Text style={{ margin: "0 4% 0 4%", fontSize: "112.7%" }}>
            ¡La realidad es que a las personas les encantan los videos! En redes
            sociales, en blogs, en YouTube y hasta en el mismo Google, sin duda,
            son el contenido más consumido. Por eso, sea lo que sea que busques:
            educar, promocionar, divertir o contar tu historia, podemos hacerlos
            con creatividad, data y estrategia; además de excelentes precios y
            la mejor calidad.
          </Card.Text>
        </Card.Body>
      </Card>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "5%",
          marginBottom: "5%",
        }}
      >
        <Button variant="contained" size="large" href="/Pagos">
          {" "}
          Metodos de pago{" "}
        </Button>
      </div>
    </div>
  );
}

export default BasicExample;
