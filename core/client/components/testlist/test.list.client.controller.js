(function () {
    "use strict";

    angular.module('quizmaster')
        .controller('testListController', [
            '$scope',
            '$state',
            '$stateParams',
            'subjectsResource',
            'keywordsResource',
            'quizzesResource',
            'testsResource',
            'tests',
            testListController]);

    function testListController(
        $scope,
        $state,
        $stateParams,
        subjectsResource,
        keywordsResource,
        quizzesResource,
        testsResource,
        tests) {

        $scope.tests = tests; // resolved in the route


        // DELETE TEST
        $scope.removeTest = function (test) {            ;
            test.$delete(function () {
                $scope.tests.splice($scope.tests.indexOf(test), 1);
            });
        };


    }


} ());