import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export default function BasicSelect() {
  const [categoria, setCategoria] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setCategoria(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: "30%" }}>
      <FormControl
        variant="filled"
        style={{
          width: "10%",
          backgroundColor: "white", // Fondo sólido
          opacity: 1, // Eliminar transparencia
        }}
      >
        <InputLabel id="demo-simple-select-label">Seleccione</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={categoria}
          label="Seleccione"
          onChange={handleChange}
          style={{
            backgroundColor: "white", // Asegurar que el dropdown también tenga fondo sólido
          }}
        >
          <MenuItem value={10}>Peticiones</MenuItem>
          <MenuItem value={20}>Quejas</MenuItem>
          <MenuItem value={30}>Reclamos</MenuItem>
          <MenuItem value={40}>Sugerencias</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
