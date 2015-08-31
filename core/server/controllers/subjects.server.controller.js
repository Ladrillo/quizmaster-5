// here we handle actions for specific routes and verbs

var Subject = require('mongoose').model('Subject');

exports.postSubject = function (req, res, next) {
    // if (req.loggedInUser.permissions.indexOf('canPostSubject') > -1)
    var subject = new Subject(req.body);
    subject.save(function (err) {
        if (err) res.send(err);
        else res.json(subject);
    });
};


exports.getSubjects = function (req, res) {
    Subject.find({})
        .exec(function (err, subjects) {
            if (err) res.status(500).send(err);
            else res.json(subjects);
        });
};


exports.getOneSubject = function (req, res) {
    Subject.findById(req.params.id)
        .exec(function (err, subject) {
            if (err) res.status(500).send(err);
            else res.json(subject);
        });
};


exports.putSubject = function (req, res) {
    Subject.findById(req.params.id)
        .exec(function (err, subject) {
            if (err) res.status(500).send(err);
            else {
                subject.name = req.body.name;
                subject.save();
                res.json(subject);
            }
        });
};


exports.deleteSubject = function (req, res) {
    Subject.findById(req.params.id)
        .remove(function (err) {
            if (err) res.status(500).send(err);
            else res.status(204).send('Removed');
        });
};

