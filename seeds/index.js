const sequelize = require('../config/connection');
const seedBlogArticles = require('./blogarticlesData');


const seedAll = async() => {
    await sequelize.sync({ force: true });

    await seedBlogArticles();


    process.exit(0);
};

seedAll();