(function () {
    "use strict";

    angular.module('quizmaster')
        .factory('quizzesService', ['$q', '$http', quizzesService]);

    function quizzesService($q, $http) {
        return {
            getAllQuizzes: getAllQuizzes,
            postNewQuiz: postNewQuiz,
            putQuiz: putQuiz,
            deleteQuiz: deleteQuiz,
        };


        function getAllQuizzes() { // get all
            return $http({
                method: 'GET',
                url: 'api/quizzes'
            })
                .then(sendResponseData)
                .catch(sendResponseError);
        }


        function postNewQuiz(newQuiz) { // post new
            return $http({
                method: 'POST',
                url: 'api/quizzes',
                data: newQuiz
            })
                .then(function (response) {
                    return 'Keyword added';
                })
                .catch(function (response) {
                    return $q.reject('Error: ' + response.status);
                });
        }


        function putQuiz(word, id) { // update one
            return $http({
                method: 'PUT',
                url: 'api/quizzes/' + id,
                data: word
            })
            .then(function () {
                return "Quiz updated.";
            })
            .catch(function () {
                return "There was an error.";
            });
        }


        function deleteQuiz(id) { // delete one
            return $http({
                method: 'DELETE',
                url: 'api/quizzes/' + id,
            })
            .then(function () {
                return "Quiz deleted.";
            })
            .catch(function () {
                return "There was an error.";
            });
        }


        // HELPER FUNCTIONS
        function sendResponseData(response) {
            return response.data;
        }

        function sendResponseError(response) {
            return $q.reject('Error: ' + response.status);
        }
    }

} ());