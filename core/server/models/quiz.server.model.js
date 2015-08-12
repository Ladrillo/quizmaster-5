var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var QuizSchema = new Schema({
    subject: {
        type: String,
        required: true
    },
    
    created: {
        type: Date,
        default: Date.now
    }


});


mongoose.model('Quiz', QuizSchema);