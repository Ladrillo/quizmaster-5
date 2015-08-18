// MONGOOSE CONFIGURATION FILE
var config = require('./config'),
    mongoose = require('mongoose');

module.exports = function () {
    var db = mongoose.connect(config.db);
    require('../models/quiz.server.model');
    require('../models/user.server.model');
    require('../models/subject.server.model');
    require('../models/keyword.server.model');
    return db;
};