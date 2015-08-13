var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var QuizSchema = new Schema({
    name: String,
    created: {
        type: Date,
        default: Date.now
    }
});

mongoose.model('User', QuizSchema);