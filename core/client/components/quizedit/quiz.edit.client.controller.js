(function () {
    "use strict";

    angular.module('quizmaster')
        .controller('quizEditController', [
            '$scope',
            '$stateParams',
            '$state',
            '$resource',
            'quizzesResource',
            'quizInProgress',
            'subjects',
            'keywords',
            quizEditController]);

    function quizEditController(
        $scope,
        $stateParams,
        $state,
        $resource,
        quizzesResource,
        quizInProgress,
        subjects,
        keywords) {

        // RESOLVING WORDS
        $scope.subjects = subjects; // resolving in the route so edit quiz directive won't choke
        $scope.keywords = keywords; // resolving in the route so edit quiz directive won't choke

        // TRYING TO POPULATE CURRENT QUIZ CORRECTLY

        $scope.quizInProgress = quizInProgress; // resolved in the route


        if ($scope.quizInProgress.instructions) {

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
            
        }



        // UPDATING THE QUIZ
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


        // FUNCTIONS THAT HAVE TO DO WITH CREATING A NEW QUIZ
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

    }




} ());