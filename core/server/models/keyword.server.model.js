var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var KeywordSchema = new mongoose.Schema({
    name: {
        required: true,
        trim: true,
        type: String
    },
    created: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Keyword', KeywordSchema);