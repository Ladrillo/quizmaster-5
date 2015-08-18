(function () {
    "use strict";

    angular.module('quizmaster')
        .directive('words', function () {
            return {
                restrict: 'E',
                templateUrl: 'directives/words/words.template.html',
                scope: {
                    list: "="
                },
                controller: function ($scope, $q, dataService) {

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