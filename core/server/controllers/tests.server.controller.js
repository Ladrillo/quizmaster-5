// here we handle actions for specific routes and verbs

var Test = require('mongoose').model('Test');

exports.postTest = function (req, res, next) {
    var test = new Test(req.body);
    test.save(function (err) {
        if (err) res.send(err);
        else res.json(test);
    });
};


exports.getTests = function (req, res) {
    Test.find({})
        .populate('quizzes')
        .exec(function (err, tests) {
            if (err) res.status(500).send(err);
            else res.json(tests);
        });
};


exports.getOneTest = function (req, res) {
    Test.findById(req.params.id)
        .populate('quizzes')
        .exec(function (err, test) {
            if (err) res.status(500).send(err);
            else res.json(test);
        });
};


exports.putTest = function (req, res) {
    Test.findById(req.params.id)
        .exec(function (err, test) {
            if (err) res.status(500).send(err);
            else {
                test.quizzes = req.body.quizzes;
                test.save();
                res.json(test);
            }
        });
};


exports.deleteTest = function (req, res) {
    Test.findById(req.params.id)
        .remove(function (err) {
            if (err) res.status(500).send(err);
            else res.status(204).send('Removed');
        });
};