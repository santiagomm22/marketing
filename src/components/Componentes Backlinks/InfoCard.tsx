//import React from "react";
import Card from "react-bootstrap/Card";
import Paper from "@mui/material/Paper";

export default function CardTop() {
  return (
    <div style={{ position: "relative" }}>
      <Card className="bg-dark text-white">
        <Card.Img src="/images/encabezado.jpg" alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title style={{ textAlign: "center", marginTop: "12%" }}>
            <h1>MARKETING DE CONTENIDO</h1>
          </Card.Title>
        </Card.ImgOverlay>
      </Card>

      {/* Paper superpuesto */}
      <Paper
        elevation={24}
        style={{
          width: "70%",
          margin: "0 auto",
          padding: "1.5%",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -5%)", // Ajusta este valor para mover el Paper hacia arriba o abajo
          zIndex: 2, // Para asegurar que esté por encima del Card
          borderLeft: "10px solid blue",
        }}
      >
        <div style={{ margin: "0 5%" }}>
          <h2 style={{ marginTop: "5%", marginBottom: "3%" }}>
            ¿Qué son los backlinks en marketing digital?
          </h2>
          <p style={{ marginTop: "5%" }}>
            Los backlinks son enlaces entrantes hacia un sitio web o salientes
            hacia otra sitio web. Estos enlaces son considerados como “votos”
            por parte de los buscadores.
            <br />
            <br />
            En otras palabras si quieres saber que es un backlink, son links o
            hipervínculos que se encuentran en una página de un sitio web A y se
            dirigen a otra página en otro sitio web B.
            <br />
            <br />
            Gracias a estos enlaces alojados en webs diferentes, los usuarios
            acaban navegando entre webs. Es decir, si alguien enlaza a tu sitio
            web, entonces tú tendrás uno de ellos. Si tú enlazas a otra página,
            entonces ellos tendrán uno tuyo.
          </p>
          <h2 style={{ marginTop: "5%", marginBottom: "3%" }}>
            ¿Para qué sirven los backlinks?
          </h2>
          <p style={{ marginBottom: "3%" }}>
            En la medida que haya más enlaces de otras páginas hacia tu web, más
            relevancia y notoriedad ganará tu sitio frente a los buscadores.
            Esta autoridad es la que se conoce como la autoridad de dominio (DA
            = Domain Authority).
            <br />
            <br />
            Como lo mencioné los backlinks son considerados como una especie de
            ¨votos¨ hacia los sitios o hacia el contenido por parte de los
            buscadores.
            <br />
            <br />
            Si una página recibe miles de backlinks la página tendrá mucha más
            confianza por parte de los buscadores, que aquella que no los tenga.
            <br />
            <br />
            Pero cuidado!. Ten en cuenta que no todos tienen el mismo valor.
            Esto lo explicaremos más adelante.
            <br />
            <br />
            Muchas marcas terminan comprandolos en plataformas, donde les venden
            por US$5 y obtienes miles de enlaces. Esos enlaces en su gran
            mayoría no son considerados de calidad y de acuerdo al Update de
            Google en el 2024 puedes llegar a ser penalizado si no lo haces
            bien.
          </p>

          <h2 style={{ marginBottom: "3%" }}>¿Qué tipos de backlinks hay?</h2>

          <p style={{ margin: "0 0 3% 0" }}>
            Existen varios tipos de backlinks, cada uno con su propio valor y
            función en la estrategia de SEO.
            <br />
            <br />
            Hay 2 tipos: Los Follow y los NoFollow.
            <br />
            <br />
            Enlances Follow: Son enlaces que le dicen a los robots de los
            buscadores que pueden ser seguidos por ellos.
            <br />
            <br />
            Enlaces NoFollow: Son aquellos que les dicen a los buscadores que no
            los deben seguir o considerar.
            <br />
            <br />
            Todos pensaríamos que los buenos son los follow. Pues la realidad es
            que muchas veces los “NoFollow” son útiles, porque de todas formas
            los buscadores les ven valor a ellos. Sobre todo, aquellos que son
            pagados. Normalmente hay medios de comunicación que solo colocan
            enlaces NoFollow.
          </p>
        </div>
      </Paper>
    </div>
  );
}
