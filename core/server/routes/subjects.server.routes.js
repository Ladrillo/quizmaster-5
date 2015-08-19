// routes of our RESTful API
var subjectsCtrl = require('../controllers/subjects.server.controller.js');

module.exports = function (app) {
    app.route('/api/subjects')
        .post(subjectsCtrl.postSubject)
        .get(subjectsCtrl.getSubjects);

    app.route('/api/subjects/:id')
        .get(subjectsCtrl.getOneSubject)
        .put(subjectsCtrl.putSubject)
        .delete(subjectsCtrl.deleteSubject);
};