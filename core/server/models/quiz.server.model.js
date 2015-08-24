var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var QuizSchema = new Schema({
    subjects: {
        required: true,
        type: [String]
    },

    keywords: {
        required: true,
        type: [String]
    },

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

    regexps: {
        required: true,
        trim: true,
        type: [String]
    },

    created: {
        type: Date,
        default: Date.now
    },

    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        default: '55da8d4d78f304ac6047cf1d'
    }

});

module.exports = mongoose.model('Quiz', QuizSchema);