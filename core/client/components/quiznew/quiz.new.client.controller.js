(function () {
    "use strict";

    angular.module('quizmaster')
        .controller('quizNewController', [
            '$scope',
            '$stateParams',
            '$resource',
            'subjectsResource',
            'keywordsResource',
            'quizzesResource',
            quizNewController]);

    function quizNewController(
        $scope,
        $stateParams,
        $resource,
        subjectsResource,
        keywordsResource,
        quizzesResource) {


        // words directive is bound to these:
        $scope.checkedSubjects = [];
        $scope.checkedKeywords = [];

        // sentences directive is bound to these:
        $scope.truthies = [];
        $scope.falsies = [];
        $scope.regexps = [];

        // the other values the quiz needs:
        $scope.instructions = "";
        $scope.stem = "";


    }


} ());