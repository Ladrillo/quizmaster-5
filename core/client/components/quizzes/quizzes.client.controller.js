(function () {
    "use strict";

    angular.module('quizmaster')
        .controller('quizzesController', [
            '$scope',
            '$log',
            '$location',
            '$q',
            '$resource',
            '$state',
            'subjectsResource',
            'keywordsResource',
            'quizzesResource',
            quizzesController]);

    function quizzesController(
        $scope,
        $log,
        $location,
        $q,
        $resource,
        $state,
        subjectsResource,
        keywordsResource,
        quizzesResource) {

        $scope.test = "This means the quizzesController and view are working.";


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


        // QUIZZES QUIZZES QUIZZES QUIZZES QUIZZES
        // QUIZZES QUIZZES QUIZZES QUIZZES QUIZZES
        // QUIZZES QUIZZES QUIZZES QUIZZES QUIZZES

        function extractCheckedNames(objArray) {
            var names = [];
            for (var i = 0; i < objArray.length; i++) {
                names.push(objArray[i][name]);
            }
            return names;
        }


        $scope.createQuiz = function () {
            new quizzesResource({
                subjects: extractCheckedNames($scope.checkedSubjects),
                keywords: extractCheckedNames($scope.checkedKeywords),
                instructions: $scope.instructions,
                stem: $scope.stem,
                truthies: $scope.truthies,
                falsies: $scope.falsies,
                regexps: $scope.regexps
            })
                .$save();
        };




    }


} ());