var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var QuizSchema = new mongoose.Schema({
    instructions: {
        required: true,
        trim: true,
        type: String,
    },
    stem: {
        required: true,
        trim: true,
        type: String,
    },
    truthies: {
        required: true,
        trim: true,
        type: [String]
    },
    falsies: {
        required: true,
        trim: true,
        type: [String]
    },
    created: {
        type: Date,
        default: Date.now
    },
    user: { type: Schema.Types.ObjectId, ref: 'User' }

});

module.exports = mongoose.model('Quiz', QuizSchema);