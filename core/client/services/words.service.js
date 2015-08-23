(function () {
    "use strict";

    angular.module('quizmaster')
        .factory('subjectsResource', ['$resource', subjectsResource])
        .factory('keywordsResource', ['$resource', keywordsResource]);


    function subjectsResource($resource) {

        return $resource(
            'api/subjects/:id',
            { id: '@_id' },
            {
                'update': { method: 'PUT' }
            });
    }


    function keywordsResource($resource) {

        return $resource(
            'api/keywords/:id',
            { id: '@_id' },
            {
                'update': { method: 'PUT' }
            });
    }


} ());