(function () {
    "use strict";

    angular.module('quizmaster')
        .controller('testController', ['$scope', '$q', 'dataService', testController]);

    function testController($scope, $q, dataService) {
        // WE GRAB THE DATA FROM THE SERVICE

        // grabbing subjects from the service
        dataService.getAllSubjects()
            .then(getSubjectsSuccess)
            .catch(getError);

        // grabbing keywords from the service
        dataService.getAllKeywords()
            .then(getKeywordsSuccess)
            .catch(getError);

        // helper functions for success or error
        function getSubjectsSuccess(data) {
            console.log(data);
            $scope.subjects = data; // atención
            $scope.subjectsKind = "Subjects";
        }
        function getKeywordsSuccess(data) {
            console.log(data);
            $scope.keywords = data; // atención
            $scope.keywordsKind = "Keywords";
        }
        function getError(errorMsg) {
            console.log('Error: ' + errorMsg);
        }
    }

} ());