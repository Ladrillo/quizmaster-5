(function () {
    "use strict";

    angular.module('quizmaster')
        .controller('quizNewController', [
            '$scope',
            '$stateParams',
            '$state',
            '$resource',
            'subjectsResource',
            'keywordsResource',
            'quizzesResource',
            'subjects',
            'keywords',
            quizNewController]);

    function quizNewController(
        $scope,
        $stateParams,
        $state,
        $resource,
        subjectsResource,
        keywordsResource,
        quizzesResource,
        subjects,
        keywords) {

        $scope.subjects = subjects; // resolving in the route so edit quiz directive won't choke
        $scope.keywords = keywords; // resolving in the route so edit quiz directive won't choke

        function wordsIdsArray(objArr) {
            var arr = [];
            objArr.forEach(function (e) { arr.push(e._id); });
            return arr;
        }

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