import { useState } from "react";
import { blogContext } from "./BlogContext";

const BlogProvider = ({ children }) => {
  const [showFilter, setShowFilter] = useState(false);
    const [filteredPosts, setFilteredPosts] = useState([]);
    const [filterTags, setFilterTags] = useState([]);

    const onFilter = (posts, tags) => {
        filter = posts.filter((post) => post.tags.contains(tags))
        setFilteredPosts(filter);
    };
    
    const onFilterTags = (tags) => {
        let newTags = new Set(tags);
        setFilterTags(newTags);
    }

  return <blogContext.Provider value={{onFilter, filteredPosts, showFilter, setShowFilter, filterTags, onFilterTags}}>{children}</blogContext.Provider>;
};

export default BlogProvider;
