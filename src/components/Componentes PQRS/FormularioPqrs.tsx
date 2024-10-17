//import React from "react";
import Card from "react-bootstrap/Card";
import Paper from "@mui/material/Paper";
import Form from "react-bootstrap/Form";
import { Button } from "@mui/material";
import * as Yup from "yup";
import { useFormik } from "formik";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import Select from "./Select";

const validationSchema = Yup.object({
  nombres: Yup.string().required("El nombre es obligatorio"),
  apellidos: Yup.string().required("El apellido es obligatorio"),
  email: Yup.string()
    .required("El email es obligatorio")
    .email("Email inválido"),
  empresa: Yup.string().required("La empresa es obligatoria"),
  pais: Yup.string().required("El país es obligatorio"),
  ciudad: Yup.string().required("La ciudad es obligatoria"),
  direccion: Yup.string().required("La dirección es obligatoria"),
  descripcion: Yup.string().required("La descripción es obligatoria"),
});

export default function CardTop() {
  const formik = useFormik({
    initialValues: {
      nombres: "",
      apellidos: "",
      email: "",
      empresa: "",
      pais: "",
      ciudad: "",
      direccion: "",
      descripcion: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("Registro validado", values);
    },
  });

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div style={{ position: "relative" }}>
      <Card className="bg-dark text-white">
        <Card.Img src="/images/encabezado.jpg" alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title style={{ textAlign: "center", marginTop: "12%" }}>
            <h1>PQRS</h1>
            <Select />
          </Card.Title>
        </Card.ImgOverlay>
      </Card>

      <Paper
        elevation={24}
        style={{
          width: "55%",
          margin: "0 auto",
          padding: "1%",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -5%)",
          zIndex: 2,
          backgroundColor: "#000000",
          borderLeft: "15px solid blue",
          borderTop: "15px solid blue",
          borderRight: "15px solid blue",
          borderBottom: "15px solid blue",
        }}
      >
        <Form onSubmit={formik.handleSubmit}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              rowGap: "50px",
              columnGap: "20px",
              margin: "4% 4%",
            }}
          >
            <Form.Group style={{ width: "45%" }} controlId="nombres">
              <Form.Control
                style={{ height: "140%" }}
                type="text"
                placeholder="Nombres"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.nombres}
                isInvalid={
                  formik.touched.nombres && Boolean(formik.errors.nombres)
                }
              />
              {/* Mostrar el mensaje de error debajo del campo */}
              {formik.touched.nombres && formik.errors.nombres && (
                <Form.Text className="text-danger">
                  {formik.errors.nombres}
                </Form.Text>
              )}
            </Form.Group>

            <Form.Group style={{ width: "45%" }} controlId="apellidos">
              <Form.Control
                style={{ height: "140%" }}
                type="text"
                placeholder="Apellidos"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.apellidos}
                isInvalid={
                  formik.touched.apellidos && Boolean(formik.errors.apellidos)
                }
              />
              {formik.touched.apellidos && formik.errors.apellidos && (
                <Form.Text className="text-danger">
                  {formik.errors.apellidos}
                </Form.Text>
              )}
            </Form.Group>

            <Form.Group style={{ width: "45%" }} controlId="email">
              <Form.Control
                style={{ height: "140%" }}
                type="email"
                placeholder="Email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                isInvalid={formik.touched.email && Boolean(formik.errors.email)}
              />
              {formik.touched.email && formik.errors.email && (
                <Form.Text className="text-danger">
                  {formik.errors.email}
                </Form.Text>
              )}
            </Form.Group>

            <Form.Group style={{ width: "45%" }} controlId="empresa">
              <Form.Control
                style={{ height: "140%" }}
                type="text"
                placeholder="Empresa"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.empresa}
                isInvalid={
                  formik.touched.empresa && Boolean(formik.errors.empresa)
                }
              />
              {formik.touched.empresa && formik.errors.empresa && (
                <Form.Text className="text-danger">
                  {formik.errors.empresa}
                </Form.Text>
              )}
            </Form.Group>

            <Form.Group style={{ width: "45%" }} controlId="pais">
              <Form.Control
                style={{ height: "140%" }}
                type="text"
                placeholder="País"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.pais}
                isInvalid={formik.touched.pais && Boolean(formik.errors.pais)}
              />
              {formik.touched.pais && formik.errors.pais && (
                <Form.Text className="text-danger">
                  {formik.errors.pais}
                </Form.Text>
              )}
            </Form.Group>

            <Form.Group style={{ width: "45%" }} controlId="ciudad">
              <Form.Control
                style={{ height: "140%" }}
                type="text"
                placeholder="Ciudad"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.ciudad}
                isInvalid={
                  formik.touched.ciudad && Boolean(formik.errors.ciudad)
                }
              />
              {formik.touched.ciudad && formik.errors.ciudad && (
                <Form.Text className="text-danger">
                  {formik.errors.ciudad}
                </Form.Text>
              )}
            </Form.Group>

            <Form.Group style={{ width: "45%" }} controlId="direccion">
              <Form.Control
                style={{ height: "140%" }}
                type="text"
                placeholder="Dirección"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.direccion}
                isInvalid={
                  formik.touched.direccion && Boolean(formik.errors.direccion)
                }
              />
              {formik.touched.direccion && formik.errors.direccion && (
                <Form.Text className="text-danger">
                  {formik.errors.direccion}
                </Form.Text>
              )}
            </Form.Group>
          </div>

          <h3
            style={{ textAlign: "center", color: "#ffffff", marginTop: "50px" }}
          >
            ¿CUAL ES TU NECESIDAD?
          </h3>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "20px 30px",
            }}
          >
            <Form.Group style={{ width: "100%" }} controlId="descripcion">
              <Form.Label style={{ marginLeft: "10px", fontWeight: "bold" }}>
                Descripción
              </Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Descripción"
                rows={5}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.descripcion}
                isInvalid={
                  formik.touched.descripcion &&
                  Boolean(formik.errors.descripcion)
                }
                style={{ resize: "none" }}
              />
              {formik.touched.descripcion && formik.errors.descripcion && (
                <Form.Text className="text-danger">
                  {formik.errors.descripcion}
                </Form.Text>
              )}
            </Form.Group>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "40px 0",
            }}
          >
            <Button
              sx={{
                width: "90%",
                "&.Mui-disabled": {
                  backgroundColor: "rgba(165, 165, 165)", // Fondo gris cuando está deshabilitado
                  color: "#ffffff", // Texto blanco cuando está deshabilitado
                },
              }}
              type="submit"
              variant="contained"
              onClick={handleShow}
              disabled={
                !formik.values.nombres ||
                !formik.values.apellidos ||
                !formik.values.email ||
                !formik.values.empresa ||
                !formik.values.pais ||
                !formik.values.ciudad ||
                !formik.values.direccion ||
                !formik.values.descripcion
              }
            >
              Enviar
            </Button>
          </div>
        </Form>
      </Paper>
      <Modal
        show={show}
        onHide={handleClose}
        animation={false}
        centered
        style={{}}
      >
        <Modal.Header>
          <Modal.Title style={{ fontSize: "120%", margin: "0 10%" }}>
            Se envio correctamente, recibiras una respuesta en el correo que
            registraste
          </Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="contained" color="success" onClick={handleClose}>
            Aceptar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
