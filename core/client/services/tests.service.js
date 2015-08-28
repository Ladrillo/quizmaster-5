(function () {
    "use strict";

    angular.module('quizmaster')
        .factory('testsResource', ['$resource', testsResource]);


    function testsResource($resource) {
        return $resource(
            'api/tests/:id',
            { id: '@_id' },
            {
                'update': { method: 'PUT' }
            });
    }



} ());