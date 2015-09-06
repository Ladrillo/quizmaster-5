(function () {
    "use strict";

    angular.module('quizmaster')
        .controller('quizListController', [
            '$scope',
            '$state',
            '$stateParams',
            'selectService',
            'subjectsResource',
            'keywordsResource',
            'quizzesResource',
            'testsResource',
            'quizzes',
            quizListController]);

    function quizListController(
        $scope,
        $state,
        $stateParams,
        selectService,
        subjectsResource,
        keywordsResource,
        quizzesResource,
        testsResource,
        quizzes) {


        // POPULATE EVERYTHING CORRECTLY
        (function () {
            $scope.quizzes = quizzes; // resolved in the route

            $scope.testInCreation = selectService.getTestInCreation() || $scope.testInCreation || { quizzes: [], description: "" };

            // DOING THE RIGHT THING IF I NAVIGATE BACK TO DESIGNING NEW TEST
            if ($scope.testInCreation.description) {
                // this callback checks the appropiate checkboxes
                $scope.quizzes.forEach(function (qz) {
                    $scope.testInCreation.quizzes.forEach(function (q) {
                        if (q._id === qz._id) {
                            qz.checked = true;
                        }
                    });
                });
            }


            // GRABBING TEST BEING MODIFIED, FROM URL PARAMETERS
            if ($stateParams.id) {
                $scope.testInCreation = testsResource.get({ id: $stateParams.id }, function () {
                    // this callback checks the appropiate checkboxes and fills description
                    $scope.description = $scope.testInCreation.description;
                    $scope.quizzes.forEach(function (qz) {
                        $scope.testInCreation.quizzes.forEach(function (q) {
                            if (q._id === qz._id) {
                                qz.checked = true;
                            }
                        });
                    });
                });
            }
        } ());


        // CHECK IF THERE ARE PARAMETERS IN THE URL
        $scope.isTestNew = function () {
            // console.log($stateParams.id);
            return !$stateParams.id;
        };


        // CHECKBOXES THAT ADD OR REMOVE TILE TO CURRENT TEST BEING CREATED
        $scope.toggleChecked = function (quiz) {
            if (this.testInCreation.quizzes.every(function (qz) {
                return quiz._id !== qz._id;
            })) {
                this.testInCreation.quizzes.push(quiz);
                selectService.setTestInCreation(this.testInCreation);
            }
            else {
                this.testInCreation.quizzes.splice(this.testInCreation.quizzes.indexOf(quiz), 1);
                selectService.setTestInCreation(this.testInCreation);
            }
        };


        // CREATE TEST
        $scope.createTest = function () {
            new testsResource({
                quizzes: $scope.testInCreation.quizzes,
                description: $scope.description
            })
                .$save(function () {
                    $state.go('testlist');
                });
        };


        // UPDATE TEST
        $scope.updateTest = function () {
            testsResource.update({
                id: $scope.testInCreation._id
            }, {
                    quizzes: $scope.testInCreation.quizzes,
                    description: $scope.description
                }, function () {
                    $state.go('testlist');
                });
        };


        // DELETE QUIZ
        $scope.removeQuiz = function (quiz) {
            quiz.$delete(function () {
                $scope.quizzes.splice($scope.quizzes.indexOf(quiz), 1);
            });
        };


        // DISABLE NEW TEST BUTTON
        $scope.newTestButtonDisabled = function () {
            if (!this.description || this.testInCreation.quizzes.length === 0) {
                return true;
            }
            return false;
        };

    }





} ());

