const Topics = require('../models/topics');

const ErrorHandler = require('../utils/errorHandler');
const catchAsyncError = require('../middlewares/catchAsyncError');

//User favourtie course -> /api/user/favouriteTopics
exports.userFavouriteCourse = catchAsyncError( async (req, res, next) => {
    console.log("This is the req body " + req.body);

    let topics = [];

    req.body.map((tpc) => {
        
        topics.push(tpc);
    })

    console.log(topics.length);

    const favTopics = await Topics.create({
        topics
    }); 

    res.status(200).json({
        success: true,
        message: "Thanks, favTopics",
        favTopics
    });
});