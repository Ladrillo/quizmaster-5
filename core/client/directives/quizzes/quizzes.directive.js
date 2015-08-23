(function () {
    "use strict";

    angular.module('quizmaster')
        .directive('gabeQuizzes', function () {
            return {
                restrict: 'E',

                templateUrl: 'directives/quizzes/quizzes.template.html',



                controller: function ($scope) {
                    $scope.checkedSubjects = [];
                    $scope.checkedKeywords = [];

                    $scope.truthies = [];
                    $scope.falsies = [];

                    $scope.addTruthy = function (truthy) {
                        this.truthies.push(truthy);
                    };

                    $scope.addFalsy = function (falsy) {
                        this.falsies.push(falsy);
                    };

                    $scope.editing = false;
                    $scope.flipEditing = function () {
                        this.editing = !this.editing;
                    };
                    $scope.currentAnswer
                }
            };
        });



} ());