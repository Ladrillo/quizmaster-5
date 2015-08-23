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
                })
                .state('quizzes', {
                    url: '/quizzes',
                    templateUrl: 'components/quizzes/quizzes.client.template.html',
                    controller: 'quizzesController'
                })
                .state('sentences', {
                    url: '/sentences',
                    templateUrl: 'components/sentences/sentences.client.template.html',
                    controller: 'sentencesController'
                });
        });

} ());