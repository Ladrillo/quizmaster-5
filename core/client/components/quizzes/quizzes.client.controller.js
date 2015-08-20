(function () {
    "use strict";

    angular.module('quizmaster')
        .controller('quizzesController', ['$scope', '$log', '$location', '$q', 'quizzesService', quizzesController]);

    function quizzesController($scope, $log, $location, $q, quizzesService) {

        $scope.test = "This means the quizzesController and view are working.";


        (refreshQuizzes());

        function refreshQuizzes() {
            quizzesService.getAllQuizzes()
                .then(function (data) {
                    console.log(data); // debugging
                    $scope.quizzes = data; // atención
                })
                .catch(function (errorMsg) {
                    $log.error('Error: ' + errorMsg);
                });

        }


        $scope.addQuiz = function () {
            quizzesService.postNewQuiz({ name: $scope.newQuiz })
                .then(function (message) {
                    $log.info(message); // debugging
                    refreshQuizzes();
                })
                .catch(function (errorMsg) {
                    $log.error(errorMsg);
                });
        };


        $scope.editQuiz = function () {
            quizzesService.putQuiz($scope.currentQuiz, $scope.currentQuiz._id)
                .then(function (message) {
                    $log.info(message);
                    refreshQuizzes();
                })
                .catch(function (errorMsg) {
                    $log.error(errorMsg);
                });
        };


        $scope.removeQuiz = function () {
            quizzesService.deleteQuiz($scope.currentQuiz._id)
                .then(function (message) {
                    $log.info(message);
                    refreshQuizzes();
                })
                .catch(function (errorMsg) {
                    $log.error(errorMsg);
                });
        };


    }



} ());