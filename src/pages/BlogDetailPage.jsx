import { Divider, Grid, Link, Typography, useMediaQuery } from "@mui/material";
import { green } from "@mui/material/colors";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import Carousel from "react-material-ui-carousel";
import { useParams } from "react-router-dom";
import BlogCard from "../components/BlogCard/BlogCard";
import Heading from "../components/Heading";
import blogs from "../data/blogs.json";
import { BaseLayout } from "../layouts";

const BlogDetailPage = () => {
  const { blogId } = useParams();
  const [currentBlog, setCurrentBlog] = useState(null);

  useEffect(() => {
    const timeout = setTimeout(
      setCurrentBlog(() => {
        const ret = blogs.filter(blog => blog.id === blogId);

        return ret[0];
      }),
      2000
    );
    return () => {
      clearTimeout(timeout);
    };
  }, [blogId]);

  return (
    <BaseLayout>
      <Heading />

      {currentBlog && (
        <Grid container gap={4}>
          <Grid item xs={12} md={6}>
            <Carousel
              stopAutoPlayOnHover={true}
              swipe={true}
              sx={{ height: "100%" }}
            >
              {currentBlog.images.map((image, idx) => {
                return (
                  <img
                    key={idx}
                    src={image}
                    alt={image}
                    loading="lazy"
                    style={{
                      aspectRatio: "16/9",
                      width: "100%",
                    }}
                  />
                );
              })}
            </Carousel>
          </Grid>

          <Grid
            mt={4}
            item
            xs
            alignItems="center"
            justifyContent={"space-evenly"}
            display={"flex"}
            flexDirection={"column"}
            width="100%"
          >
            <Typography
              variant="h3"
              textAlign={"center"}
              sx={{ fontWeight: "400", letterSpacing: "2px" }}
            >
              {currentBlog.title}
            </Typography>
            <Box
              width="100%"
              justifyContent={"space-around"}
              display="flex"
              mt={3}
            >
              <Typography variant="overline">
                {new Date(currentBlog.publishedAt).toDateString()}
              </Typography>
              <Typography variant="button" color={green[600]}>
                {currentBlog.author}
              </Typography>
            </Box>

            <Box
              justifyContent={"space-around"}
              display="flex"
              flexWrap={"wrap"}
              mt={5}
              width={"75%"}
              marginX="auto"
            >
              {currentBlog.tags.map((tag, idx) => {
                return (
                  <Link key={`${tag}-${idx}`} to={`/blogs?tag=${tag}`}>
                    <Typography
                      variant="caption"
                      sx={{
                        textDecoration: "underline",
                        textTransform: "capitalize",
                      }}
                    >
                      {tag}
                    </Typography>
                  </Link>
                );
              })}
            </Box>
          </Grid>

          <Grid item xs={12} mt={4}>
            <Typography variant="body2" textAlign={"justify"}>
              {currentBlog.content}
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Divider />
            <Typography variant="h3" textAlign={"center"} my={4}>
              Similar Blogs
            </Typography>

            <Carousel navButtonsAlwaysVisible={true} interval={2000}>
              {blogs.slice(0, 5).map(blog => (
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <BlogCard blog={blog} />
                </Box>
              ))}
            </Carousel>
          </Grid>
        </Grid>
      )}
    </BaseLayout>
  );
};

export default BlogDetailPage;
