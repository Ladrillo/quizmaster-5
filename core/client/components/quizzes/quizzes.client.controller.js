(function () {
    "use strict";

    angular.module('quizmaster')
        .controller('quizzesController', ['$scope', '$log', '$location', '$q', '$resource', '$state', 'quizzesResource', 'wordsService', quizzesController]);

    function quizzesController($scope, $log, $location, $q, $resource, $state, quizzesResource, wordsService) {

        $scope.test = "This means the quizzesController and view are working.";

        $scope.allQuizzes = quizzesResource.query();


        // SUBJECTS
        (refreshSubjects());

        function refreshSubjects() {
            wordsService.getAllSubjects()
                .then(function (data) {
                    console.log(data); // debugging
                    $scope.subjects = data; // atención
                    $scope.subjectsKind = "Subjects";
                })
                .catch(function (errorMsg) {
                    $log.error('Error: ' + errorMsg);
                });

        }


        $scope.addSubject = function () {
            wordsService.postNewSubject({ name: $scope.newSubject })
                .then(function (message) {
                    $log.info(message); // debugging
                    refreshSubjects();
                })
                .catch(function (errorMsg) {
                    $log.error(errorMsg);
                });
        };


        $scope.editSubject = function () {
            wordsService.putSubject($scope.currentSubject, $scope.currentSubject._id)
                .then(function (message) {
                    $log.info(message);
                    refreshSubjects();
                })
                .catch(function (errorMsg) {
                    $log.error(errorMsg);
                });
        };


        $scope.removeSubject = function () {
            wordsService.deleteSubject($scope.currentSubject._id)
                .then(function (message) {
                    $log.info(message);
                    refreshSubjects();
                })
                .catch(function (errorMsg) {
                    $log.error(errorMsg);
                });
        };


        // KEYWORDS
        (refreshKeywords());

        function refreshKeywords() {
            wordsService.getAllKeywords()
                .then(function (data) {
                    console.log(data); // debugging
                    $scope.keywords = data; // atención
                    $scope.keywordsKind = "Keywords";
                })
                .catch(function (errorMsg) {
                    $log.error('Error: ' + errorMsg);
                });
        }


        $scope.addKeyword = function () {
            wordsService.postNewKeyword({ name: $scope.newKeyword })
                .then(function (message) {
                    $log.info(message);
                    refreshKeywords();
                })
                .catch(function (errorMsg) {
                    $log.error(errorMsg);
                });
        };


        $scope.editKeyword = function () {
            wordsService.putKeyword($scope.currentKeyword, $scope.currentKeyword._id)
                .then(function (message) {
                    $log.info(message);
                    refreshKeywords();
                })
                .catch(function (errorMsg) {
                    $log.error(errorMsg);
                });
        };


        $scope.removeKeyword = function () {
            wordsService.deleteKeyword($scope.currentKeyword._id)
                .then(function (message) {
                    $log.info(message);
                    refreshKeywords();
                })
                .catch(function (errorMsg) {
                    $log.error(errorMsg);
                });
        };

    }




} ());