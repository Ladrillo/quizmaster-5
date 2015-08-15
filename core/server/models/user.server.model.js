var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var UserSchema = new Schema({
    firstName: String,
    lastName: String,
    email: {
        type: String,
        match: [/.+\@.+\..+/, "Please fill a valid e-mail address"]
    },
    // username: {
    //     type: String,
    //     unique: true,
    //     required: 'Username is required',
    //     trim: true,
    // },
    // password: {
    //     type: String,
    //     validate: [
    //         function (password) {
    //             return password && password.length > 6;
    //         }, 'Password should be longer'
    //     ]
    // },
    created: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('User', UserSchema);