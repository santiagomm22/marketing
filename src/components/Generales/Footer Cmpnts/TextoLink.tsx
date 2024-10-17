import ListGroup from "react-bootstrap/ListGroup";

function TextoLink() {
  return (
    <ListGroup style={{ backgroundColor: "black" }}>
      <ListGroup.Item
        style={{
          backgroundColor: "black",
          color: "white",
          border: "none",
          fontSize: "250%",
        }}
      >
        <strong>COMPAÑIA</strong>
      </ListGroup.Item>

      {/* Los elementos de la lista a continuación se comportan como enlaces */}
      <ListGroup.Item
        action
        href="/PoliticaSg"
        style={{
          backgroundColor: "black",
          color: "white",
          border: "none",
          fontSize: "125%",
        }}
      >
        Politica de Seguridad
      </ListGroup.Item>
      <ListGroup.Item
        action
        href="/Ayuda"
        style={{
          backgroundColor: "black",
          color: "white",
          border: "none",
          fontSize: "125%",
        }}
      >
        Ayuda
      </ListGroup.Item>
      <ListGroup.Item
        action
        href="/Terminos"
        style={{
          backgroundColor: "black",
          color: "white",
          border: "none",
          fontSize: "125%",
        }}
      >
        Términos y condiciones
      </ListGroup.Item>

      <ListGroup.Item
        action
        href="/PQRS"
        style={{
          backgroundColor: "black",
          color: "white",
          border: "none",
          fontSize: "125%",
        }}
      >
        PQRS
      </ListGroup.Item>
    </ListGroup>
  );
}

export default TextoLink;
