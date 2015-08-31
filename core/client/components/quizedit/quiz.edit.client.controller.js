(function () {
    "use strict";

    angular.module('quizmaster')
        .controller('quizEditController', [
            '$scope',
            '$stateParams',
            '$state',
            '$resource',
            'subjectsResource',
            'keywordsResource',
            'quizzesResource',
            quizEditController]);

    function quizEditController(
        $scope,
        $stateParams,
        $state,
        $resource,
        subjectsResource,
        keywordsResource,
        quizzesResource) {


        // POPULATING THE QUIZ FORM CORRECTLY
        (function populateQuizInProgress() {

            // IF EDITING AN EXISTING QUIZ
            if ($stateParams.id) {
                quizzesResource.get({ id: $stateParams.id })
                    .$promise
                    .then(function (data) {
                        // current quiz being edited
                        // console.log(data);
                        $scope.quizInProgress = data;
                        // if editing, check chekboxes correctly
                        $scope.subjects.forEach(function (subj) {
                            $scope.quizInProgress.subjects.forEach(function (pSubj) {
                                if (subj.name === pSubj.name) {
                                    subj.isChecked = true;
                                }
                            });
                        });
                        $scope.keywords.forEach(function (keyw) {
                            $scope.quizInProgress.keywords.forEach(function (pKeyw) {
                                if (keyw.name === pKeyw.name) {
                                    keyw.isChecked = true;
                                }
                            });
                        });
                    });
            }

            // IF CREATING A NEW QUIZ
            else $scope.quizInProgress = {};

            // IN EATHER CASE
            subjectsResource.query()
                .$promise
                .then(function (data) {
                    $scope.subjects = data;
                });
            keywordsResource.query()
                .$promise
                .then(function (data) {
                    $scope.keywords = data;
                });
        } ());


        // UPDATING A QUIZ
        function wordsIdsArray(objArr) {
            var arr = [];
            objArr.forEach(function (e) { arr.push(e._id); });
            return arr;
        }

        $scope.updateQuiz = function () {
            var subjectsIds = wordsIdsArray($scope.quizInProgress.subjects),
                keywordsIds = wordsIdsArray($scope.quizInProgress.keywords);

            quizzesResource.update({
                id: $scope.quizInProgress._id
            }, {
                    subjects: subjectsIds,
                    keywords: keywordsIds,
                    instructions: $scope.quizInProgress.instructions,
                    stem: $scope.quizInProgress.stem,
                    truthies: $scope.quizInProgress.truthies,
                    falsies: $scope.quizInProgress.falsies,
                    regexps: $scope.quizInProgress.regexps
                }, function () {
                    $state.go('quizlist');
                });

            ;
        };


        // CREATING A NEW QUIZ
        $scope.submitted = false;

        $scope.createQuiz = function () {
            var subjectsIds = wordsIdsArray($scope.quizInProgress.subjects),
                keywordsIds = wordsIdsArray($scope.quizInProgress.keywords);

            new quizzesResource({
                subjects: subjectsIds,
                keywords: keywordsIds,
                instructions: $scope.quizInProgress.instructions,
                stem: $scope.quizInProgress.stem,
                truthies: $scope.quizInProgress.truthies,
                falsies: $scope.quizInProgress.falsies,
                regexps: $scope.quizInProgress.regexps
            })
                .$save();
            // reset the appropiate fields
            this.quizInProgress.stem = "";
            this.quizInProgress.truthies = [];
            this.quizInProgress.falsies = [];
            this.quizInProgress.regexps = [];
            this.submitted = true;
        };


        // VARIABLES OUR SUBJECTS AND KEYWORD DIRECTIVES NEED

        $scope.truthiesType = "Truthy answers";
        $scope.falsiesType = "Falsy answers";
        $scope.regexpsType = "Regular Expressions";

        $scope.editing = false;
        $scope.flipEditing = function () {
            this.editing = !this.editing;
        };


        // SUBJECTS SUBJECTS SUBJECTS SUBJECTS SUBJECTS
        // SUBJECTS SUBJECTS SUBJECTS SUBJECTS SUBJECTS

        $scope.subjectKind = "Subjects";

        // GET all
        $scope.listSubjects = function () {
            return this.subjects; // this comes from parent controller
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


        // KEYWORDS KEYWORDS KEYWORDS KEYWORDS KEYWORDS
        // KEYWORDS KEYWORDS KEYWORDS KEYWORDS KEYWORDS

        $scope.keywordKind = "Keywords";

        // GET all
        $scope.listKeywords = function () {
            return this.keywords; // this comes from parent controller
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



    }




} ());