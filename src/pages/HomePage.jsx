import { Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import BlogCard from "../components/BlogCard/BlogCard";
import BlogGrid from "../components/BlogGrid";
import Heading from "../components/Heading";
import blogs from "../data/blogs.json";
import { BaseLayout } from "../layouts";

const HomePage = () => {
  const [popularBlogs, setPopularBlogs] = useState([]);
  useEffect(() => {
    setPopularBlogs(blogs.filter(blog => blog.isPopular));
  }, []);

  return (
    <BaseLayout>
      <Heading text={"Popular Posts"} />

      <BlogGrid blogs={popularBlogs} />
    </BaseLayout>
  );
};

export default HomePage;
