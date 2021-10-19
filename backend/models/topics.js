const mongoose = require('mongoose');

const topicSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true
    },
    favTopics: {
        type: String,
        required: [true, 'Please select one topic or more'],
        enum: {
            values: [
                'Git',
                'GitHub',
                'Advanced Java',
                'Agile practice',
                'Python',
                'React.js',
                'Kotlin',
                'Mobile programming',
                'Scala prgramming',
                'Artificial Intelligence',
                'Web Development'
            ]
        }
    } 
});

module.exports = mongoose.model('Topics', topicSchema);