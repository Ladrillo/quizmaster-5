(function () {
    "use strict";

    angular.module('quizmaster')
        .controller('wordsController', ['$scope', '$log', '$location', '$q', 'wordsService', wordsController]);

    function wordsController($scope, $log, $location, $q, wordsService) {

        $scope.test = "This means the wordsController and view are working.";



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
                    console.log('Error: ' + errorMsg);
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
                    console.log('Error: ' + errorMsg);
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