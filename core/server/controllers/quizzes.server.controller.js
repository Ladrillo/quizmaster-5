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
    // if (req.query.species && req.query.region) {
    //     query.species = req.query.species;
    //     query.region = req.query.region;
    // }
    // else if (req.query.species) query.species = req.query.species;
    // else if (req.query.region) query.region = req.query.region;

    Quiz.find(query, function (err, quizzes) {
        if (err) res.status(500).send(err);
        else res.json(quizzes);
    });
};


exports.getQuiz = function (req, res) {
    // Quiz.findById(req.params.quiz_id, function (err, quiz) {
    //     if (err) res.status(404).send(err);
    //     else res.json(quiz);
    // });
};


exports.putQuiz = function (req, res) {
    // Quiz.findById(req.params.quiz_id, function (err, quiz) {
    //     if (err) res.send(err);
    //     else {
    //         quiz.species = req.body.species;
    //         quiz.order = req.body.order;
    //         quiz.region = req.body.region;
    //         quiz.status = req.body.status;
    //         quiz.save(function (err) {
    //             if (err) res.send(err);
    //             else res.json({ 'message': 'quiz updated!' });
    //         });
    //     }
    // });
};


exports.patchQuiz = function (req, res) {
    // Quiz.findById(req.params.quiz_id, function (err, quiz) {
    //     if (err) res.send(err);
    //     else {
    //         quiz.species = req.body.species;
    //         quiz.order = req.body.order;
    //         quiz.region = req.body.region;
    //         quiz.status = req.body.status;
    //         quiz.save(function (err) {
    //             if (err) res.send(err);
    //             else res.json({ 'message': 'quiz updated!' });
    //         });
    //     }
    // });
};


exports.deleteQuiz = function (req, res) {
    // Quiz.remove({ _id: req.params.quiz_id }, function (err, quiz) {
    //     if (err) res.send(err);
    //     else res.json({ 'message': 'quiz deleted!' });
    // });
};

