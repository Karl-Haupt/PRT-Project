const express = require('express')
const router = express.Router();

const { 
    processPayment,
    sendStripeApi
    } = require('../controllers/paymentController');

const { 
    userFavouriteCourse
    } = require('../controllers/topicsController');

const { isAuthenticatedUser } = require('../middlewares/auth');

router.route('/payment/process').post(isAuthenticatedUser, processPayment);
router.route('/stripeapi').get(isAuthenticatedUser, sendStripeApi);

router.route('/favouritetopics').post(userFavouriteCourse);

module.exports = router;



