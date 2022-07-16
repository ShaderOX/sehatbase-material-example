import { useEffect, useState } from "react";
import BlogGrid from "../components/BlogGrid";
import Heading from "../components/Heading";
import blogs from "../data/blogs.json";
import { BaseLayout } from "../layouts";

const HomePage = () => {
  const [popularBlogs, setPopularBlogs] = useState([]);
  useEffect(() => {
    const timeout = setTimeout(
      () =>
        setPopularBlogs(() => {
          const filteredBlogs = blogs.filter(blog => blog.isPopular);
          return filteredBlogs.length === 0 ? null : filteredBlogs;
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
