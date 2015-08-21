(function () {
    "use strict";

    angular.module('quizmaster')
        .controller('wordsController', [
            '$scope',
            '$log',
            '$location',
            '$q',
            '$resource',
            '$state',
            'subjectsResource',
            'keywordsResource',
            wordsController]);

    function wordsController(
        $scope,
        $log,
        $location,
        $q,
        $resource,
        $state,
        subjectsResource,
        keywordsResource) {

        $scope.test = "This means the wordsController and view are working.";

        // SUBJECTS SUBJECTS SUBJECTS SUBJECTS SUBJECTS
        // SUBJECTS SUBJECTS SUBJECTS SUBJECTS SUBJECTS
        // SUBJECTS SUBJECTS SUBJECTS SUBJECTS SUBJECTS


        // GET all
        $scope.listSubjects = function () {
            $scope.subjects = subjectsResource.query();
            $scope.subjectsKind = "Subjects";
        };

        // DELETE
        $scope.deleteSubject = function () {
            $scope.currentSubject.$delete()
                .then(function () {
                    $scope.subjects.splice($scope.subjects.indexOf($scope.currentSubject), 1);
                });
        };

        // POST
        $scope.createSubject = function () {
            new subjectsResource({ name: $scope.newSubject })
                .$save()
                .then(function (createdSubject) {
                    $scope.subjects.push(createdSubject);
                });
        };

        // PUT
        $scope.updateSubject = function () {
            subjectsResource.update({ _id: $scope.currentSubject._id }, $scope.currentSubject);
        };

        $scope.listSubjects();



        // KEYWORDS KEYWORDS KEYWORDS KEYWORDS KEYWORDS
        // KEYWORDS KEYWORDS KEYWORDS KEYWORDS KEYWORDS
        // KEYWORDS KEYWORDS KEYWORDS KEYWORDS KEYWORDS


        // GET all
        $scope.listKeywords = function () {
            $scope.keywords = keywordsResource.query();
            $scope.keywordsKind = "Keywords";
        };

        // DELETE
        $scope.deleteKeyword = function () {
            $scope.currentKeyword.$delete()
                .then(function () {
                    $scope.keywords.splice($scope.keywords.indexOf($scope.currentKeyword), 1);
                });
        };

        // POST
        $scope.createKeyword = function () {
            new keywordsResource({ name: $scope.newKeyword })
                .$save()
                .then(function (createdKeyword) {
                    $scope.keywords.push(createdKeyword);
                });
        };

        // PUT
        $scope.updateKeyword = function () {
            keywordsResource.update({ _id: $scope.currentKeyword._id }, $scope.currentKeyword);
        };

        $scope.listKeywords();





    }


} ());