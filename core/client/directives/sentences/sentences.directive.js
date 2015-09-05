(function () {
    "use strict";

    angular.module('quizmaster')
        .directive('gabeSentences', function () {
            return {
                restrict: 'E',

                templateUrl: 'directives/sentences/sentences.template.html',

                scope: {
                    sentences: "=",
                    sentencesType: "="
                },

                controller: function ($scope) {
                    $scope.sentences = $scope.sentences || [];
                    $scope.newSentence = $scope.newSentence || "";
                    $scope.currentSentence = $scope.currentSentence || "";

                    $scope.editing = false;
                    $scope.flipEditing = function () {
                        this.editing = !this.editing;
                    };

                    $scope.deleting = false;
                    $scope.flipDeleting = function () {
                        this.deleting = !this.deleting;
                    };

                    $scope.inputValid = function () {
                        if (!this.newSentence) return false;
                        else if (this.sentences.indexOf(this.newSentence) > -1) return false;
                        else return true;
                    };

                    $scope.editValid = function () {
                        if (!this.sentence) return false;
                        else if (this.sentence !== this.currentSentence &&
                            this.sentences.indexOf(this.sentence) > -1) return false;
                        else return true;
                    };

                    $scope.addSentence = function () {
                        this.sentences.push(this.newSentence);
                        this.newSentence = "";
                    };

                    $scope.setCurrentSentence = function (sentence) {
                        $scope.currentSentence = sentence;
                    };

                    $scope.flushCurrentSentence = function () {
                        $scope.currentSentence = "";
                    };

                    $scope.updateSentence = function () {
                        var idx = this.sentences.indexOf(this.currentSentence);
                        this.sentences.splice(idx, 1);
                        this.sentences.splice(idx, 0, this.sentence);

                    };

                    $scope.eraseSentence = function () {
                        this.sentences.splice(this.sentences.indexOf(this.sentence), 1);
                    };
                }
            };
        });



} ());