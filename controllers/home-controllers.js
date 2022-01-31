const router = require('express').Router();




router.get('/', (req, res) => {

    res.render("homepage");

})


router.get('/login', (req, res) => {

    res.render("login");

})

router.post('/submit-login', (req, res) => {

})


module.exports = router;