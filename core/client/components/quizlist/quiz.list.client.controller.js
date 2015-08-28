(function () {
    "use strict";

    angular.module('quizmaster')
        .controller('quizListController', [
            '$scope',
            '$stateParams',
            'subjectsResource',
            'keywordsResource',
            'quizzesResource',
            'quizzes',
            quizListController]);

    function quizListController(
        $scope,
        $stateParams,
        subjectsResource,
        keywordsResource,
        quizzesResource,
        quizzes) {

        $scope.quizzes = quizzes; // resolved in the route

        // DELETE QUIZ
        $scope.removeQuiz = function (quiz) {            ;
            quiz.$delete(function () {
                $scope.quizzes.splice($scope.quizzes.indexOf(quiz), 1);
            });
        };

    }


} ());