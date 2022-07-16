import blogs from '../data/blogs.json';
import _ from 'lodash';

const BLOGS_PER_PAGE = 10;

const filterBlogs = (filter) => {
  const ret = filter ? blogs.filter(filter) : blogs;
  return ret.length === 0 ? null : ret;
};

const filterBlogsPaginate = (page, filter) => {
  const ret = (filter ? blogs.filter(filter) : blogs).slice((page - 1) * BLOGS_PER_PAGE, page * BLOGS_PER_PAGE);
  return ret.length === 0 ? null : ret;
};

const getSimilarBlogs = (tags, filter) => {
  let ret = _.uniqBy(_.flatten(tags.map((tag) => {
    return blogs.filter((blog) => blog.tags.includes(tag));
  })).filter(blog => blog.isPopular), 'title');

  ret = filter ? ret.filter(filter) : ret;
  return ret.length === 0 ? null : ret;
};

export { filterBlogs, filterBlogsPaginate, getSimilarBlogs, BLOGS_PER_PAGE };
