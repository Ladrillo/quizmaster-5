(function () {
    "use strict";

    angular.module('quizmaster')
        .controller('quizListController', [
            '$scope',
            '$stateParams',
            'subjectsResource',
            'keywordsResource',
            'quizzesResource',
            'testsResource',
            'quizzes',
            quizListController]);

    function quizListController(
        $scope,
        $stateParams,
        subjectsResource,
        keywordsResource,
        quizzesResource,
        testsResource,
        quizzes) {

        $scope.quizzes = quizzes; // resolved in the route

        $scope.testInCreation = {
            quizzes: []
        };

        // DELETE QUIZ
        $scope.removeQuiz = function (quiz) {            ;
            quiz.$delete(function () {
                $scope.quizzes.splice($scope.quizzes.indexOf(quiz), 1);
            });
        };

        // CHECKBOXES THAT ADD TILE TO CURRENT TEST BEING CREATED
        $scope.addToTestInCreation = function (quiz) {
            if (this.testInCreation.quizzes.indexOf(quiz) === -1) {
                this.testInCreation.quizzes.push(quiz);
            }
            else {
                this.testInCreation.quizzes.splice(this.testInCreation.quizzes.indexOf(quiz), 1);
            }
        };

        // CREATE TEST
        $scope.createTest = function () {
        new testsResource($scope.testInCreation)
            .$save();
        };

        // FILTER
        $scope.filterByChecked = function (quiz) {
            if ($scope.testInCreation.quizzes.indexOf(quiz) === -1) return true;
            return false;
        };

    }





} ());

