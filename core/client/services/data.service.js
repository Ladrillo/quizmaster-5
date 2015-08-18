(function () {
    "use strict";

    angular.module('quizmaster')
        .factory('dataService', ['$q', '$http', dataService]);
        
    function dataService($q, $http) {
        return {
            getAllSubjects: getAllSubjects,
            getAllKeywords: getAllKeywords
        };

        function getAllSubjects() {
            return $http({
                method: 'GET',
                url: 'api/subjects'
            })
                .then(sendResponseData)
                .catch(sendResponseError);
        }

        function getAllKeywords() {
            return $http({
                method: 'GET',
                url: 'api/keywords'
            })
                .then(sendResponseData)
                .catch(sendResponseError);
        }

        function sendResponseData(response) {
            return response.data;
        }

        function sendResponseError(response) {
            return $q.reject('Error: ' + response.status);
        }
    }

} ());