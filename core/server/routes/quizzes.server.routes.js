// routes of our RESTful API
var quizzesCtrl = require('../controllers/quizzes.server.controller.js');

module.exports = function (app) {
    app.route('/api/quizzes')
        .post(quizzesCtrl.postQuiz)
        // .get(quizzesCtrl.getQuizzes);

    // app.route('/api/quizzes/:id')
    //     .get(quizzesCtrl.getQuiz)
    //     .patch(quizzesCtrl.patchQuiz)
    //     .put(quizzesCtrl.putQuiz)
    //     .delete(quizzesCtrl.deleteQuiz);
};