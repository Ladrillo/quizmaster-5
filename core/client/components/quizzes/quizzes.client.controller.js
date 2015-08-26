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

        $scope.test = "This means the quizzesController and view are working. You should see tiles.";


        $scope.listQuizzes = function () {
            $scope.quizzes = quizzesResource.query();
        };

        // DELETE QUIZ
        $scope.removeQuiz = function (quiz) {
            this.quizzes.splice(this.quizzes.indexOf(quiz), 1);
            quiz.$delete();
        };

        $scope.listQuizzes();

    }


} ());