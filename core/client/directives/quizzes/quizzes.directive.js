(function () {
    "use strict";

    angular.module('quizmaster')
        .directive('gabeQuizzes', function () {
            return {
                restrict: 'E',

                templateUrl: 'directives/quizzes/quizzes.template.html',

                controller: function ($scope) {
                    // words directive is bound to these:
                    $scope.checkedSubjects = [];
                    $scope.checkedKeywords = [];

                    // sentences directive is bound to these:
                    $scope.truthies = [];
                    $scope.falsies = [];
                    $scope.regexps = [];

                    // the other values the quiz needs:
                    $scope.instructions = "";
                    $scope.stem = "";

                    $scope.truthiesType = "Truthy answers";
                    $scope.falsiesType = "Falsy answers";
                    $scope.regexpsType = "Regular Expressions";

//                     $scope.addTruthy = function (truthy) {
//                         this.truthies.push(truthy.name);
//                     };
//
//                     $scope.addFalsy = function (falsy) {
//                         this.falsies.push(falsy.name);
//                     };

                    $scope.editing = false;
                    $scope.flipEditing = function () {
                        this.editing = !this.editing;
                    };
                }
            };
        });



} ());