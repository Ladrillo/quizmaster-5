(function () {
    "use strict";

    angular.module('quizmaster')
        .controller('sentencesController', ['$scope', sentencesController]);

    function sentencesController($scope) {

        $scope.test = "This means the sentencesController and view are working.";
        $scope.sentences = [];

    }



} ());
