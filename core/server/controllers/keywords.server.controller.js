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


exports.getOneKeyword = function (req, res) {
    Keyword.findById(req.params.id)
    .exec(function (err, keyword) {
        if (err) res.status(500).send(err);
        else res.json(keyword);
    });
};


exports.putKeyword = function (req, res) {
    Keyword.findById(req.params.id)
        .exec(function (err, keyword) {
            if (err) res.status(500).send(err);
            else {
                keyword.name = req.body.name;
                keyword.save();
                res.json(keyword);
            }
        });
};


exports.deleteKeyword = function (req, res) {
    Keyword.findById(req.params.id)
        .remove(function (err) {
            if (err) res.status(500).send(err);
            else res.status(204).send('Removed');
        });
};