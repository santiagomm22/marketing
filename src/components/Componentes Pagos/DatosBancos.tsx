import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";
import * as Yup from "yup";
import { useFormik } from "formik";
import { Paper, Grid } from "@mui/material";

// Esquema de validación
const validationSchema = Yup.object({
  Nombre: Yup.string().required("El nombre es obligatorio"),
  cuenta: Yup.string().required("La cuenta es obligatoria"),
  Documento: Yup.string().required("El Documento es obligatorio"),
  numeroc: Yup.string().required(
    "Debe especificar la cantidad o metros cúbicos que va a ingresar"
  ),
});

export default function DatosBancos() {
  const formik = useFormik({
    initialValues: {
      Nombre: "",
      cuenta: "",
      Documento: "",
      numeroc: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("Registro validado", values);
    },
  });

  return (
    <Paper
      elevation={0}
      sx={{
        width: "100%",
        maxWidth: "70%",
        margin: "auto",
        padding: "20px",
        mt: 5, // Espaciado superior
      }}
    >
      {/* Formulario */}
      <Box
        component="form"
        noValidate
        autoComplete="off"
        onSubmit={formik.handleSubmit}
      >
        <Grid container spacing={2}>
          {/* Fila 1 */}
          <Grid item xs={12} sm={6}>
            <TextField
              id="Nombre"
              label="Nombre"
              variant="outlined"
              required
              fullWidth
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.Nombre}
              helperText={
                formik.touched.Nombre && formik.errors.Nombre
                  ? formik.errors.Nombre
                  : ""
              }
              error={formik.touched.Nombre && Boolean(formik.errors.Nombre)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="cuenta"
              label="Tipo de cuenta"
              variant="outlined"
              required
              fullWidth
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.cuenta}
              helperText={
                formik.touched.cuenta && formik.errors.cuenta
                  ? formik.errors.cuenta
                  : ""
              }
              error={formik.touched.cuenta && Boolean(formik.errors.cuenta)}
            />
          </Grid>

          {/* Fila 2 */}
          <Grid item xs={12} sm={6}>
            <TextField
              id="Documento"
              label="Documento"
              variant="outlined"
              required
              fullWidth
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.Documento}
              helperText={
                formik.touched.Documento && formik.errors.Documento
                  ? formik.errors.Documento
                  : ""
              }
              error={
                formik.touched.Documento && Boolean(formik.errors.Documento)
              }
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="numeroc"
              label="No. de Cuenta"
              variant="outlined"
              required
              fullWidth
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.numeroc}
              helperText={
                formik.touched.numeroc && formik.errors.numeroc
                  ? formik.errors.numeroc
                  : ""
              }
              error={formik.touched.numeroc && Boolean(formik.errors.numeroc)}
            />
          </Grid>
        </Grid>

        {/* Botones */}
        <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
          <Button
            variant="contained"
            startIcon={<DoneOutlineIcon />}
            type="submit"
            disabled={
              !formik.values.Nombre ||
              !formik.values.cuenta ||
              !formik.values.Documento ||
              !formik.values.numeroc
            }
          >
            Guardar
          </Button>
        </Box>
      </Box>
    </Paper>
  );
}
