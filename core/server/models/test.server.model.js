var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var QuizSchema = new Schema({
    quizzes: {
        required: true,
        type: [{
            type: Schema.Types.ObjectId,
            ref: 'Quiz'
        }]
    },
    created: {
        type: Date,
        default: Date.now
    },
    description: {
        required: true,
        type: String
    }
});

module.exports = mongoose.model('Test', QuizSchema);