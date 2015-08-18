// here we handle actions for specific routes and verbs

var Keyword = require('mongoose').model('Keyword');

exports.postKeyword = function (req, res, next) {
    var keyword = new Keyword(req.body);
    keyword.save(function (err) {
        if (err) res.send(err);
        else res.json(keyword);
    });
};


exports.getKeywords = function (req, res) {
    Keyword.find({})
    .exec(function (err, keywords) {
        if (err) res.status(500).send(err);
        else res.json(keywords);
    });
};