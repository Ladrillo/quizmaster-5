(function () {
    "use strict";

    angular.module('quizmaster')
        .controller('testListController', [
            '$scope',
            '$stateParams',
            'subjectsResource',
            'keywordsResource',
            'quizzesResource',
            'testsResource',
            'tests',
            testListController]);

    function testListController(
        $scope,
        $stateParams,
        subjectsResource,
        keywordsResource,
        quizzesResource,
        testsResource,
        tests) {

        $scope.tests = tests; // resolved in the route







    }


} ());