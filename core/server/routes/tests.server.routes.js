// routes of our RESTful API
var testsCtrl = require('../controllers/tests.server.controller.js');

module.exports = function (app) {
    app.route('/api/tests')
        .post(testsCtrl.postTest)
        .get(testsCtrl.getTests);

    app.route('/api/tests/:id')
        .get(testsCtrl.getOneTest)
        .put(testsCtrl.putTest)
        .delete(testsCtrl.deleteTest);
};