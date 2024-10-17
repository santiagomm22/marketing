//import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Inicio from "../pages/PG1/Inicio";
import QuienSomos from "../pages/Quien Somos/QuienSomos";
import Servicios from "../pages/Servicios/Servicios";
import Contactar from "../pages/Contactar/Contactar";
import Terminos from "../pages/TerminosyC/Terminos";
import Marketing from "../pages/Marketing Contenido/Marketing";
import Backlinks from "../pages/Backlinks/Backlinks";
import PQRS from "../pages/PQRS/PQRS";
import Pagos from "../pages/Pagos/Pagos";
import PoliticaSg from "../pages/Politica de Seguridad/PoliticaSg";
import Ayuda from "../pages/Ayuda/Ayuda";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/Inicio" element={<Inicio />} />
      <Route path="/Quiensomos" element={<QuienSomos />} />
      <Route path="/Servicios" element={<Servicios />} />
      <Route path="/Contactar" element={<Contactar />} />
      <Route path="/Terminos" element={<Terminos />} />
      <Route path="/Marketing" element={<Marketing />} />
      <Route path="/Backlinks" element={<Backlinks />} />
      <Route path="/PQRS" element={<PQRS />} />
      <Route path="/Pagos" element={<Pagos />} />
      <Route path="/PoliticaSg" element={<PoliticaSg />} />
      <Route path="/Ayuda" element={<Ayuda />} />
    </Routes>
  );
};

export default Routers;
