(function () {
    "use strict";

    angular.module('quizmaster')
        .controller('quizController', [
            '$scope',
            '$resource',
            'subjectsResource',
            'keywordsResource',
            'quizzesResource',
            quizController]);

    function quizController(
        $scope,
        $resource,
        subjectsResource,
        keywordsResource,
        quizzesResource) {

        $scope.test = "This means the quizController and view are working.";


    }


} ());