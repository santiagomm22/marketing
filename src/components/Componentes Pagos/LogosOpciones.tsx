import { Link } from "react-router-dom";

export default function LogosOpciones() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "1%",
        }}
      >
        <Link to="#">
          <img
            src="/images/logobancolombia.png"
            alt="Bancolombia"
            style={{
              cursor: "pointer",
              width: "40%",
            }}
          />
        </Link>

        <Link to="#">
          <img
            src="/images/falabella.png"
            alt="Falabella"
            style={{
              marginLeft: "-20%",
              cursor: "pointer",
              maxWidth: "25%",
            }}
          />
        </Link>

        <Link to="#">
          <img
            src="/images/grupoaval.png"
            alt="Grupo Aval"
            style={{
              marginLeft: "-135%",
              cursor: "pointer",
              width: "55%",
            }}
          />
        </Link>

        <Link to="#">
          <img
            src="/images/davivienda.png"
            alt="Davivienda"
            style={{
              marginLeft: "-500%",
              cursor: "pointer",
              width: "220%",
            }}
          />
        </Link>

        <Link to="#">
          <img
            src="/images/pse.png"
            alt="PSE"
            style={{
              marginLeft: "-80%",
              cursor: "pointer",
              maxWidth: "100%", // Este tiene un tamaño diferente
            }}
          />
        </Link>
      </div>
    </div>
  );
}
