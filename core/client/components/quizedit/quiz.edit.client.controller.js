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
            'quizInProgress',
            quizEditController]);

    function quizEditController(
        $scope,
        $stateParams,
        $state,
        $resource,
        subjectsResource,
        keywordsResource,
        quizzesResource,
        quizInProgress) {




        quizInProgress.$promise.then(function (data) {
            $scope.quizInProgress = data; // resolved in the route
        })
            .then(function () {
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

    }




} ());