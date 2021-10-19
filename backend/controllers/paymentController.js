const User = require('../models/user');
const catchAsyncError = require('../middlewares/catchAsyncError')
const ErrorHandler = require('../utils/errorHandler');

// const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const Stripe = require('stripe');
const stripe = Stripe('sk_test_51HybYgLiB3sPftj43BhINjIqvP6CIAoWLlUrPVvv2knVfydUUZVeSKvBWYiJWWO5M7Mz0wozkekR3agPJuh4kb0l00uIYOzPPY');

// Process stripe payments   =>   /api/v1/payment/process
exports.processPayment = catchAsyncError(async (req, res, next) => {
    const newUserData = {
        isPaid: true,
    }

    const user = await User.findByIdAndUpdate(req.user.id, newUserData, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    });

    const paymentIntent = await stripe.paymentIntents.create({
        amount: req.body.amount,
        currency: 'usd',

        metadata: { integration_check: 'accept_a_payment' }
    });

    res.status(200).json({
        success: true,
        client_secret: paymentIntent.client_secret
    });

});

// Send stripe API Key   =>   /api/v1/stripeapi
exports.sendStripeApi = catchAsyncError(async (req, res, next) => {

    res.status(200).json({
        stripeApiKey: process.env.STRIPE_API_KEY
    });

});