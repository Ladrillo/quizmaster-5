(function () {
    "use strict";

    angular.module('quizmaster')
        .directive('gabeWords', function () {
            return {
                restrict: 'E',
                templateUrl: 'directives/words/words.template.html',
                scope: {
                    list: "=",
                    kind: "=",
                    newWord: "=",
                    addWord: "&"
                },
                controller: function ($scope) {
                    $scope.newWord = "";
                    $scope.description = "Subjects";
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