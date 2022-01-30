const router = require('express').Router();

const homeRoutes = require('./home-controllers');

router.use('/', homeRoutes);

module.exports = router;