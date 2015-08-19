(function () {
    "use strict";

    angular.module('quizmaster')
        .config(function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/');

            $stateProvider
                .state('words', {
                    url: '/words',
                    templateUrl: 'components/words/words.client.template.html',
                    controller: 'wordsController'
                });
        });


} ());