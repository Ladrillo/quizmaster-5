(function () {
    "use strict";

    angular.module('quizmaster')
        .controller('quizzesController', [
            '$scope',
            '$log',
            '$location',
            '$q',
            '$resource',
            '$state',
            'subjectsResource',
            'keywordsResource',
            'quizzesResource',
            quizzesController]);

    function quizzesController(
        $scope,
        $log,
        $location,
        $q,
        $resource,
        $state,
        subjectsResource,
        keywordsResource,
        quizzesResource) {

        $scope.test = "This means the quizzesController and view are working.";







    }


} ());