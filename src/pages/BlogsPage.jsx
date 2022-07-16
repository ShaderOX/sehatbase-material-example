import { Link, Pagination, PaginationItem } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import BlogGrid from "../components/BlogGrid";
import Heading from "../components/Heading";
import blogs from "../data/blogs.json";
import { BaseLayout } from "../layouts";

const BLOGS_PER_PAGE = 10;

const BlogsPage = () => {
  const [searchParams] = useSearchParams({ page: 1 });

  const blogTag = searchParams.get("tag");
  const page = parseInt(searchParams.get("page"));

  const [allBlogs, setAllBlogs] = useState([]);
  const [totalPages, setTotalPages] = useState();

  useEffect(() => {
    const timeout = setTimeout(
      () =>
        setAllBlogs(() => {
          const filteredBlogs = blogTag
            ? blogs.filter(blog => blog.tags.includes(blogTag.toLowerCase()))
            : blogs;

          setTotalPages(Math.ceil(filteredBlogs.length / BLOGS_PER_PAGE));
          const ret =
            filteredBlogs.length === 0
              ? null
              : filteredBlogs.slice(
                  (page - 1) * BLOGS_PER_PAGE,
                  page * BLOGS_PER_PAGE
                );

          console.log({ ret });
          return ret;
        }),
      2000
    );
    return () => {
      clearTimeout(timeout);
    };
  }, [blogTag, page]);

  return (
    <BaseLayout>
      <Heading text={"Blogs"} />

      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        marginY={"2rem"}
      >
        <Pagination
          page={page}
          count={totalPages}
          renderItem={item => (
            <PaginationItem
              component={Link}
              to={`/blogs${`?page=${item.page}`}`}
              {...item}
            />
          )}
        />
      </Box>

      <BlogGrid blogs={allBlogs} />
    </BaseLayout>
  );
};

export default BlogsPage;
