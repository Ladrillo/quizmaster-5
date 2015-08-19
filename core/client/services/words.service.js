(function () {
    "use strict";

    angular.module('quizmaster')
        .factory('wordsService', ['$q', '$http', wordsService]);

    function wordsService($q, $http) {
        return {
            getAllSubjects: getAllSubjects,
            postNewSubject: postNewSubject,
            getAllKeywords: getAllKeywords,
            postNewKeyword: postNewKeyword
        };

        // SERVICES FOR SUBJECTS
        function getAllSubjects() { // get all
            return $http({
                method: 'GET',
                url: 'api/subjects'
            })
                .then(sendResponseData)
                .catch(sendResponseError);
        }

        function postNewSubject(newSubject) { // post
            return $http({
                method: 'POST',
                url: 'api/subjects',
                data: newSubject
            })
            .then(function (response){
                return 'Keyword added';
            })
            .catch(function (response){
                return $q.reject('Error: ' + response.status);
            });
        }



        // SERVICES FOR KEYWORDS
        function getAllKeywords() { // get all
            return $http({
                method: 'GET',
                url: 'api/keywords'
            })
                .then(sendResponseData)
                .catch(sendResponseError);
        }

        function postNewKeyword(newKeyword) { // post
            return $http({
                method: 'POST',
                url: 'api/keywords',
                data: newKeyword
            })
            .then(function (response){
                return 'Keyword added';
            })
            .catch(function (response){
                return $q.reject('Error: ' + response.status);
            });
        }


        // HELPER FUNCTIONS THAT WORK WITH ALL
        function sendResponseData(response) {
            return response.data;
        }

        function sendResponseError(response) {
            return $q.reject('Error: ' + response.status);
        }
    }

} ());