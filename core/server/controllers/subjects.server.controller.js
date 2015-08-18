// here we handle actions for specific routes and verbs

var Subject = require('mongoose').model('Subject');

exports.postSubject = function (req, res, next) {
    var subject = new Subject(req.body);
    subject.save(function (err) {
        if (err) res.send(err);
        else res.json(subject);
    });
};


exports.getSubjects = function (req, res) {
    Subject.find({})
    .populate('user')
    .exec(function (err, subjects) {
        if (err) res.status(500).send(err);
        else res.json(subjects);
    });
};