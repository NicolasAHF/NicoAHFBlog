import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import classes from "./blog.module.css";
import { useContext } from "react";
import { blogContext } from "../context/BlogContext";

export default function Blog({ posts }) {
  const blogCtx = useContext(blogContext);

  return (
    <>
      <Head>
        <title>NicoAHF blog - Posteos</title>
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
      <main className={classes.main}>
        {posts.map((post) => {
          const { slug, frontmatter } = post;
          const { title, description, date, bannerImage, tags } =
            frontmatter;

          return (
            <article key={title} className={classes.posts}>
              <Link href={`/posts/${slug}`}>
                <Image
                  src={bannerImage}
                  alt={title}
                  width="200"
                  height="200"
                  className={classes.img}
                />
              </Link>
              <h1 className={classes.postTitle}>{title}</h1>

              <h3 className={classes.description}>{description}</h3>
              <h5>{date}</h5>
              <div className={classes.tags}>
                {tags.map((tag) => (
                  <a key={tag} className={classes.link}>
                    {tag}
                  </a>
                ))}
              </div>
            </article>
          );
        })}
      </main>
    </>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync("posts");
  const posts = files.map((fileName) => {
    const slug = fileName.replace(".md", "");
    const readFile = fs.readFileSync(`posts/${fileName}`, "utf-8");
    const { data: frontmatter } = matter(readFile);

    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts,
    },
  };
}
