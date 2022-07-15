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

          <CardActions>
            <Box
              width="100%"
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <Button size="small">Add to List</Button>
              <Link to={`/posts/${blog.id}`}>
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
