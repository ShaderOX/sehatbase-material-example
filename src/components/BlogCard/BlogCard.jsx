import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Link,
  Typography,
} from "@mui/material";

const BlogCard = ({ blog }) => {
  return (
    <Card sx={{ maxWidth: 345, height: "100%" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
        }}
        component={"div"}
      >
        <CardMedia
          component="img"
          alt={blog.title}
          height="240"
          image={blog.images[0]}
        />
        <Box>
          <CardContent>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              textAlign={"center"}
            >
              {blog.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {blog.content.slice(0, 100)} ...
            </Typography>
          </CardContent>

          <CardContent>
            <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
              {blog.tags.length > 0 &&
                blog.tags.slice(0, 5).map((tag, idx) => {
                  return (
                    <Link key={`${tag}-${idx}`} to={`/blogs?tag=${tag}`}>
                      <Typography
                        variant="caption"
                        sx={{ textDecoration: "underline" }}
                      >
                        {`${tag.charAt(0).toUpperCase()}${tag.slice(1)}`}
                      </Typography>
                    </Link>
                  );
                })}
            </Box>
          </CardContent>

          <CardActions>
            <Box
              width="100%"
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <Button size="small">Add to List</Button>
              <Link to={`/blogs/${blog.id}`}>
                <Button size="small">Learn More</Button>
              </Link>
            </Box>
          </CardActions>
        </Box>
      </Box>
    </Card>
  );
};

export default BlogCard;
