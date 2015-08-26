(function () {
    "use strict";

    angular.module('quizmaster')
        .controller('quizController', [
            '$scope',
            '$stateParams',
            '$resource',
            'subjectsResource',
            'keywordsResource',
            'quizzesResource',
            quizController]);

    function quizController(
        $scope,
        $stateParams,
        $resource,
        subjectsResource,
        keywordsResource,
        quizzesResource) {

        $scope.test = "This means the quizController and view are working.";

        $scope.getOneQuiz = function () {
            $scope.currentQuiz = quizzesResource.get({ id: $stateParams.id });
            // sentences directive is bound to these:
            $scope.truthies = $scope.currentQuiz.truthies;
            $scope.falsies = $scope.currentQuiz.falsies;
            $scope.regexps = $scope.currentQuiz.regexps;

            // the other values the quiz needs:
            $scope.instructions = $scope.currentQuiz.instructions;
            $scope.stem = $scope.currentQuiz.stem;
        };

        $scope.getOneQuiz();

        // words directive is bound to these:
        $scope.checkedSubjects = [];
        $scope.checkedKeywords = [];





    }


} ());