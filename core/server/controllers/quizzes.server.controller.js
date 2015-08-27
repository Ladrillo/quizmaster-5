// here we handle actions for specific routes and verbs

var Quiz = require('mongoose').model('Quiz');

exports.postQuiz = function (req, res, next) {
    var quiz = new Quiz(req.body);
    quiz.save(function (err) {
        if (err) res.send(err);
        else res.json(quiz);
    });
};


exports.getQuizzes = function (req, res) {
    Quiz.find({})
        .populate('user')
        .populate('subjects')
        .populate('keywords')
        .exec(function (err, quizzes) {
            if (err) res.status(500).send(err);
            else res.json(quizzes);
        });
};


exports.getOneQuiz = function (req, res) {
    Quiz.findById(req.params.id)
        .exec(function (err, quiz) {
            if (err) res.status(500).send(err);
            else res.json(quiz);
        });
};


exports.putQuiz = function (req, res) {
    Quiz.findById(req.params.id)
        .exec(function (err, quiz) {
            if (err) res.status(500).send(err);
            else {
                quiz.name = req.body.name;
                quiz.save();
                res.json(quiz);
            }
        });
};


exports.deleteQuiz = function (req, res) {
    Quiz.findById(req.params.id)
        .remove(function (err) {
            if (err) res.status(500).send(err);
            else res.status(204).send('Removed');
        });
};