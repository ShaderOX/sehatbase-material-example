const { faker } = require('@faker-js/faker');
const fs = require('fs');
const path = require('path');
const { v4: uuid } = require('uuid');

const FILENAME = path.join(__dirname, 'blogs.json');
const BLOGS_TO_CREATE = 100;

const MAX_WORDS_IN_TITLE = 5;
const WORDS_IN_DESCRIPTION = 1000;
const AVERAGE_IMAGES_PER_BLOG = 6;
const AVERAGE_TAGS_PER_BLOG = 10;

const tags = Array.from({ length: BLOGS_TO_CREATE }).map(() => faker.word.adjective());
const blogs = Array.from({ length: BLOGS_TO_CREATE }).map(() => createBlog(tags));

function createBlog(tags) {
  return ({
    id: uuid(),
    title: faker.random.words(Math.random() * MAX_WORDS_IN_TITLE),
    content: faker.random.words(WORDS_IN_DESCRIPTION),
    author: faker.name.firstName() + ' ' + faker.name.lastName(),
    publishedAt: faker.date.past(),
    isPopular: Math.random() >= 0.9,
    images: Array.from({ length: Math.random() * AVERAGE_IMAGES_PER_BLOG + 1 }).map(() => faker.image.abstract(640, 480, true)),
    tags: Array.from({ length: Math.random() * AVERAGE_TAGS_PER_BLOG }).map(() => tags[parseInt(Math.random() * tags.length)])
  });
}



fs.writeFile(FILENAME, JSON.stringify(blogs, null, 2), (err) => {
  if (err) {
    console.log("ERROR: ", err);
  } else {
    console.log(`${BLOGS_TO_CREATE} blogs written to ${FILENAME}`);
  }
});
