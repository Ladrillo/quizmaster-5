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
    user: { type: Schema.Types.ObjectId, ref: 'User' }

});

module.exports = mongoose.model('Quiz', QuizSchema);

var example =
    {
        "instructions": "Translate this, bitch!",
        "stem": "Javascript...",
        "truthies": ["hola", "adios"],
        "falsies": ["mal", "asunto"],
        "user": "55cea7d98f799c044bee920f"
    };