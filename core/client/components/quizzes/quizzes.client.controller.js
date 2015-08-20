(function () {
    "use strict";

    angular.module('quizmaster')
        .controller('quizzesController', ['$scope', '$log', '$location', '$q', '$resource', 'quizzesResource', quizzesController]);

    function quizzesController($scope, $log, $location, $q, $resource, quizzesResource) {

        $scope.test = "This means the quizzesController and view are working.";

        $scope.allQuizzes = quizzesResource.query();

    }


} ());