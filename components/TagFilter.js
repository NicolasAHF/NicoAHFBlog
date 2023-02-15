import { useState, useContext } from "react";
import { blogContext } from "../context/BlogContext";

export default function TagFilter({ posts }) {
  const [isClicked, setIsClicked] = useState(false);
  const blogCtx = useContext(blogContext);

  const clickHandler = () => {
    setIsClicked(!isClicked);
  };

  let allTags = [];

  posts.map((post) => {
    const { slug, frontmatter } = post;
    const { tags } = frontmatter;

    allTags = allTags.concat(tags);

    return allTags;
  });

    const setTags = new Set(allTags);

  return (
    <>
      <div>
        {[...setTags].map((tag) => {
            <a key={tag}>{tag.value} HOLA</a>
        })}
      </div>
      <button onClick={clickHandler}>Guardar</button>
    </>
  );
}
