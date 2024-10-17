import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export default function SelectBanco() {
  const [banco, setBanco] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setBanco(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 120, display: "flex", justifyContent: "center" }}>
      <FormControl style={{ minWidth: "20%" }}>
        <InputLabel id="demo-simple-select-label">
          Seleccione entidad para el pago
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={banco}
          label="Seleccione entidad para el pago"
          onChange={handleChange}
        >
          <MenuItem value={10}>Bancolombia</MenuItem>
          <MenuItem value={20}>Banco Falabella</MenuItem>
          <MenuItem value={30}>Grupo Aval</MenuItem>
          <MenuItem value={30}>Davivienda</MenuItem>
          <MenuItem value={30}>PSE</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
