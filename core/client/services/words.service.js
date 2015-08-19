(function () {
    "use strict";

    angular.module('quizmaster')
        .factory('wordsService', ['$q', '$http', wordsService]);

    function wordsService($q, $http) {
        return {
            getAllSubjects: getAllSubjects,
            postNewSubject: postNewSubject,
            putSubject: putSubject,
            deleteSubject: deleteSubject,
            getAllKeywords: getAllKeywords,
            postNewKeyword: postNewKeyword,
            putKeyword: putKeyword,
            deleteKeyword: deleteKeyword
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


        function postNewSubject(newSubject) { // post new
            return $http({
                method: 'POST',
                url: 'api/subjects',
                data: newSubject
            })
                .then(function (response) {
                    return 'Keyword added';
                })
                .catch(function (response) {
                    return $q.reject('Error: ' + response.status);
                });
        }


        function putSubject(word, id) { // update one
            return $http({
                method: 'PUT',
                url: 'api/subjects/' + id,
                data: word
            })
            .then(function () {
                return "Subject updated.";
            })
            .catch(function () {
                return "There was an error.";
            });
        }

        function deleteSubject(id) { // delete one
            return $http({
                method: 'DELETE',
                url: 'api/subjects/' + id,
            })
            .then(function () {
                return "Subject deleted.";
            })
            .catch(function () {
                return "There was an error.";
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

        function postNewKeyword(newKeyword) { // post new
            return $http({
                method: 'POST',
                url: 'api/keywords',
                data: newKeyword
            })
                .then(function (response) {
                    return 'Keyword added';
                })
                .catch(function (response) {
                    return $q.reject('Error: ' + response.status);
                });
        }


        function putKeyword(word, id) { // update one
            return $http({
                method: 'PUT',
                url: 'api/keywords/' + id,
                data: word
            })
            .then(function () {
                return "Keyword updated.";
            })
            .catch(function () {
                return "There was an error.";
            });
        }


        function deleteKeyword(id) {  // delete one
            return $http({
                method: 'DELETE',
                url: 'api/keywords/' + id,
            })
            .then(function () {
                return "Keyword deleted.";
            })
            .catch(function () {
                return "There was an error.";
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