(function () {
    "use strict";

    angular.module('quizmaster')
        .controller('quizController', [
            '$scope',
            '$log',
            '$location',
            '$q',
            '$resource',
            '$state',
            'subjectsResource',
            'keywordsResource',
            'quizzesResource',
            quizController]);

    function quizController(
        $scope,
        $log,
        $location,
        $q,
        $resource,
        $state,
        subjectsResource,
        keywordsResource,
        quizzesResource) {

        $scope.test = "This means the quizController and view are working.";







    }


} ());