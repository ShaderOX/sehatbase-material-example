import FavoriteIcon from "@mui/icons-material/Favorite";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Link,
  Typography,
} from "@mui/material";
import { green } from "@mui/material/colors";

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
            <Box
              display={"flex"}
              justifyContent="space-between"
              alignItems={"center"}
            >
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                textAlign={"left"}
              >
                {blog.title}
              </Typography>
              <Typography
                gutterBottom
                variant="caption"
                sx={{ textTransform: "uppercase" }}
                color={green[600]}
                component="div"
                textAlign={"right"}
              >
                {blog.author}
              </Typography>
            </Box>
            <Divider sx={{ marginBottom: 1 }} />
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
              <Button size="small">
                <FavoriteIcon sx={{ color: "red" }} />
              </Button>
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
