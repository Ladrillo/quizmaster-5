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
                    addWord: "&",

                    currentWord: "=",
                    saveWord: "&",
                    eraseWord: "&"

                },

                controller: function ($scope) {
                    $scope.newWord = "";

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
                        $scope.currentWord = word;
                    };
                }
            };
        });



} ());