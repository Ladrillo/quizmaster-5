(function () {
    "use strict";

    angular.module('quizmaster')
        .directive('gabeWords', function () {
            return {
                restrict: 'E',

                templateUrl: 'directives/words/words.template.html',

                scope: {
                    words: "=",
                    kind: "=",
                    newWord: "=",
                    currentWord: "=",
                    checked: "=",

                    createWord: "&",
                    updateWord: "&",
                    deleteWord: "&"
                },

                controller: function ($scope) {
                    $scope.newWord = "";
                    $scope.checked = [];
                    $scope.deleting = false;
                    $scope.editing = false;

                    // WORD BEING EDITED OR DELETED
                    $scope.currentWord = {};
                    $scope.setCurrentWord = function (word) {
                        $scope.currentWord = word;
                        $scope.notCurrent = $scope.words.filter(function (e) { return e !== $scope.currentWord; });
                    };
                    $scope.flushCurrentWord = function () {
                        $scope.currentWord = {};
                    };



                    // CREATING NEW WORDS
                    $scope.validNewWord = function () {
                        return !!this.newWord &&
                            this.words.every(function (e) { return e.name !== $scope.newWord; });
                    };


                    $scope.addNewWord = function () {
                        this.createWord(); // method provided by parent controller !!!!!!
                        this.newWord = "";
                    };


                    // DELETING A WORD
                    $scope.flipDeleting = function () {
                        this.deleting = !this.deleting;
                    };

                    $scope.removeWord = function () {
                        this.words.splice(this.words.indexOf(this.currentWord), 1);
                        this.deleteWord(); // method provided by parent controller !!!!!!
                    };


                    // EDITING A WORD
                    $scope.flipEditing = function () {
                        this.editing = !this.editing;
                    };

                    $scope.editWord = function () {
                        this.updateWord(); // method provided by parent controller !!!!!!
                    };

                    $scope.validWordEdit = function () {
                        return !!this.currentWord.name &&
                            $scope.notCurrent.every(function (e) { return e.name !== $scope.currentWord.name; });
                    };


                    // MANAGING CHECKBOXES
                    $scope.toggleChecked = function (wordName) {
                        if (this.checked.indexOf(wordName) === -1) {
                            this.checked.push(wordName);
                        }
                        else this.checked.splice(this.checked.indexOf(wordName), 1);
                    };
                }
            };
        });



} ());