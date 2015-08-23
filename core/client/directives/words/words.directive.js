(function () {
    "use strict";

    angular.module('quizmaster')
        .directive('gabeWords', function () {
            return {
                restrict: 'E',

                templateUrl: 'directives/words/words.template.html',

                scope: {
                    list: "=",
                    kind: "=",

                    newWord: "=",
                    createWord: "&",

                    currentWord: "=",
                    updateWord: "&",
                    deleteWord: "&",

                    checked: "="
                },

                controller: function ($scope) {
                    $scope.newWord = "";
                    $scope.checked = [];

                    $scope.editing = false;
                    $scope.flipEditing = function () {
                        this.editing = !this.editing;
                    };

                    $scope.deleting = false;
                    $scope.flipDeleting = function () {
                        this.deleting = !this.deleting;
                    };

                    $scope.currentWord = {};
                    $scope.setCurrentWord = function (word) {
                        $scope.checked.splice($scope.checked.indexOf(word), 1);
                        $scope.currentWord = word;
                    };
                    $scope.flushCurrentWord = function () {
                        $scope.currentWord = {};
                    };

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