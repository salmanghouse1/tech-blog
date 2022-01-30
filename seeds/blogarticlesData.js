const { blogArticles } = require('../models');

const blogdata = [{
        article_name: 'Why MVC is so Important',
        article_image: './images/1.jpg',
        article_short_description: 'MVC is seperation of concerns...',
        author: 'John Doe',
        article_date: 'Jan 12/12/2022'

    }, {
        article_name: 'Why MVC is so Important Part 2',
        article_image: './images/2.jpg',
        article_short_description: 'and the controller logic...',
        author: 'John Doe',
        article_date: 'Jan 12/12/2022'

    }

];

const seedBlogArticles = () => blogArticles.bulkCreate(blogdata);

module.exports = seedBlogArticles;