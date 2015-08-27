(function () {
    "use strict";

    angular.module('quizmaster')
        .controller('quizNewController', [
            '$scope',
            '$stateParams',
            '$resource',
            'subjectsResource',
            'keywordsResource',
            'quizzesResource',
            quizNewController]);

    function quizNewController(
        $scope,
        $stateParams,
        $resource,
        subjectsResource,
        keywordsResource,
        quizzesResource) {


    }


} ());