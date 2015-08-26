(function () {
    "use strict";

    angular.module('quizmaster')
        .controller('quizzesController', [
            '$scope',
            '$stateParams',
            'subjectsResource',
            'keywordsResource',
            'quizzesResource',
            quizzesController]);

    function quizzesController(
        $scope,
        $stateParams,
        subjectsResource,
        keywordsResource,
        quizzesResource) {


        // GET ALL QUIZZES
        $scope.listQuizzes = function () {
            quizzesResource.query(function (response) {
                $scope.quizzes = response;
            });
        };


        // DELETE QUIZ
        $scope.removeQuiz = function (quiz) {            ;
            quiz.$delete(function () {
                $scope.quizzes.splice($scope.quizzes.indexOf(quiz), 1);
            });
        };

        $scope.listQuizzes();

    }


} ());