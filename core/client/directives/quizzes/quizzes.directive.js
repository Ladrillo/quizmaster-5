(function () {
    "use strict";

    angular.module('quizmaster')
        .directive('gabeQuizzes', function () {
            return {
                restrict: 'E',

                templateUrl: 'directives/quizzes/quizzes.template.html',



                controller: function ($scope) {
                    $scope.selectedSubject = "";
                    $scope.selectedKeywords = [];
                    $scope.addToSelection = function () {


                    };

                }
            };
        });



} ());