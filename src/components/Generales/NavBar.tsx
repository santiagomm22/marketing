import { Button } from "@mui/material";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function BasicExample() {
  return (
    <Navbar
      expand="lg"
      style={{
        backgroundColor: "rgba(1, 1, 1, 0.5)",
        borderBottom: "1px solid #99daea",
        backdropFilter: "blur(10px)",
      }}
      fixed="top"
    >
      <Container>
        <Navbar.Brand href="/Inicio">
          <img
            src="/images/image (3).png"
            width="100%"
            height="70"
            className="d-inline-block align-top"
            alt=""
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Item>
              <Nav.Link
                href="/Quiensomos"
                style={{ color: "white", fontSize: "105%", marginLeft: "70px" }}
              >
                ¿Quienes Somos?
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                href="/Servicios"
                style={{ color: "white", fontSize: "105%", marginLeft: "70px" }}
              >
                Servicios
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                href="/Contactar"
                style={{ color: "white", fontSize: "105%", marginLeft: "70px" }}
              >
                Contactar
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                href="/Terminos"
                style={{ color: "white", fontSize: "105%", marginLeft: "70px" }}
              >
                Términos y condiciones
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Button
                href="/"
                variant="contained"
                style={{ marginLeft: "70px" }}
              >
                Cerrar Sesión
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
