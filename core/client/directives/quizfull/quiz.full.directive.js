(function () {
    "use strict";

    angular.module('quizmaster')
        .directive('gabeQuiz', function () {
            return {
                restrict: 'E',

                templateUrl: 'directives/quizfull/quiz.full.template.html',

                controller: function ($scope, subjectsResource, keywordsResource, quizzesResource) {

                    console.log('quiz in progress:', $scope.quizInProgress);

                    $scope.truthiesType = "Truthy answers";
                    $scope.falsiesType = "Falsy answers";
                    $scope.regexpsType = "Regular Expressions";

                    $scope.editing = false;
                    $scope.flipEditing = function () {
                        this.editing = !this.editing;
                    };


                    // SUBJECTS SUBJECTS SUBJECTS SUBJECTS SUBJECTS
                    // SUBJECTS SUBJECTS SUBJECTS SUBJECTS SUBJECTS
                    // SUBJECTS SUBJECTS SUBJECTS SUBJECTS SUBJECTS

                    $scope.subjectKind = "Subjects";

                    // GET all
                    $scope.listSubjects = function () {
                        return this.subjects; // this comes from parent controller, resolved in its route
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
                    // $scope.listSubjects();  // populate view


                    // KEYWORDS KEYWORDS KEYWORDS KEYWORDS KEYWORDS
                    // KEYWORDS KEYWORDS KEYWORDS KEYWORDS KEYWORDS
                    // KEYWORDS KEYWORDS KEYWORDS KEYWORDS KEYWORDS

                    $scope.keywordKind = "Keywords";

                    // GET all
                    $scope.listKeywords = function () {
                        return this.keywords; // this comes from parent controller, resolved in its route
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
                    // $scope.listKeywords(); // populate view

                }
            };
        });



} ());