const express = require('express')
const router = express.Router();

const { 
    getCourse
    } = require('../controllers/courseController');


// const { isAuthenticatedUser } = require('../middlewares/auth');

router.route('/course/:course').get(getCourse);

module.exports = router;