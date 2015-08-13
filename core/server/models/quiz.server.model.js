var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var QuizSchema = new Schema({
    stem: {
        required: true,
        type: String
    },
    truthies: {
        required: true,
        type: [String]
    },
    falsies: {
        required: true,
        type: [String]
    },
    created: {
        type: Date,
        default: Date.now
    },

});

mongoose.model('Quiz', QuizSchema);