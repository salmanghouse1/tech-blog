const BlogArticles = require("../models/BlogArticles");

const blogdata = [
  {
    article_name: "Why MVC is so Important",
    article_image: "./images/1.jpg",
    article_short_description: "MVC is seperation of concerns...",
    article_description: "ehh",
    author: "John Doe",
    article_date: "Jan 12/12/2022",
  },
  {
    article_name: "Why MVC is so Important",
    article_image: "./images/1.jpg",
    article_short_description: "MVC is seperation of concerns...",
    article_description: "ehh",
    author: "John Doe",
    article_date: "Jan 12/12/2022",
  },
];

const seedBlogArticles = () => BlogArticles.bulkCreate(blogdata);

module.exports = seedBlogArticles;
