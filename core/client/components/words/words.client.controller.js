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

        $scope.kind = "Subjects";

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





    };


} ());