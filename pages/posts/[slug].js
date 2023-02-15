import fs from "fs";
import matter from "gray-matter";
import md from "markdown-it";
import Image from "next/image";
import Head from "next/head";
import classes from "./slug.module.css";

export default function Post({ frontmatter, content }) {
  const { title, category, date, bannerImage, footer } = frontmatter;

  return (
    <main className={classes.main}>
      <Head>
        <title>NicoAHF - {title}</title>
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
      <div>
        <Image
          src={bannerImage}
          width="200"
          height="200"
          alt={title}
          className={classes.img}
        />
        <h1>{title}</h1>
        <h2 className={classes.text}>
          {date} {category}
        </h2>
        <div dangerouslySetInnerHTML={{ __html: md().render(content) }} />
      </div>
      <div>
      {footer}
      </div>
    </main>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync("posts");
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const fileName = fs.readFileSync(`posts/${slug}.md`, "utf-8");
  const { data: frontmatter, content } = matter(fileName);
  return {
    props: {
      frontmatter,
      content,
    },
  };
}
