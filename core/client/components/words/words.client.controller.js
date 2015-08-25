(function () {
    "use strict";

    angular.module('quizmaster')
        .controller('wordsController', [
            '$scope',
            '$resource',
            'subjectsResource',
            'keywordsResource',
            wordsController]);

    function wordsController(
        $scope,
        $resource,
        subjectsResource,
        keywordsResource) {

        $scope.test = "This means the wordsController and view are working.";


        // SUBJECTS SUBJECTS SUBJECTS SUBJECTS SUBJECTS
        // SUBJECTS SUBJECTS SUBJECTS SUBJECTS SUBJECTS
        // SUBJECTS SUBJECTS SUBJECTS SUBJECTS SUBJECTS

        $scope.subjectKind = "Subjects";

        // GET all
        $scope.listSubjects = function () {
            $scope.subjects = subjectsResource.query();
        };

        // DELETE
        $scope.deleteSubject = function () {
            $scope.currentSubject.$delete();
        };

        // POST
        $scope.createSubject = function () {
            new subjectsResource({ name: $scope.newSubject })
                .$save()
                .then(function (newWord) {
                    $scope.subjects.push(newWord);
                });
        };

        // PUT
        $scope.updateSubject = function () {
            subjectsResource.update({ _id: $scope.currentSubject._id }, $scope.currentSubject);
        };


        $scope.listSubjects(); // populate view


        // KEYWORDS KEYWORDS KEYWORDS KEYWORDS KEYWORDS
        // KEYWORDS KEYWORDS KEYWORDS KEYWORDS KEYWORDS
        // KEYWORDS KEYWORDS KEYWORDS KEYWORDS KEYWORDS

        $scope.keywordKind = "Keywords";

        // GET all
        $scope.listKeywords = function () {
            $scope.keywords = keywordsResource.query();
        };

        // DELETE
        $scope.deleteKeyword = function () {
            $scope.currentKeyword.$delete();
        };

        // POST
        $scope.createKeyword = function () {
            new keywordsResource({ name: $scope.newKeyword })
                .$save()
                .then(function (newWord) {
                    $scope.keywords.push(newWord);
                });
        };

        // PUT
        $scope.updateKeyword = function () {
            keywordsResource.update({ _id: $scope.currentKeyword._id }, $scope.currentKeyword);
        };


         $scope.listKeywords(); // populate view



    };


} ());