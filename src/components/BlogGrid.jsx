import { Grid } from "@mui/material";
import React from "react";
import BlogCard from "./BlogCard/BlogCard";

const BlogGrid = ({ blogs, ...props }) => {
  return (
    <Grid container gap={5} justifyContent="center" {...props}>
      {blogs.map(blog => (
        <Grid key={blog.title} item>
          <BlogCard blog={blog} xs={3} />
        </Grid>
      ))}
    </Grid>
  );
};

export default BlogGrid;
