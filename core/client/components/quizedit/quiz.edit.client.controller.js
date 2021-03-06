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
            'subjects',
            'keywords',
            quizEditController]);

    function quizEditController(
        $scope,
        $stateParams,
        $state,
        $resource,
        subjectsResource,
        keywordsResource,
        quizzesResource,
        subjects,
        keywords) {


        // POPULATING THE QUIZ FORM CORRECTLY
        (function populateQuizInProgress() {

            // WE FIRST NEED SUBJECTS AND KEYWORDS IN SCOPE, resolved in route
            // the pipes fixed the worst bug imaginable
            $scope.subjects = $scope.subjects || subjects;
            $scope.keywords = $scope.keywords || keywords;

            // the pipes fixed the worst bug imaginable
            $scope.quizInProgress = $scope.quizInProgress || {};

            // IF EDITING AN EXISTING QUIZ
            if ($stateParams.id) {
                $scope.quizInProgress = quizzesResource.get({ id: $stateParams.id }, function () {
                    // populate checkchekboxes correctly
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

            // IF CREATING A NEW QUIZ don't do anything

        } ());


        // CHECK IF THERE ARE PARAMETERS IN THE URL
        $scope.isQuizNew = function () {
            // console.log($stateParams.id);
            return !$stateParams.id;
        };


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


        // DISABLES UPDATE AND CREATE BUTTONS IF RETURNS FALSE
        $scope.fieldsFilledIn = function () {
            if (
                this.quizInProgress.subjects.length > 0 &&
                this.quizInProgress.keywords.length > 0 &&
                this.quizInProgress.instructions &&
                this.quizInProgress.stem &&
                this.quizInProgress.truthies.length > 0 &&
                this.quizInProgress.falsies.length > 0) return true;
            return false;
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