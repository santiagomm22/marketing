import Box from "@mui/material/Box";
import Imagen from "./Footer Cmpnts/Imagen";
import TextoLink from "./Footer Cmpnts/TextoLink";

export default function Footer() {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "330px",
        bgcolor: "#000000",
        display: "flex", // Configura el layout como flex
        alignItems: "center", // Alinea verticalmente al centro
        justifyContent: "flex-start", // Espacia los elementos
      }}
    >
      <Imagen />
      <div style={{ marginLeft: "30%" }}>
        <TextoLink />
      </div>
    </Box>
  );
}
