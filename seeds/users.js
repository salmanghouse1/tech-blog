//Create users model

const { blogArticles } = require('../models');


UsersData = [{

    user_name: 'JohnDoe12',
    password: 'myPassword12',
    email: "JohnDoe12@gmail.com"
}]



const seedUsers = () => seedUsers.bulkCreate(UsersData);




module.exports = seedUsers;