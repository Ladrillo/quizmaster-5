(function () {
    "use strict";

    angular.module('quizmaster')
        .controller('wordsController', ['$scope', '$log', '$location', '$q', 'wordsService', wordsController]);

    function wordsController($scope, $log, $location, $q, wordsService) {

        $scope.test = "This means the wordsController and view are working.";


        // SUBJECTS
        wordsService.getAllSubjects()
            .then(function (data) {
                console.log(data); // debugging
                $scope.subjects = data; // atención
                $scope.subjectsKind = "Subjects";
            })
            .catch(function (errorMsg) {
                console.log('Error: ' + errorMsg);
            });


        $scope.addSubject = function () {
            wordsService.postNewSubject({ name: $scope.newSubject })
                .then(function (message) {
                    $scope.subjects.push({ name: $scope.newSubject });
                    $log.info(message); // debugging
                })
                .catch(function (errorMsg) {
                    $log.error(errorMsg);
                });
        };


        // KEYWORDS
        wordsService.getAllKeywords()
            .then(function (data) {
                console.log(data); // debugging
                $scope.keywords = data; // atención
                $scope.keywordsKind = "Keywords";
            })
            .catch(function (errorMsg) {
                console.log('Error: ' + errorMsg);
            });
            

        $scope.addKeyword = function () {
            wordsService.postNewKeyword({ name: $scope.newKeyword })
                .then(function (message) {
                    $scope.keywords.push({ name: $scope.newKeyword });
                    $log.info(message);
                })
                .catch(function (errorMsg) {
                    $log.error(errorMsg);
                });
        };



    }



} ());