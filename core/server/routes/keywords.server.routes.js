// routes of our RESTful API
var keywordsCtrl = require('../controllers/keywords.server.controller.js');

module.exports = function (app) {
    app.route('/api/keywords')
        .post(keywordsCtrl.postKeyword)
        .get(keywordsCtrl.getKeywords);

    app.route('/api/keywords/:id')
        .get(keywordsCtrl.getOneKeyword)
        .put(keywordsCtrl.putKeyword)
        .delete(keywordsCtrl.deleteKeyword);
};