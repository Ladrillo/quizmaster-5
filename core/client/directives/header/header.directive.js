(function () {
    "use strict";

    angular.module('quizmaster')
        .directive('gabeHeader', function () {
            return {
                restrict: 'E',
                templateUrl: 'directives/header/header.template.html',
            };
        });



} ());
