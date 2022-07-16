import { Grid, Skeleton, Typography } from "@mui/material";
import React from "react";
import BlogCard from "./BlogCard/BlogCard";

const BlogGrid = ({ blogs, ...props }) => {
  return !blogs ? (
    <Typography textAlign={"center"} variant={"h6"}>
      No posts found
    </Typography>
  ) : (
    <Grid container gap={5} justifyContent="center" {...props}>
      {blogs && blogs.length > 0
        ? blogs.map((blog, idx) => (
            <Grid key={`${blog.title}-${idx}`} item>
              <BlogCard blog={blog} xs={3} />
            </Grid>
          ))
        : Array.from({ length: 6 }).map((_, idx) => (
            <Skeleton
              key={idx}
              variant="rectangular"
              width={345}
              height={420}
            />
          ))}
    </Grid>
  );
};

export default BlogGrid;
