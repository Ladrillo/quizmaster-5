(function () {
    "use strict";

    angular.module('quizmaster')
        .config(function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/');

            $stateProvider
                .state('home', {
                    url: '/',
                    templateUrl: 'components/test/test.client.template.html',
                    controller: 'testController'
                });
        });


} ());