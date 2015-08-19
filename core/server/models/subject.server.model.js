var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var SubjectSchema = new mongoose.Schema({
    name: {
        required: true,
        unique: true,
        trim: true,
        type: String
    },
    created: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Subject', SubjectSchema);