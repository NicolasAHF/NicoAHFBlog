import Image from "next/image";
import classes from "./Welcome.module.css";

function Welcome(props) {
  return (
    <>
      <div className={classes.container}>
        <div className={classes.container2}>
          <h1>Bienvenido a NicoAHF blog</h1>
          <div className={classes.container3}>
            <p>
              En este blog pretendo expresar mis opiniones y compartir mis
              experiencias sobre <span>libros / cursos / vídeos</span> o
              cualquier otro tema que me parezca interesante. Los temas
              principales que trataremos aquí son sobre{" "}
              <span>programación</span> y <span>libros de no ficción</span>.
              ¡Espero que el contenido les resulte interesante y también espero
              aprender mucho más de lo que escribo y de lo que ustedes también
              quieran aportar!
            </p>
            <Image
              className={classes.img}
              src="/images/posts/me.jpg"
              alt="me"
              width="350"
              height="350"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Welcome;
