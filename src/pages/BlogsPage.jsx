import { Link, Pagination, PaginationItem } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import BlogGrid from "../components/BlogGrid";
import Heading from "../components/Heading";
import { BaseLayout } from "../layouts";
import { BLOGS_PER_PAGE, filterBlogs } from "../utils/blogs";

const BlogsPage = () => {
  const [searchParams] = useSearchParams({ page: 1, tag: "" });

  const blogTag = searchParams.get("tag").toLowerCase();
  const page = parseInt(searchParams.get("page"));

  const [allBlogs, setAllBlogs] = useState([]);
  const [totalPages, setTotalPages] = useState();

  useEffect(() => {
    const timeout = setTimeout(
      () =>
        setAllBlogs(() => {
          const filteredBlogs = filterBlogs(
            blogTag && (blog => blog.tags.includes(blogTag))
          );
          setTotalPages(Math.ceil(filteredBlogs.length / BLOGS_PER_PAGE));
          const ret =
            filteredBlogs.length === 0
              ? null
              : filteredBlogs.slice(
                  (page - 1) * BLOGS_PER_PAGE,
                  page * BLOGS_PER_PAGE
                );

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
