(function () {
    "use strict";

    angular.module('quizmaster')
        .controller('quizEditController', [
            '$scope',
            '$stateParams',
            '$resource',
            'subjectsResource',
            'keywordsResource',
            'quizzesResource',
            quizEditController]);

    function quizEditController(
        $scope,
        $stateParams,
        $resource,
        subjectsResource,
        keywordsResource,
        quizzesResource) {

        // GET THE CURRENT QUIZ FROM THE URL
        $scope.getCurrentQuiz = function () {
            $scope.currentQuiz = quizzesResource.get({ id: $stateParams.id }, function () {
                getCurrentQuizSubjects();
                getCurrentQuizKeywords();
            });
        };


        // GET THE CURRENT QUIZ'S SUBJECTS
        function getCurrentQuizSubjects() {
            $scope.currentQuizSubjects = $scope.currentQuiz.subjects;

        }

        function getCurrentQuizKeywords() {
            $scope.currentQuizKeywords = $scope.currentQuiz.subjects;
        }


        $scope.getCurrentQuiz();











        //         // words directive is bound to these:
        //         $scope.checkedSubjects = [];
        //         $scope.checkedKeywords = [];
        //
        //         // sentences directive is bound to these:
        //         $scope.truthies = $scope.currentQuiz.truthies;
        //         $scope.falsies = $scope.currentQuiz.falsies;
        //         $scope.regexps = $scope.currentQuiz.regexps;
        //
        //         // the other values the quiz needs:
        //         $scope.instructions = $scope.currentQuiz.instructions;
        //         $scope.stem = $scope.currentQuiz.stem;





    }


} ());