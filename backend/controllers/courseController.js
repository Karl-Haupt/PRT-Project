const Course = require('../models/course');

const ErrorHandler = require('../utils/errorHandler');
const catchAsyncError = require('../middlewares/catchAsyncError');

//Get course questions and answers => api/v1/course
exports.getCourse = catchAsyncError( async (req, res, next) => {
    //Get the course name + find the course
    console.log(req.params.course);
    const lengthOfCourse = await Course.countDocuments();
    console.log("Amount of " + lengthOfCourse);
    const course = Course.findOne( { courseTitle: req.params.course } );
    console.log("This is course name " + course.courseTitle);

    //Check if course exists
    if(!course) {
        new ErrorHandler('Course not found with this title', 404);
    }


    //return success + course
    res.status(200).json({
        success: true,
        course
    });
});