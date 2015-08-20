(function () {
    "use strict";

    angular.module('quizmaster')
        .factory('quizzesResource', ['$resource', quizzesResource]);

    function quizzesResource($resource) {
        return $resource(
            'api/quizzes/:id',
            { id: '@_id' },
            { 'update': { method: 'PUT' } });
    }



} ());