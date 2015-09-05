(function () {
    "use strict";

    angular.module('quizmaster')
        .filter('checkedQuiz', function () {
            return function (quizCollection) {
                var out = [];
                quizCollection.forEach(function (quiz) {
                    if (!quiz.checked) out.push(quiz);
                });
                return out;
            };
        })

        .filter('uncheckedQuiz', function () {
            return function (quizCollection) {
                var out = [];
                quizCollection.forEach(function (quiz) {
                    if (quiz.checked) out.push(quiz);
                });
                return out;
            };
        });


} ());