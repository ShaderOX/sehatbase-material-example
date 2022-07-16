import React, { useEffect, useState } from "react";
import BlogGrid from "../components/BlogGrid";
import Heading from "../components/Heading";
import { BaseLayout } from "../layouts";
import { filterBlogs } from "../utils/blogs";

const HomePage = () => {
  const [popularBlogs, setPopularBlogs] = useState([]);
  useEffect(() => {
    const timeout = setTimeout(
      () =>
        setPopularBlogs(() => {
          return filterBlogs(blog => blog.isPopular);
        }),
      2000
    );

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <BaseLayout>
      <Heading text={"Popular Blogs"} />

      <BlogGrid blogs={popularBlogs} />
    </BaseLayout>
  );
};

export default HomePage;
