(function () {
    "use strict";

    angular.module('quizmaster')
        .directive('words', function () {
            return {
                restrict: 'E',
                templateUrl: 'directives/words/words.template.html',
                controller: function ($scope) {
                    $scope.description = "Subjects";
                    $scope.list = ["Math", "Biology", "English"];
                    $scope.editing = false;
                    $scope.editWord = function () {
                        this.editing = true;
                    };
                    $scope.saveWord = function () {
                        this.editing = false;
                    };
                }
            };
        });








} ());