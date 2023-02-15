import Welcome from "../components/Welcome";
import Head from "next/head";
import Body from "../components/Body";

export default function Home() {
  return (
    <>
      <Head>
        <title>NicoAHF blog</title>
        <meta
          name="description"
          content="Blog sobre programacion y libros no ficcion. Lee reseñas sobre libros y aprende programacion. Unete a la comunidad"
        />
        <meta
          name="keywords"
          content="Programacion, React, NextJS, Libros, No ficcion, Desarrollo web"
        />
        <meta name="author" content="Nicolas Hernandez" />
      </Head>
      <div className="body">
        <Welcome />
        <Body />
      </div>
    </>
  );
}
