const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    courseTitle: {
        type: String,
        required: true
    },
    questions: [
        {
            questionText: {
                type: String,
                required: true
            },
            answerOptions: [
                {
                    answerText: {
                        type: String
                    },
                    isCorrect: {
                        type: Boolean
                    }
                }
            ]
        }
    ]
});

module.exports = mongoose.model( 'courses', courseSchema );