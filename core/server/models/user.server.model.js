var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var UserSchema = new Schema({
    firstName: String,
    lastName: String,
    email: {
        type: String,
        match: [/.+\@.+\..+/, "Please fill a valid e-mail address"],
        required: true
    },
    // permissions: {
    //     required: true,
    //     type: [{
    //         type: Schema.Types.ObjectId,
    //         ref: 'Permission'
    //     }]
    // },
    created: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('User', UserSchema);