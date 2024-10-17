//import React from "react";
import Card from "react-bootstrap/Card";
import Paper from "@mui/material/Paper";

export default function HeadCard() {
  return (
    <div style={{ position: "relative" }}>
      <Card className="bg-dark text-white">
        <Card.Img src="/images/encabezado.jpg" alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title style={{ textAlign: "center", marginTop: "12%" }}>
            <h1>TERMINOS Y CONDICIONES</h1>
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
          transform: "translate(-50%, 0%)", // Ajusta este valor para mover el Paper hacia arriba o abajo
          zIndex: 2, // Para asegurar que esté por encima del Card
          borderLeft: "10px solid blue",
        }}
      >
        <div style={{ margin: "0 8%" }}>
          <h2 style={{ marginTop: "5%", marginBottom: "3%" }}>
            1. Introducción
          </h2>

          <p style={{ marginBottom: "3%" }}>
            Estos términos y condiciones constituyen un acuerdo legal entre el
            cliente y MS Diseño y Publicidad para el uso de nuestros servicios
            de marketing digital. Al contratar nuestros servicios, el cliente
            acepta quedar vinculado por estos términos. Si no está de acuerdo
            con alguna de las disposiciones aquí establecidas, debe abstenerse
            de utilizar nuestros servicios. Nos reservamos el derecho de
            modificar estos términos en cualquier momento. Las modificaciones
            serán notificadas al cliente y se considerarán aceptadas si continúa
            utilizando los servicios tras la publicación de los cambios.
          </p>
          <h3 style={{ marginTop: "5%", marginBottom: "3%" }}>
            2. Descripción de los Servicios
          </h3>
          <p>
            ● MS Diseño y Publicidad se especializa en ofrecer servicios de
            marketing digital diseñados para mejorar la presencia en línea de
            las empresas. Los servicios que ofrecemos incluyen, pero no se
            limitan a: <br />
            <br />● Estrategia de Contenidos: Desarrollo de estrategias
            integrales de contenido que incluyen análisis de la audiencia,
            planificación de contenido basado en objetivos comerciales, creación
            de calendarios editoriales y gestión de la distribución de
            contenidos.
            <br />
            <br /> ● Posicionamiento Orgánico SEO: Optimización de sitios web y
            contenidos para mejorar el posicionamiento en motores de búsqueda.
            Incluye análisis de palabras clave, auditorías SEO técnicas,
            optimización de on-page, link building, y generación de informes de
            seguimiento. Creación de Piezas de Contenido: Producción de
            contenido visual y escrito alineado con la identidad de la marca del
            cliente. Esto incluye la creación de gráficos, banners, videos,
            infografías, artículos, y cualquier otro tipo de contenido necesario
            para cumplir con los objetivos de marketing.
            <br />
            <br /> Contenido para Redes Sociales: Diseño y ejecución de
            estrategias para redes sociales, incluyendo la planificación y
            creación de publicaciones, gestión de cuentas, monitoreo de
            resultados, y campañas publicitarias en plataformas como Facebook,
            Instagram, LinkedIn, entre otras.
          </p>
          <h2 style={{ marginTop: "6%", marginBottom: "3%" }}>
            3. Responsabilidades del Cliente
          </h2>
          <p style={{ marginBottom: "3%" }}>
            El cliente es responsable de proporcionar la información y recursos
            necesarios para la correcta ejecución de los servicios. Esto
            incluye, pero no se limita a:
            <br />
            <br /> 3.1. Proveer Información Actualizada: El cliente debe
            entregar toda la información, datos, accesos y contenido necesario
            para la implementación de la estrategia. Cualquier retraso o
            inexactitud en la información proporcionada puede afectar los plazos
            y resultados.
            <br />
            <br /> 3.2. Colaboración y Comunicación: El cliente debe mantener
            una comunicación constante y activa, brindando retroalimentación en
            los tiempos acordados para garantizar que el proyecto avance de
            manera fluida. La falta de respuestas oportunas puede generar
            demoras.
            <br />
            <br /> 3.3. Cumplimiento de los Plazos de Pago: El cliente se
            compromete a realizar los pagos dentro de los plazos establecidos.
            En caso de retrasos, MS Diseño y Publicidad se reserva el derecho de
            suspender o cancelar los servicios hasta que se regularice la
            situación.
            <br />
            <br /> 3.4. Responsabilidad por el Material Proporcionado: El
            cliente garantiza que cualquier material, incluyendo textos,
            imágenes o gráficos, proporcionado a MS Diseño y Publicidad es de su
            propiedad o tiene los derechos correspondientes para su uso. El
            cliente asume la responsabilidad legal en caso de reclamos o
            disputas relacionadas con derechos de propiedad intelectual.
          </p>
          <h2 style={{ marginTop: "6%", marginBottom: "3%" }}>
            4. Alcance de los Servicios y Exclusiones
          </h2>
          <p style={{ marginBottom: "3%" }}>
            4.1. Definición del Alcance: El alcance de los servicios se definirá
            claramente en el contrato o propuesta inicial. Cualquier trabajo
            adicional no especificado será tratado como un servicio adicional y
            podrá generar costos extra.
            <br />
            <br /> 4.2. Revisiones y Cambios: Se incluye un número limitado de
            revisiones dentro de cada proyecto. Las revisiones deben ser
            solicitadas en el plazo establecido. Cualquier cambio o corrección
            fuera de ese plazo, o que implique un rediseño o reestructuración
            significativa, puede incurrir en cargos adicionales.
            <br />
            <br /> 4.3. Limitaciones del Servicio: MS Diseño y Publicidad no
            garantiza resultados específicos como aumentos en ventas,
            posicionamiento exacto en motores de búsqueda, o un número
            determinado de seguidores en redes sociales, ya que estos dependen
            de factores externos fuera del control de la empresa.
          </p>
          <h2 style={{ marginTop: "6%", marginBottom: "3%" }}>
            5. Propiedad Intelectual y Uso de Materiales
          </h2>
          <p style={{ marginBottom: "3%" }}>
            5.1. Derechos de Propiedad sobre el Trabajo Creativo: Todos los
            materiales, contenidos y productos desarrollados por MS Diseño y
            Publicidad, incluyendo gráficos, textos, estrategias y demás, son
            propiedad de la empresa hasta que se haya recibido el pago completo.
            Una vez recibido el pago, los derechos se transferirán al cliente
            según lo estipulado en el contrato.
            <br />
            <br /> 5.2. Licencias y Materiales de Terceros: Ciertos elementos
            utilizados en la ejecución de los servicios pueden estar sujetos a
            licencias de terceros, como imágenes de stock o fuentes
            tipográficas. El cliente deberá cumplir con las condiciones de uso
            de dichas licencias.
            <br />
            <br />
            5.3. Derecho a Uso Promocional: MS Diseño y Publicidad se reserva el
            derecho de utilizar muestras de los trabajos realizados como parte
            de su portafolio, a menos que el cliente lo prohíba explícitamente
            por escrito.
          </p>
          <h2 style={{ marginTop: "6%", marginBottom: "3%" }}>
            6. Confidencialidad y Protección de Datos
          </h2>
          <p style={{ marginBottom: "3%" }}>
            6.1. Confidencialidad de la Información: Ambas partes acuerdan
            mantener la confidencialidad sobre cualquier información compartida
            durante la relación comercial. MS Diseño y Publicidad se compromete
            a no divulgar ni utilizar la información confidencial del cliente
            para fines distintos a la ejecución del proyecto.
            <br />
            <br /> 6.2. Protección de Datos Personales: MS Diseño y Publicidad
            manejará los datos personales proporcionados por el cliente conforme
            a la normativa vigente en materia de protección de datos.
            Implementaremos medidas de seguridad para evitar accesos no
            autorizados, alteraciones o pérdida de datos.
          </p>
          <h2 style={{ marginTop: "6%", marginBottom: "3%" }}>
            7. Plazos de Entrega y Procedimiento de Revisión
          </h2>
          <p style={{ marginBottom: "3%" }}>
            7.1. Definición de Plazos de Entrega: Los plazos de entrega se
            definirán en la planificación inicial y estarán sujetos a la
            disponibilidad de la información proporcionada por el cliente. Los
            plazos pueden verse afectados por la complejidad del proyecto y
            cualquier modificación solicitada.
            <br />
            <br /> 7.2. Proceso de Revisión: Se acordarán entregas parciales
            para la revisión y aprobación del cliente. El cliente tendrá un
            plazo específico para solicitar ajustes. Las solicitudes fuera de
            dicho plazo podrán considerarse como un servicio adicional.
            <br />
            <br />
            7.3. Criterios de Aprobación Final: Una vez entregada la versión
            final del proyecto y aprobado por el cliente, cualquier cambio
            adicional se considerará un nuevo proyecto o servicio, lo que
            implicará costos adicionales.
          </p>
          <h2 style={{ marginTop: "6%", marginBottom: "3%" }}>
            8. Garantía y Limitación de Responsabilidad
          </h2>
          <p style={{ marginBottom: "3%" }}>
            8.1. Esfuerzo y Calidad en la Ejecución: MS Diseño y Publicidad se
            compromete a realizar los servicios con el mayor nivel de
            profesionalismo y calidad. No obstante, debido a la naturaleza del
            marketing digital, no garantizamos resultados exactos como el
            posicionamiento en un lugar específico en motores de búsqueda o un
            número determinado de conversiones.
            <br />
            <br /> 8.2. Limitación de Responsabilidad: En ningún caso, MS Diseño
            y Publicidad será responsable por daños indirectos, incidentales,
            especiales o consecuentes. La responsabilidad total de la empresa
            frente al cliente se limitará al monto pagado por los servicios
            contratados.
            <br />
            <br />
            8.3. Subcontratación y Terceros: MS Diseño y Publicidad podrá
            subcontratar ciertos servicios para la ejecución del proyecto. La
            empresa supervisará y garantizará la calidad de los trabajos
            subcontratados, pero no será responsable por cualquier
            incumplimiento o falta de calidad de estos proveedores.
          </p>
          <h2 style={{ marginTop: "6%", marginBottom: "3%" }}>
            9. Modificaciones, Cancelaciones y Rescisión del Contrato
          </h2>
          <p style={{ marginBottom: "3%" }}>
            9.1. Modificaciones del Proyecto: Cualquier cambio en el alcance o
            naturaleza del proyecto solicitado por el cliente durante la
            ejecución deberá ser acordado por ambas partes y podría implicar
            ajustes en los costos y plazos.
            <br />
            <br /> 9.2. Cancelación de Servicios por el Cliente: El cliente
            podrá cancelar los servicios notificando con al menos 10 días de
            anticipación. Los pagos realizados hasta la fecha no serán
            reembolsables, y el cliente será responsable de cubrir cualquier
            trabajo completado hasta el momento de la cancelación.
            <br />
            <br />
            9.3. Rescisión por Incumplimiento: MS Diseño y Publicidad se reserva
            el derecho de rescindir el contrato en caso de incumplimiento grave
            por parte del cliente, como el no pago de los servicios o la falta
            de colaboración. La empresa también podrá rescindir el contrato si
            se detecta un comportamiento inapropiado o poco ético por parte del
            cliente.
          </p>
          <h2 style={{ marginTop: "6%", marginBottom: "3%" }}>
            10. Política de Pagos y Reembolsos
          </h2>
          <p style={{ marginBottom: "3%" }}>
            10.1. Estructura de Pagos: Los pagos deberán realizarse según lo
            acordado en el contrato, pudiendo incluir un adelanto, pagos
            parciales o un pago total al finalizar el proyecto. MS Diseño y
            Publicidad no comenzará el trabajo sin la confirmación del pago
            inicial.
            <br />
            <br />
            10.2. Recargos por Retrasos: En caso de retraso en los pagos, se
            aplicarán recargos adicionales. Si el retraso persiste, MS Diseño y
            Publicidad puede suspender temporalmente los servicios hasta que se
            regularicen los pagos.
            <br />
            <br />
            10.3. Política de Reembolsos: Los pagos realizados no son
            reembolsables salvo en situaciones excepcionales, como el
            incumplimiento total de los servicios acordados por parte de MS
            Diseño y Publicidad. En estos casos, se evaluará un reembolso
            parcial según el estado de avance del proyecto.
          </p>
          <h2 style={{ marginTop: "6%", marginBottom: "3%" }}>
            11. Ley Aplicable y Resolución de Conflictos
          </h2>
          <p style={{ marginBottom: "3%" }}>
            11.1. Legislación y Jurisdicción: Estos términos y condiciones se
            regirán e interpretarán conforme a las leyes locales. Cualquier
            disputa relacionada con los servicios deberá resolverse en los
            tribunales correspondientes a la jurisdicción en la que MS Diseño y
            Publicidad tenga su sede.
            <br />
            <br />
            11.2. Resolución Alternativa de Disputas: Antes de recurrir a
            instancias legales, ambas partes se comprometen a intentar resolver
            cualquier disputa mediante negociación directa o mediación.
          </p>
          <h2 style={{ marginTop: "6%", marginBottom: "3%" }}>
            12. Aceptación de los Términos y Condiciones
          </h2>
          <p style={{ marginBottom: "3%" }}>
            El uso de los servicios de MS Diseño y Publicidad implica la
            aceptación total de estos términos y condiciones. Si el cliente
            tiene alguna duda o necesita más información, puede contactarnos
            para obtener asistencia.
          </p>
        </div>
      </Paper>
    </div>
  );
}
