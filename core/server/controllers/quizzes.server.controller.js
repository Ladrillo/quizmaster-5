// here we handle actions for specific routes and verbs
// TODAVIA ESTA HECHO UNA MIERDA

var Quiz = require('mongoose').model('Quiz');

exports.postQuiz = function (req, res, next) {
    var quiz = new Quiz(req.body);
    quiz.save(function (err) {
        if (err) res.send(err);
        else res.json(quiz);
    });
};


exports.getQuizzes = function (req, res) {
    var query = {};
    Quiz.find(query, function (err, quizzes) {
        if (err) res.status(500).send(err);
        else res.json(quizzes);
    });
};