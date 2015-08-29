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
        $scope.addToTestInCreation = function (id) {
            if (this.testInCreation.quizzes.indexOf(id) === -1) {
                this.testInCreation.quizzes.push(id);
            }
            else {
                this.testInCreation.quizzes.splice(this.testInCreation.quizzes.indexOf(id), 1);
            }
        };

        // CREATE TEST
        $scope.createTest = function () {
        new testsResource($scope.testInCreation)
            .$save();
        };

        // FILTERING
        $scope.shit = function(quiz) {
            if (quiz.shit) return false;
            return true;
        };

        $scope.noShit = function(quiz) {
            if (quiz.shit) return true;
            return false;
        };








    }





} ());

